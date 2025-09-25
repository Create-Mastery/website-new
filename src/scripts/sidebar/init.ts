import { toggleNode } from "./Toggle-Node";

document
  .querySelectorAll<HTMLElement>(".sidebar-wrapper")
  .forEach((wrapper) => {
    const id = wrapper.dataset.id;
    if (!id) return;

    if ((wrapper as any).__listenerAttached) return;

    wrapper.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleNode(id);
    });

    (wrapper as any).__listenerAttached = true;
  });
