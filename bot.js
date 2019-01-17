const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready'),() => {
  console.log('I'm ready!');
});

client.on('message', message => {
if (message.content === 'czpatan'){
message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/guide/czpatan.png"]});
}
});
client.login(process.env.BOT_TOKEN);
