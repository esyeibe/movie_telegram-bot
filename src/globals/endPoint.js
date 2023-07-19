import CONFIG from "./config.js";

const END_POINT = {
  SEARCH: (keyword,type, page) =>
    `${CONFIG.BASE_URL}search/${type}?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${keyword}&page=${page}&include_adult=false`,
};

export default END_POINT;
