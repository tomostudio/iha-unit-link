document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  const closeButtonDesktop = document.getElementById("close_desktop");
  const closeButtonMobile = document.getElementById("close_mobile");

  const removeContainer = (button) => {
    if (button) {
        button.addEventListener("click", () => {
        const mainContainer = document.querySelector("main");

        mainContainer.remove();
      });
    }
  };

  removeContainer(closeButtonDesktop)
  removeContainer(closeButtonMobile)
});
