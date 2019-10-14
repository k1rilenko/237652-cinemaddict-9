import {Filmcontainer} from './mainContainer';
import {FilmsList} from './filmsList';
import {utils} from './utils';
import {Film} from './film';
import {Popup} from './popup';
import {Sort} from './sort';

export class PageController {
  constructor(container, filmData) {
    this._container = container;
    this._filmData = filmData;
    this._filmContainer = new Filmcontainer();
    this._filmsList = new FilmsList();
    this._sort = new Sort();
  }
  init() {
    utils.render(this._container, this._filmContainer.getElement(), utils.position.BEFOREEND);
    utils.render(this._container, this._sort.getElement(), utils.position.AFTERBEGIN);
    utils.render(this._filmContainer.getElement().querySelector(`.films-list`), this._filmsList.getElement(), utils.position.BEFOREEND);
    this._filmData.forEach((film) => this._renderFilm(film));
    this._sort.getElement().addEventListener(`click`, (e) => this.sort(e));
  }
  sort(e) {
    if (e.target.tagName !== `A`) {
      return;
    }
    this._filmsList.getElement().innerHTML = ``;
    switch (e.target.dataset.sortType) {
      case (`default`):
        this._filmData.forEach((film) => this._renderFilm(film));
        break;
      case (`date`):
        const sortFilmsByDate = this._filmData.slice().sort((a, b) => a.year - b.year);
        sortFilmsByDate.forEach((film) => this._renderFilm(film));
        break;
      case (`rating`):
        const sortFilmsByRating = this._filmData.slice().sort((a, b) => a.rating - b.rating);
        sortFilmsByRating.forEach((film) => this._renderFilm(film));
        break;
    }
  }
  _renderFilm(filmData) {
    const film = new Film(filmData);
    const popup = new Popup(filmData);
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
        utils.render(document.querySelector(`.footer`), popup.getElement(), utils.position.AFTERBEGIN);
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
    utils.render(this._filmsList.getElement(), film.getElement(), utils.position.BEFOREEND);
  }
}
