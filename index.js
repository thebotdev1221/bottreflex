const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true,
  });
const config = require("./config.json");
const token = config.token;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;


["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });

  client.login(token);