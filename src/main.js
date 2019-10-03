import {menu} from './components/menu.js';
import {search} from './components/search.js';
import {user} from './components/user.js';
import {container} from './components/mainContainer.js';
import {categoryRated} from './components/categoryContainer.js';
import {categoryComment} from './components/categoryContainerComment.js';
import {film} from './components/film.js';
import {button} from './components/button.js';
import {filmsData} from './components/filmsData.js';
import {getrandomInteger} from './components/data.js';

const render = (block, template, position = `afterend`) => {
  const element = document.querySelector(block);
  element.insertAdjacentHTML(position, template);
};

render(`.header__logo`, search());
render(`.header`, user(getrandomInteger(0, 25)), `beforeend`);
render(`.main`, menu(), `afterbegin`);
render(`.main`, container(), `beforeend`);
render(`.films-list`, button(), `beforeend`);
render(`.films-list`, categoryComment());
render(`.films-list`, categoryRated());

for (const item of filmsData) {
  render(`.films-list__container`, film(item), `beforeend`);
}
render(`.films-list--extra .films-list__container`, film(filmsData[Math.floor(Math.random() * 5)]), `beforeend`);
render(`.films-list--extra .films-list__container`, film(filmsData[Math.floor(Math.random() * 5)]), `beforeend`);
render(`.films-list--most-comment .films-list__container`, film(filmsData[Math.floor(Math.random() * 5)]), `beforeend`);
render(`.films-list--most-comment .films-list__container`, film(filmsData[Math.floor(Math.random() * 5)]), `beforeend`);
