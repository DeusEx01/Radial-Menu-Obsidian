let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let button = document.querySelector(".radial-button");
toggle.onclick = function (event) {
  console.log("Main button was clicked");
};

menu.addEventListener("click", (event) => {
  if (!event.target.closest(".radial-button")) return;
  let button = event.target.closest(".radial-button");
  console.log(button.firstElementChild.textContent);
  event.preventDefault();
});

menu.style.display = "none";
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyB") {
    menu.style.display = "";
  }
  event.preventDefault();
});

document.addEventListener("keyup", (event) => {
  if (event.code == "KeyB") {
    menu.style.display = "none";
  }

  event.preventDefault();
});
