const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(this.parentNode);
    button.parentNode.classList.remove("active");
    button.parentNode.classList.toggle("active");
  });
});
console.log(toggleButtons);
