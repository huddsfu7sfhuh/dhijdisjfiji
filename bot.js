const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "492851193010192424"; 
var channel = "492852383089426433";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('yousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7iyousifd7i00')
    },305);
})

         client.on('message', message => {
            if (message.content === 'yousif') {
              message.channel.send('#daily');
            }
});

         client.on('message', message => {
            if (message.content === 'yousif') {
              message.channel.send('#credit');
            }
});

client.login(process.env.BOT_TOKEN); 
