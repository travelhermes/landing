/* Change menu depending on scroll */
const sections = document.querySelectorAll(".anchor");

function switchMenuActive(hash) {
  let currentLink = document.querySelector(".landing-nav").querySelector(".active");
  if (currentLink) {
    currentLink.classList.remove("active");
    currentLink.classList.remove("font-weight-bold");
    currentLink.classList.remove("text-white-dm");
    currentLink.classList.remove("text-dark-lm");
  }

  let newLink = document.querySelector(".landing-nav").querySelector("#menu-" + hash);
  newLink.classList.add("active");
  newLink.classList.add("font-weight-bold");
  newLink.classList.add("text-white-dm");
  newLink.classList.add("text-dark-lm");
  //newLink.focus();
}

var observer = new IntersectionObserver((entries) => {
  if (entries.length == 1) {
    var hash = entries[0].target.getAttribute("id");
    switchMenuActive(hash);
  }
});

sections.forEach((image) => {
  observer.observe(image);
});

/* Add menu bar events */
document.querySelector('#menu-recomendations').addEventListener('click', () => { switchMenuActive('recomendations') });
document.querySelector('#menu-planner').addEventListener('click', () => { switchMenuActive('planner') });
document.querySelector('#menu-community').addEventListener('click', () => { switchMenuActive('community') });
document.querySelector('#menu-cities').addEventListener('click', () => { switchMenuActive('cities') });