// const mainContent = document.querySelector(".main");
const mainContent = document.querySelector("body");
const sideBar = document.querySelector(".sidebar");

let winWidth = window.innerWidth;
let mainContentHeight = 0;

function contentHeight() {
  winWidth = window.innerWidth;
  if (winWidth > 767.98) {
    const mainContentHeight = mainContent.offsetHeight;
    sideBar.style.height = `${mainContentHeight}px`;
  } else {
    sideBar.style.height = ``;
  }
}

const timerId = setTimeout(contentHeight, 50); // завдання висоти sideBar на старті сторінки

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;

  if (winWidth > 767.98) {
    const mainContentHeight = mainContent.offsetHeight;
    sideBar.style.height = `${mainContentHeight}px`;
  } else {
    sideBar.style.height = ``;
  }
}); // завдання висоти sideBar при зміні розподільної здатності сторінки

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalBackdropLink: document.querySelector(".modal-backdrop"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    const isModalOpen =
      refs.openModalBtn.getAttribute("aria-expanded") === "true" || false;
    refs.openModalBtn.setAttribute("aria-expanded", !isModalOpen);
    refs.modal.classList.toggle("is-hidden");

    const scrollLockMethod = !isModalOpen
      ? (document.body.style.overflow = "hidden") // заблокувати скролл
      : (document.body.style.overflow = "scroll"); // розблокувати скролл
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleModal();
    }
  });
})();
