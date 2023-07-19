import { Telegraf, Markup } from "telegraf";
import { start, help } from "./middleware/bassicCommand.js";
import search from "./middleware/search.js";

import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

// bassic command
bot.start(start);
bot.help(help);

bot.command(["movie", "tv"], search);

// bot.command("movie", async (ctx) => {
//   console.log(ctx);
//   if (ctx.state.keyword) {
//     ctx
//       .reply("tunggu sebentar, sedang melakukan pencarian 🔍..")
//       .then((resolve) => (ctx.state.message_id = resolve.message_id));
//     setTimeout(() => {
//       movieSearch(ctx);
//       ctx.deleteMessage(ctx.state.message_id);
//     }, 1000);
//   } else {
//     ctx.reply(
//       `tolong sertakan keyword pencariannya, contoh :
// /movie Spiderman`
//     );
//   }
// });
//
bot.action(/tv-(.+)/, (ctx) => {
  //console.log(ctx.match);
  ctx.reply(`Anda memilih tv -> ${ctx.match[1]}`);
});
bot.action(/movie-(.+)/, (ctx) => {
  ctx.reply(`Anda memilih movie -> ${ctx.match[1]}`);
});

// bot.command(/hello-(.+)/, (ctx) => {
//   console.log(ctx.match);
//   //const parameter = ctx.match;
//   const parameter = "ctx.match";
//   ctx.reply(`Anda memasukkan parameter: ${parameter}`);
// });

bot.launch();
