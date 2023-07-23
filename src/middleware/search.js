import extractMessage from "../utils/extractMsgHandler.js";
import searchHandler from "../utils/searchHandler.js";

const search = (ctx) => {
  const messageExtracted = extractMessage(ctx.message.text.split(" "));
  if (!messageExtracted.keyword) {
    return ctx.reply(
      `tolong sertakan keyword pencariannya, contoh :
/${messageExtracted.command} Spiderman`
    );
  }
  ctx
    .reply("tunggu sebentar, sedang melakukan pencarian 🔍..")
    .then((resolve) => (ctx.state.message_id = resolve.message_id));
  searchHandler(ctx, messageExtracted.keyword, messageExtracted.command);
};
// const search = (ctx) => {
//   const messageExtracted = extractMessage(ctx.message.text.split(" "));
//   if (messageExtracted.keyword) {
//     ctx
//       .reply("tunggu sebentar, sedang melakukan pencarian 🔍..")
//       .then((resolve) => (ctx.state.message_id = resolve.message_id));
//     searchHandler(ctx, messageExtracted.keyword, messageExtracted.command);
//     //ctx.deleteMessage(ctx.state.message_id);
//   } else {
//     ctx.reply(
//       `tolong sertakan keyword pencariannya, contoh :
// /${messageExtracted.command} Spiderman`
//     );
//   }
// };

export default search;
