document.querySelector("#toggleButton").addEventListener("click", function () {
  const logo = document.querySelector(".js-logo");
  const replacement = document.querySelector(".js-replacement");

  if (logo.classList.contains("hidden")) {
    logo.classList.remove("hidden");
    replacement.classList.add("hidden");
  } else {
    logo.classList.add("hidden");
    replacement.classList.remove("hidden");
  }
});
