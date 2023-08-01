import END_POINT from "../api/api_endPoint.js";
import { detailResult } from "../api/api_result.js";

const detailMessage = ({ title, genres, rate, sinopsis }) => {
  return `title : <i>${title}</i>\ngenres : <i>${genres}</i>\nrate : <i>${rate} ⭐</i>\nsinopsis :  <i>${sinopsis}</i>`;
};

const genreExtracter = (dataGenre) => {
  const genres = [];
  dataGenre.map((genre) => {
    genres.push(genre.name);
  });
  return genres.join(", ");
};

const detailHandler = async (ctx) => {
  try {
    const detail = await detailResult(ctx.match[1], ctx.match[2]);
    const poster = END_POINT.POSTER(detail.poster_path);
    const detailData = {
      title: detail.title || detail.name,
      genres: genreExtracter(detail.genres),
      rate: parseFloat(detail.vote_average.toFixed(1))
        .toString()
        .replace(".", ","),
      sinopsis: detail.overview,
    };
    ctx
      .replyWithPhoto(poster, {
        caption: detailMessage(detailData),
        parse_mode: "HTML",
      })
      .catch((err) => {
        if (err.response.error_code == 400) {
          ctx.reply(
            `<i>foto tidak tersedia</i>\n${detailMessage(detailData)}`,
            {
              parse_mode: "HTML",
            }
          );
        }
      });
    console.log(detail);
  } catch (err) {
    console.log(err);
    ctx.reply("maaf sepertinya ada kesalahan teknis, silahkan coba lagi 🙏🏻");
  }
};

export default detailHandler;
