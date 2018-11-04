const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', () => {
  client.user.setGame(` :) `,'https://www.twitch.tv/x_xz');
});

client.login(process.env.BOT_TOKEN); 
