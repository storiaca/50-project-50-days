const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const cirlce = document.createElement("span");
    cirlce.classList.add("circle");
    cirlce.style.top = yInside + "px";
    cirlce.style.left = xInside + "px";

    this.appendChild(cirlce);

    setTimeout(() => cirlce.remove(), 500);
  });
});
