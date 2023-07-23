import { Markup } from "telegraf";
import "dotenv/config";
import { searchResult } from "../api/api_result.js";

const searchHandler = async (ctx, keyword, type) => {
  // Menampilkan inline keyboard sebagai tanggapan
  try {
    const parArr = [];
    let inline = [];
    const movies = await searchResult(keyword, type, 1);
    ctx.deleteMessage(ctx.state.message_id);
    if (!movies.length)
      return ctx.reply(`tidak ada hasil untuk keyword ${keyword}`);
    movies.map((movie, arr) => {
      arr = arr + 1;
      inline.push(
        Markup.button.callback(
          movie.title || movie.name,
          `detail-${movie.id}-${type}`
        )
      );
      if (!(arr % 2) || arr == movies.length) {
        parArr.push(inline);
        inline = [];
      }
    });
    ctx.reply("berikut hasil pencariannya :", Markup.inlineKeyboard(parArr)).then(resolve => console.log(resolve));
  } catch (err) {
    ctx.deleteMessage(ctx.state.message_id);
    ctx.reply("maaf sepertinya ada kesalahan teknis, silahkan coba lagi 🙏🏻");
  }
};

export default searchHandler;
