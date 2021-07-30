window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
});

function toggleNavBar(e) {
  e.classList.toggle("change");
  const navBar = document.getElementById("topNavBar");
  navBar.classList.toggle("show");
}
