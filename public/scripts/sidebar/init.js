import { toggleNode } from "./Toggle-Node.js";
document.querySelectorAll(".sidebar-wrapper").forEach((wrapper) => {
  const id = wrapper.dataset.id;
  if (!id) return;
  if (wrapper.__listenerAttached) return;
  wrapper.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleNode(id);
  });
  wrapper.__listenerAttached = true;
});
