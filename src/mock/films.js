import {getRandomNumber} from '../utils/utils.js';

const QUANTITY_FILMS = 20;

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
];

const POSTERS = [
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `bohemian-rhapsody.jpg`,
  `macbeth.jpg`,
  `aviator.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `shutter-island.jpg`,
  `pulp-fiction.jpg`
];

const DESCRIPTION = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thriller`,
];

const MIN_RELEASE_YEAR = 1970;
const MAX_RELEASE_YEAR = 2020;

const MIN_LENGTH_DESCRIPTION = 2;
const MAX_LENGTH_DESCRIPTION = 7;

const MAX_REVIEWS = 10;

const getRandomDescription = () => {
  let randomDescription = ``;
  const lengthDescription = getRandomNumber(MIN_LENGTH_DESCRIPTION, MAX_LENGTH_DESCRIPTION);

  for (let i = 0; i < lengthDescription; i++) {
    randomDescription += DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)] + ` `;
  }

  return randomDescription;
};

const getRandomReviews = () => {
  const reviews = [];

  for (let i = 0; i < getRandomNumber(0, MAX_REVIEWS); i++) {
    reviews[i] = {
      text: getRandomDescription(),
      userRating: getRandomNumber(0, 10),
      userName: `author`,
      date: `December 24, 2016`,
    };
  }

  return reviews;
};

const createRandomFilms = () => {
  const films = [];

  for (let i = 0; i < QUANTITY_FILMS; i++) {
    films[i] = {
      id: String(i + 1),
      title: TITLES[getRandomNumber(0, TITLES.length - 1)],
      poster: `the-grand-budapest-hotel-poster.jpg`,
      bigPoster: `bg-the-grand-budapest-hotel.jpg`,
      smallPoster: POSTERS[getRandomNumber(0, POSTERS.length - 1)],
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      details: {
        genre: GENRES[getRandomNumber(0, GENRES.length - 1)],
        description: getRandomDescription(),
        runtime: getRandomNumber(90, 200),
        director: `Wes Andreson`,
        actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        release: getRandomNumber(MIN_RELEASE_YEAR, MAX_RELEASE_YEAR),
        rating: getRandomNumber(0, 10, 1),
        quantityVotes: getRandomNumber(0, 1000),
      },
      reviews: getRandomReviews(),
    };
  }

  return films;
};

export const randomFilms = createRandomFilms();
