const switcher = document.querySelector(".switcher");

switcher.addEventListener("input", (e) => {
  if (e.target.value === "2") {
    document.documentElement.setAttribute("data-theme", "2");
  } else if (e.target.value === "1") {
    document.documentElement.setAttribute("data-theme", "1");
  } else if (e.target.value === "3") {
    document.documentElement.setAttribute("data-theme", "3");
  }
});
