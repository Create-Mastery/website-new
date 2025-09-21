import { toggleNode } from "./Toggle-Node";

// seleziona tutti i wrapper della sidebar
document.querySelectorAll<HTMLElement>('.sidebar-wrapper').forEach(wrapper => {
  const id = wrapper.dataset.id;
  if (!id) return;

  // evita di aggiungere più volte lo stesso listener
  if ((wrapper as any).__listenerAttached) return;

  wrapper.addEventListener('click', () => toggleNode(id));
  (wrapper as any).__listenerAttached = true;
});
