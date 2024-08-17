import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
// Remember to rename these classes and interfaces!


export default class MyPlugin extends Plugin {

	async onload() {
///////////////////////////////////////////////////////////////
//---Configurations---//
let menu_elements = 10;
let menu_angle = (360/menu_elements);
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
let diameter = 500;
let radius = diameter/2;

let x = ((radius + radius * (Math.cos(-menu_angle * Math.PI / 180))) / diameter);
let y = ((radius + radius * (Math.sin(-menu_angle * Math.PI / 180))) / diameter);

let container =  document.createElement('div');
container.classList.add('radial_container')
document.body.append(container);
container.insertAdjacentHTML('afterbegin', `<svg height="0" width="0">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="sector">
          <path fill="none" stroke="#111" stroke-width="2" class="sector" id="menu__svg"></path>
        </clipPath>
      </defs>
    </svg>`)


///////////////////////////////////////////////////////////////

function startPlugin() {
  document.querySelector('#menu__svg').setAttribute('d', `M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 ${x},${y} z`);
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />`)
}

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
  let menu = newElement('ul', 'radial_menu', container);
  let description = newElement('div', 'radial_menu_description', container);
  description.innerHTML = 'MENU';

  for (let i = 0, angle = 0; i < menu_elements_count; i++) {
    let li = newElement('li', 'menu-segment', menu);
    let a = newElement('a', 'menu-segment__link', li);
    let icon = newElement('span', 'material-symbols-outlined', a);
    let description = newElement('span', 'menu-segment__description', a);

    icon.innerHTML = menu_icons[`option${i}`].icon;
    description.innerHTML = menu_icons[`option${i}`].hint;

    li.style.transform = `rotate(${angle}deg)`;
    icon.style.transform = `rotate(${-angle}deg)`;
    angle += menu_angle;
  }
}
/*---------EVENT LISTENERS----------*/
let main_menu = document.querySelector('.radial_container');
main_menu.addEventListener('mouseover', (event) => {
  if (!event.target.closest('A')) return;
  let target = event.target.closest('A');

  let targetDescription = target.lastElementChild.textContent;
  let desctiption_display = document.querySelector('.radial_menu_description');

  desctiption_display.innerHTML = targetDescription;
  // console.log(target);

})

main_menu.addEventListener('mouseout', (event) => {
  if (!event.target.closest('A')) return;


  let desctiption_display = document.querySelector('.radial_menu_description');
  desctiption_display.innerHTML = 'MENU';
})


/*-------------------------------------------*/

startPlugin()
menuSegmentCoordinates()
createMenu(menu_elements);


	};

  
	onunload() {
    let menu_delete = document.querySelector('.radial_container');
    menu_delete.remove();
	}


}


