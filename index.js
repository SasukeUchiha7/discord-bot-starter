const Discord = require("discord.js");
const config = require("./config.json");

const bot = new Discord.Client();

bot.login(config.BOT_TOKEN);

bot.on("ready", () => {
  console.info("Logged in as " + bot.user.tag + "!");
});

bot.on("message", (msg) => {
  if (msg.content === "hey") {
	//for a tagged reply
    msg.reply("hello");
	//for normal reply
    msg.channel.send("hola");
  }
  if (msg.content.startsWith("!wave")) {
    if (msg.mentions.users.size) {
      const taggeduser = msg.mentions.users.first();
      msg.channel.send("You waved : " + taggeduser.username);
    } else msg.reply("You need to mention someone to wave.");
  }
});
