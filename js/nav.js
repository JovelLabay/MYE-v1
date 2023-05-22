const navBar = document.querySelector('#navigation');

const home = document.querySelector("#home");
const proSer = document.querySelector("#pro-ser");

const domain = document.location.pathname


if (domain.includes("index.html")) {
  home.classList.add("active");
  home.classList.remove("inactive");

} else {
  home.classList.remove("active");
    home.classList.add("inactive");

}

if (domain.includes("products_services.html")) {
  proSer.classList.add("active");
  proSer.classList.remove("inactive");

} else {
  proSer.classList.remove("active");
    proSer.classList.add("inactive");

}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navBar.classList.add('shadow');
  } else {
    navBar.classList.remove('shadow');
  }
});