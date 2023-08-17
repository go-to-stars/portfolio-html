const mainContent = document.querySelector(".main");
const sideBar = document.querySelector(".sidebar");

let winWidth = window.innerWidth;
if (winWidth > 767.98) {
  const mainContentHeight = mainContent.offsetHeight;
  sideBar.style.height = `${mainContentHeight}px`;
}

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;

  if (winWidth > 767.98) {
    const mainContentHeight = mainContent.offsetHeight;
    sideBar.style.height = `${mainContentHeight}px`;
  } else {
    sideBar.style.height = ``;
  }
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute("aria-expanded") === "true" || false;
    refs.openModalBtn.setAttribute("aria-expanded", !isModalOpen);
    refs.modal.classList.toggle("is-hidden");

    const scrollLockMethod = !isModalOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();
