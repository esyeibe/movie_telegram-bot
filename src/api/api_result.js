import END_POINT from "./api_endPoint.js";

export const searchResult = async (keyword, type, page = 1) => {
  const response = await fetch(END_POINT.SEARCH(keyword, type, page));
  const responseJson = await response.json();
  return responseJson.results;
};

export const detailResult = async (id, type) => {
  const response = await fetch(END_POINT.DETAIL(id, type));
  const responseJson = await response.json();
  return responseJson;
};
