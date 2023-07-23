import detailHandler from "../utils/detailHandler.js";

const detail = (ctx) => {
  ctx.reply("permintaan anda sedang di proses ⚙️...").then((resolve) => {
    console.log("ini nih");
    console.log(resolve);
    ctx.state.message_id = resolve.message_id;
  });

  detailHandler(ctx);
};

export default detail;
