const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".projects-photo img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});