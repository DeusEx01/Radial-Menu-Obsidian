"use strict"
///////////////////////////////////////////////////////////////
//---Configurations---//
let menu_elements = 10;
let menu_angle = 360/menu_elements;
let menu_icons = {
  option0: {
    icon: 'search',
    hint: 'Templates'
  },
  option1: {
    icon: 'star',
    hint: 'Favorites'
  },
  option2: {
    icon: 'check',
    hint: 'Tasks'
  },
  option3: {
    icon: 'key',
    hint: 'Passwords'
  },
  option4: {
    icon: 'view_comfy_alt',
    hint: 'Library'
  },
  option5: {
    icon: 'groups',
    hint: 'Friends'
  },
  option6: {
    icon: 'routine',
    hint: 'Day/Night'
  },
  option7: {
    icon: 'home',
    hint: 'Home'
  },
  option8: {
    icon: 'manage_history',
    hint: 'Status'
  },
  option9: {
    icon: 'low_priority',
    hint: 'Move to'
  }

}
let x = (250 + 250 * (Math.cos(-menu_angle * Math.PI / 180))) / 500;
let y = (250 + 250 * (Math.sin(-menu_angle * Math.PI / 180))) / 500;


///////////////////////////////////////////////////////////////

function startPlugin() {
  document.querySelector('#menu__svg').setAttribute('d', `M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 ${x},${y} z`);
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />`)
}
let container = document.querySelector('.container');

function menuSegmentCoordinates(elemCounts) {

let angle = 36;

let corX = 250 + 250 * (Math.cos(-angle * Math.PI / 180));
let corY = 250 + 250 * (Math.sin(-angle * Math.PI / 180));

let finishedX = (corX / 500);
let finishedY = (corY / 500);

console.log(finishedX  + " % (first number)");
console.log(finishedY  + " % (second number)");
}

function newElement(tag, cssclass, elementAppend) {
  let element = document.createElement(tag);
  element.classList.add(cssclass);
  elementAppend.append(element);
  return element;
}

function createMenu(menu_elements_count) {
  let menu = newElement('ul', 'menu', container);
  for (let i = 0, angle = 0; i < menu_elements_count; i++) {
    let li = newElement('li', 'menu-segment', menu);
    let a = newElement('a', 'menu-segment__link', li);
    let icon = newElement('span', 'material-symbols-outlined', a);
    icon.innerHTML = menu_icons[`option${i}`].icon;
    li.style.transform = `rotate(${angle}deg)`;
    icon.style.transform = `rotate(${-angle}deg)`;
    angle += menu_angle;
  }
}
startPlugin()
menuSegmentCoordinates()
createMenu(menu_elements);
