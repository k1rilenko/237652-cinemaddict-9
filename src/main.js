import {menu} from './components/menu.js';
import {search} from './components/search.js';
import {user} from './components/user.js';
import {container} from './components/mainContainer.js';
import {categoryRated} from './components/categoryContainer.js';
import {categoryComment} from './components/categoryContainerComment.js';
import {Film} from './components/film.js';
import {Popup} from './components/popup.js';
import {button} from './components/button.js';
import {getrandomInteger, mockData} from './components/data.js';
import {utils} from './components/utils.js';
const footer = document.querySelector(`.footer`);
footer.querySelector(`.footer__statistics p`).innerHTML = `${mockData.length} movies inside`;

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
const renderFilm = (mockFilm) => {
  const film = new Film(mockFilm);
  const popup = new Popup(mockFilm);
  utils.render(filmContainer, film.getElement(), utils.position.BEFOREEND);
  const onEscKeyDown = (e) => {
    if (e.key === `Escape` || e.key === `Esc`) {
      utils.unrender(popup.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };
  const popupOpenElements = [
    film.getElement().querySelector(`.film-card__poster`),
    film.getElement().querySelector(`.film-card__title`),
    film.getElement().querySelector(`.film-card__comments`)
  ];
  popupOpenElements.forEach((el) => {
    el.addEventListener(`click`, () => {
      utils.render(footer, popup.getElement(), utils.position.BEFOREEND);
      document.addEventListener(`keydown`, onEscKeyDown);
    });
  });
  popup.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    utils.unrender(popup.getElement());
    document.removeEventListener(`click`, onEscKeyDown);
  });
  popup.getElement().querySelector(`.film-details__comment-input`).addEventListener(`focus`, () => {
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  popup.getElement().querySelector(`.film-details__comment-input`).addEventListener(`blur`, () => {
    document.addEventListener(`keydown`, onEscKeyDown);
  });
};
const filmContainer = document.querySelector(`.films-list__container`);
const showMoreButton = document.querySelector(`.films-list__show-more`);
const mockDataCopy = [...mockData];
const singleRender = () => {
  mockDataCopy.splice(0, 5).forEach((film) => {
    renderFilm(film);
  });
};
singleRender();
showMoreButton.addEventListener(`click`, () => {
  singleRender();
  if (mockDataCopy.length === 0) {
    showMoreButton.style = `display: none`;
  }
});
