const checkbox = document.querySelector(".checkbox-input");
const paginations = [...document.querySelectorAll('.panigination>span')];
const images = [...document.querySelectorAll('.content-image img')];
const showPassword = document.querySelector('.show-password');

checkbox.onclick = () => {
  checkbox.classList.toggle('active');
};

// for the images
function makePag(pagination) {
  paginations.forEach(pagination => pagination.classList.remove("active"));
  pagination.classList.add('active');
}

paginations.forEach(pag => {
  pag.onclick = () => {
    makePag(pag);
    hideActive();
    images[paginations.indexOf(pag)].classList.add('active');
  };
});

function hideActive() {
  images.forEach(img => {
    img.classList.remove('active');
  });
}


showPassword.onclick = () => {
  showContent(showPassword);
};

function showContent(ele) {
  const input = ele.parentElement.querySelector('input');
  if (input.type == 'password') {
    input.type = 'text';
    ele.src = './Assets/clickedHide.svg';
  } else {
    input.type = 'password';
    ele.src = './Assets/hidePassword.svg';
  }
}