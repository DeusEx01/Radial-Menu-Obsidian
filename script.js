const radial_menu = document.querySelector("#radial_menu_main");
document.addEventListener("keydown", (event) => {
  if (event.code == "F6") {
    if (event.repeat) {
      return;
    }
    radial_menu.classList.remove("radial_menu_hidden");
    console.log(radial_menu.classList);
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "F6") {
    radial_menu.classList.add("radial_menu_hidden");
    let submenu = document.querySelector("#radial_submenu-6");
    submenu.classList.add("radial_menu_hidden");
  }
});
radial_menu.addEventListener("click", (event) => {
  if (!event.target.closest("[data-id]")) return;
  let button = event.target.closest("[data-id]");
  switch (button.dataset.id) {
    case "submenu-6":
      console.log(button.dataset.id);
      break;
    case "1":
      console.log(button.dataset.id);
      break;
    case "2":
      console.log(button.dataset.id);
      break;
    case "3":
      console.log(button.dataset.id);
      break;
    case "4":
      console.log(button.dataset.id);
      break;
    case "5":
      console.log(button.dataset.id);
      break;
    case "6":
      console.log(button.dataset.id);
      radial_menu.classList.add("radial_menu_hidden");
      let submenu = document.querySelector("#radial_submenu-6");
      submenu.classList.toggle("radial_menu_hidden");
      console.log(submenu);
      break;
    case "7":
      console.log(button.dataset.id);
      break;
    case "8":
      console.log(button.dataset.id);
      break;
  }

  event.preventDefault();
});

let submenu = document.querySelector("#radial_submenu-6");
submenu.addEventListener("click", (event) => {
  if (!event.target.closest("[data-id]")) return;
  let button = event.target.closest("[data-id]");
  switch (button.dataset.id) {
    case "submenu-6":
      radial_menu.classList.remove("radial_menu_hidden");
      let submenu = document.querySelector("#radial_submenu-6");
      submenu.classList.add("radial_menu_hidden");
      break;
    case "1":
      console.log(button.dataset.id);
      break;
    case "2":
      console.log(button.dataset.id);
      break;
    case "3":
      console.log(button.dataset.id);
      break;
    case "4":
      console.log(button.dataset.id);
      break;
    case "5":
      console.log(button.dataset.id);
      break;
    case "6":
      console.log(button.dataset.id);
      break;
    case "7":
      console.log(button.dataset.id);
      break;
    case "8":
      console.log(button.dataset.id);
      break;
  }

  event.preventDefault();
});
