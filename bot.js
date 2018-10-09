const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` :)  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')

client.login(process.env.BOT_TOKEN); 
