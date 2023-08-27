const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const panel = button.nextElementSibling;
    if (button.classList.contains("active")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = 0;
    }
  });
});
