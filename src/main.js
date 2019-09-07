import {menu} from './components/menu.js';
import {search} from './components/search.js';
import {user} from './components/user.js';
import {container} from './components/mainContainer.js';
import {category} from './components/categoryContainer.js';
import {film} from './components/film.js';
import {button} from './components/button.js';

const render = (block, template, position = `afterend`, count = 1) => {
  const element = document.querySelector(block);
  if (count > 1) {
    for (let i = 0; i < count; i++) {
      element.insertAdjacentHTML(position, template);
    }
  } else {
    element.insertAdjacentHTML(position, template);
  }
};

render(`.header__logo`, search());
render(`.header`, user(), `beforeend`);
render(`.main`, menu(), `afterbegin`);
render(`.main`, container(), `beforeend`);
render(`.films-list`, button(), `beforeend`);
render(`.films-list`, category());
render(`.films-list`, category());
render(`.films-list__container`, film(), `beforeend`, 5);
render(`.films-list--extra .films-list__container`, film(), `beforeend`, 2);
