const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', () => {
  client.user.setGame(` :smiley: `,'https://www.twitch.tv/v5bz');
});

client.login(process.env.BOT_TOKEN); 
