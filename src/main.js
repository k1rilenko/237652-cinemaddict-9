import {menu} from './components/menu.js';
import {search} from './components/search.js';
import {user} from './components/user.js';
import {button} from './components/button.js';
import {getrandomInteger, mockData} from './components/data.js';
import {PageController} from './components/pageController.js';
const main = document.querySelector(`.main`);
const pageController = new PageController(main, mockData);
pageController.init();
const footer = document.querySelector(`.footer`);
footer.querySelector(`.footer__statistics p`).innerHTML = `${mockData.length} movies inside`;

const render = (block, template, position = `afterend`) => {
  const element = document.querySelector(block);
  element.insertAdjacentHTML(position, template);
};
render(`.header__logo`, search());
render(`.header`, user(getrandomInteger(0, 25)), `beforeend`);
render(`.main`, menu(), `afterbegin`);

render(`.films-list`, button(), `beforeend`);
/* render(`.films-list`, categoryComment());
render(`.films-list`, categoryRated());
 */
/* singleRender();
showMoreButton.addEventListener(`click`, () => {
  singleRender();
  if (mockDataCopy.length === 0) {
    showMoreButton.style = `display: none`;
  }
}); */
