export const noop = () => {};

export const MATCH = {params: {id: `1`}};

export const mockComments = [
  {
    comment: `123`,
    date: `2020-10-29T13:38:44.769Z`,
    id: 1,
    rating: 4.6,
    user: {
      id: 12,
      name: `Isaac`
    },
  },
  {
    comment: `1234`,
    date: `2020-10-29T13:38:45.769Z`,
    id: 2,
    rating: 4.5,
    user: {
      id: 13,
      name: `Isa`
    },
  }
];

/* eslint-disable */

export const mockFilms = [
  {
    background_color: `#73B39A`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    id: 1,
    is_favorite: true,
    name: `Bronson`,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.6,
    released: 2008,
    run_time: 92,
    scores_count: 109661,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    background_color: `#73B39A`,
    background_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    director: `Nicolas Winding Refn`,
    genre: `Drama`,
    id: 2,
    is_favorite: false,
    name: `Bronson`,
    poster_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.6,
    released: 2008,
    run_time: 92,
    scores_count: 109661,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    video_link: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
];

/* eslint-enable */

export const state = {
  DATA: {
    films: mockFilms,
    promoFilm: mockFilms[0],
    genresList: [`All`, `Action`, `Drama`],
    isApplicationReady: false,
  },
  FILMS_STATUS: {
    activeGenre: `All`,
    renderFilmsCount: 8,
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    user: null,
  },
  COMMENTS: {
    comments: mockComments,
  },
};
