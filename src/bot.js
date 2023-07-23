import { Telegraf, Markup } from "telegraf";
import { start, help } from "./middleware/bassicCommand.js";
import search from "./middleware/search.js";
import detail from "./middleware/detail.js";

import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

// bassic command
bot.start(start);
bot.help(help);
// bot.settings((ctx) => {
//   try {
//     bot.telegram.sendPhoto(
//       ctx.from.id,
//       "https://www.themoviedb.org/t/p/w342/yrrsBUQzBYkPn9btngf5DTHOSyA.jpg",
//       {}
//     );
//   } catch (err) {
//     console.log(err);
//   }
// });

bot.command(["movie", "tv"], search);

// bot.action(/tv-(.+)/, (ctx) => {
//   ctx.reply(`Anda memilih tv -> ${ctx.match[1]}`);
// });
bot.action(/detail-(.+)-(.+)/, detail);
// bot.action(/detail-(.+)-(.+)/, (ctx) => {
//   console.log(ctx.match);
//   ctx.reply(
//     `Anda memilih movie -> ${ctx.match[1]}, dengan type ${ctx.match[2]}`
//   );
// });

// bot.command(/hello-(.+)/, (ctx) => {
//   console.log(ctx.match);
//   //const parameter = ctx.match;
//   const parameter = "ctx.match";
//   ctx.reply(`Anda memasukkan parameter: ${parameter}`);
// });

bot.launch();
