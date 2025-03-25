window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".counter-wrapper");
    const counter = counterWrapper.querySelector("[data-counter]");
  }

  //   if (event.target.dataset.action === "minus") {
  //   }
});
