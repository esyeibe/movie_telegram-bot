import END_POINT from "../api/api_endPoint.js";
import { detailResult } from "../api/api_result.js";

const detailHandler = async (ctx) => {
  try {
    const detail = await detailResult(ctx.match[1], ctx.match[2]);
    const poster = END_POINT.POSTER(detail.poster_path);
    ctx.replyWithPhoto(poster,{ caption : "assalamualaikum"}).catch((err) => {
      throw err;
    });
    console.log(ctx.state.message_id);
  } catch (err) {
    console.log(err)
    ctx.reply("maaf sepertinya ada kesalahan teknis, silahkan coba lagi 🙏🏻");
  }
};

export default detailHandler;
