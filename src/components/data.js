const getrandomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};
const getRandomDescription = (count) => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
  const sentences = text.split(`.`);
  const description = [];
  for (let i = 0; i < count; i++) {
    description.push(sentences[Math.floor(Math.random() * sentences.length)]);
  }
  return description.toString();
};

const data = {
  name: new Set([`Побег из Шоушенка`, `Крёстный отец`, `Крёстный отец 2`, `Тёмный рыцарь`, `12 разгневанных мужчин`, `Список Шиндлера`, `Криминальное чтиво`, `	Властелин колец: Возвращение короля`, `	Хороший, плохой, злой`, `Бойцовский клуб`, `Властелин колец: Братство Кольца`, `Форрест Гамп`, `Звёздные войны. Эпизод V: Империя наносит ответный удар`, `Начало`, `Властелин колец: Две крепости`]),
  image: new Set([`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`]),
  description: getRandomDescription(getrandomInteger(1, 3)),
  year: getrandomInteger(1920, 2019),
  duration: getrandomInteger(49, 140),
  genre: [`Crime`, `Fantasy`, `Historical`, `Horror`, `Mystery`],
  rating: getrandomInteger(1, 9),
  comments: getrandomInteger(1, 40),
  comment1s: getrandomInteger(1, 40)
};
const generateFilmData = () => {
  return {
    name: Array.from(data.name)[Math.floor(Math.random() * 10)].trim(` `),
    image: Array.from(data.image)[Math.floor(Math.random() * 6)],
    description: getRandomDescription(getrandomInteger(1, 3)).substring(0, 140),
    fullDescription: getRandomDescription(getrandomInteger(1, 3)),
    year: getrandomInteger(1920, 2019),
    duration: getrandomInteger(49, 140),
    genre: data.genre[Math.floor(Math.random() * 5)],
    rating: getrandomInteger(1, 9),
    comments: getrandomInteger(1, 40),
  };
};
const mockData = new Array(21).fill(``).map(generateFilmData);
export {getrandomInteger, mockData};
