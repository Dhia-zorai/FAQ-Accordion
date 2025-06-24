const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const question = button.closest(".question");
    const iconminus = question.querySelector(".icon-minus");
    const iconplus = question.querySelector(".icon-plus");
    const p = question.querySelector("p");
    iconminus.classList.toggle("active");
    iconplus.classList.toggle("active");
    p.classList.toggle("active");

    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
  });
});
