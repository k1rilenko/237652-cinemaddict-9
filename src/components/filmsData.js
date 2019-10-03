import {generaTeFilmData, dataValue} from './data.js';

const filmsData = [];
for (let i = 0; i < 5; i++) {
  filmsData.push(generaTeFilmData(dataValue));
}
export {filmsData};
