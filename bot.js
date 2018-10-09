const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.user.setGame(` :) `,"http://twitch.tv/S-F")


client.login(process.env.BOT_TOKEN); 
