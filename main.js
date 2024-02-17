const header = document.querySelector("header");
const menuBar = document.querySelector(".links-buttons");
const menuImg = document.querySelector(".menu>img");
const signUp = document.querySelector(".signUp");
// for the header
window.onscroll = () => {
  if (window.scrollY > 50) {
    header.classList.add('onscroll');
  } else {
    header.classList.remove('onscroll');
  }
};

// for the toggler menu

menuImg.onclick = () => {
  menuBar.classList.toggle('show');
};

signUp.onclick = () => window.location.href = "./signup.html";