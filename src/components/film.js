import {AbstractComponent} from './abstractComponent.js';

export class Film extends AbstractComponent {
  constructor({name, rating, year, duration, genre, image, description, comments}) {
    super();
    this._name = name;
    this._rating = rating;
    this._year = year;
    this._duration = duration;
    this._genre = genre;
    this._image = image;
    this._description = description;
    this._comments = comments;
  }
  getTemplate() {
    return `<article class="film-card">
              <h3 class="film-card__title">${this._name}</h3>
              <p class="film-card__rating">${this._rating}</p>
              <p class="film-card__info">
                <span class="film-card__year">${this._year}</span>
                <span class="film-card__duration">${this._duration}</span>
                <span class="film-card__genre">${this._genre}</span>
              </p>
              <img src="./images/posters/${this._image}" alt="" class="film-card__poster">
              <p class="film-card__description">${this._description}</p>
              <a class="film-card__comments">${this._comments} comments</a>
              <form class="film-card__controls">
                <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
              </form>
            </article>`;
  }
}
