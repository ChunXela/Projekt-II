const element = document.querySelector(".postArea");

document.addEventListener("scroll", function () {
  if (
    window.scrollY >
    element.offsetTop - document.documentElement.clientHeight + element.offsetHeight / 2
  ) {
    document.querySelector(".postArea").classList.add("visible");
  }
});

document.querySelector("body").style.opacity = 1;