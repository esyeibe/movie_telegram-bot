export const start = (ctx) => {
  ctx.reply(
    `Hello ${ctx.from.first_name}, selamat datang di bot saya. ketikkan /help untuk mengetahui cara menggunakan bot ini`
  );
};

export const help = (ctx) => {
  ctx.reply(`anda dapat menggunakan command berikut:
- /movie => untuk mencari nama movie
- /tv => untuk mencari nama tv show`);
};
