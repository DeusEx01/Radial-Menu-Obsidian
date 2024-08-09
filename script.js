let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.onclick = function (event) {
  menu.classList.toggle("active");
};
