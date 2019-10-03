export const user = (number) => {
  let range;
  if (number === 0) {
    range = ``;
  } else if (number > 0 && number <= 10) {
    range = `notice`;
  } else if (number > 10 && number <= 20) {
    range = `fan`;
  } else if (number > 21) {
    range = `movie buff`;
  }
  return `<section class="header__profile profile">
  <p class="profile__rating">${range}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};
