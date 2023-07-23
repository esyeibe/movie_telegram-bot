const CONFIG = {
  KEY: "cfb7d17e50d625993f86e5de6a708481",
  BASE_URL: "https://api.themoviedb.org/3/",
  DEFAULT_LANGUAGE: "en-US",
  SMALL_POSTER_URL: "https://image.tmdb.org/t/p/w500",
};

const END_POINT = {
  SEARCH: (keyword, type, page) =>
    `${CONFIG.BASE_URL}search/${type}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${keyword}&page=${page}&include_adult=false`,
  DETAIL: (id, type) =>
    `${CONFIG.BASE_URL}${type}/${id}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  POSTER: (poster) => CONFIG.SMALL_POSTER_URL + poster,
};

export default END_POINT;
