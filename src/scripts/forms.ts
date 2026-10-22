// Envoi des formulaires vers l'endpoint configuré (Formspree ou compatible).
// Sans endpoint, on ouvre la messagerie de l'utilisateur avec la demande pré-remplie.

function summarize(form: HTMLFormElement): string {
  const data = new FormData(form);
  const lines: string[] = [];
  const seen = new Set<string>();
  for (const [key] of data) {
    if (key.startsWith('_') || seen.has(key)) continue;
    seen.add(key);
    const values = data.getAll(key).map(String).filter(Boolean);
    if (values.length) lines.push(`${key} : ${values.join(', ')}`);
  }
  return lines.join('\n');
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-gl7-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('.form-status');
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const endpoint = form.dataset.endpoint;
      const demande = form.querySelector<HTMLInputElement>('input[name="demande"]:checked')?.value;
      const nom = form.querySelector<HTMLInputElement>('input[name="nom"]')?.value;
      const subject = `Rappel demandé${demande ? ` – ${demande}` : ''}${nom ? ` – ${nom}` : ''}`;
      const subjectField = form.querySelector<HTMLInputElement>('input[name="_subject"]');
      if (subjectField) subjectField.value = subject;
      const email = form.dataset.email ?? '';

      if (!endpoint) {
        const body = encodeURIComponent(summarize(form));
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
        if (status) {
          status.className = 'form-status info';
          status.textContent = `Votre messagerie va s'ouvrir avec votre demande. Si rien ne se passe, écrivez-nous à ${email}.`;
        }
        return;
      }

      if (submit) {
        submit.disabled = true;
        submit.dataset.label = submit.textContent ?? '';
        submit.textContent = 'Envoi en cours…';
      }
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(String(res.status));
        window.location.href = '/merci';
      } catch {
        if (status) {
          status.className = 'form-status error';
          status.textContent = `L'envoi a échoué. Réessayez ou contactez-nous directement à ${email}.`;
        }
        if (submit) {
          submit.disabled = false;
          submit.textContent = submit.dataset.label ?? 'Envoyer';
        }
      }
    });
  });
}
