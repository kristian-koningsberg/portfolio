document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  let activeItem = null;

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".accordian-icons");

    header.addEventListener("click", () => {
      const content = item.querySelector(".accordion-content");

      if (activeItem && activeItem !== item) {
        activeItem
          .querySelector(".accordion-content")
          .classList.remove("active");
        activeItem
          .querySelector(".accordian-icons")
          .classList.remove("icon-active"); // Correct class name here
      }

      content.classList.toggle("active");
      icon.classList.toggle("icon-active");

      activeItem = item;
    });
  });
});
