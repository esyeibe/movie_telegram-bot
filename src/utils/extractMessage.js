const extractMessage = (message) => {
  const command = message[0].substring(1);
  message.shift()
  const keyword = message.join(" ");
  return { command, keyword };
};

export default extractMessage;
