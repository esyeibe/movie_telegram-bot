import { Markup } from "telegraf";
import "dotenv/config";
import END_POINT from "../globals/endPoint.js";

const films = [
  "Inception",
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Interstellar",
  "Forrest Gump",
  "The Matrix",
  "The Lord of the Rings: The Return of the King",
  "Avengers: Endgame",
  "Fight Club",
  "The Silence of the Lambs",
  "Gladiator",
  "The Lion King",
  "Forrest Gump",
  "Titanic",
  "The Avengers",
  "Avatar",
  "Jurassic Park",
  "Back to the Future",
];

const searchResult = async (keyword, type, page = 1) => {
  const response = await fetch(END_POINT.SEARCH(keyword, type, page));
  const responseJson = await response.json();
  return responseJson.results;
};

export const movieSearch = async (ctx, keyword, type) => {
  // Menampilkan inline keyboard sebagai tanggapan
  const parArr = [];
  let inline = [];
  const movies = await searchResult(keyword, type, 1);
  console.log(movies);
  movies.map((movie, arr) => {
    arr = arr + 1;
    inline.push(Markup.button.callback(movie.title || movie.name, type+'-'+movie.id));
    if (!(arr % 2) || arr == movies.length) {
      parArr.push(inline);
      inline = [];
    }
  });
  ctx.deleteMessage(ctx.state.message_id);
  ctx
    .reply("berikut hasil pencariannya :", Markup.inlineKeyboard(parArr))
    .then((result) => console.log(result));
  ctx.state.message = 10;
};
// Menangani tombol-tombol inline yang dipilih oleh pengguna
