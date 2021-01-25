const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.parentNode.classList.toggle("active");
  });
});
console.log(toggleButtons);
