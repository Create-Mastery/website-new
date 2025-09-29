export function toggleNode(id: string) {
  const chevronIcon = document.getElementById("chevronIcon-" + id);
  const entryContent = document.getElementById("id-node-" + id);

  if (!chevronIcon || !entryContent) return;

  const isOpen = entryContent.style.display === "block";

  entryContent.style.display = isOpen ? "none" : "block";
  chevronIcon.style.setProperty(
    "--fa-rotate-angle",
    isOpen ? "-90deg" : "0deg",
  );
}
