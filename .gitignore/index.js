const Discord = require('discord.js');
const bot = new Discord.Client();

//Commande Help avec prefix
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command : *help");
    console.log("Connected")
});

bot.login("NjQ5MjI2NzcwNjI4NzM5MDc0.Xd5u4A.MinHcR0QVhGT_T3FKS7A93GNewU");


bot.on('message', message => {
    if(message.content === prefix + "help") {
       message.channel.sendMessage("Commands list : \n *help");
    }

    if(message.content === "Hi") {
       message.reply("Good day, isn't it ? ;)");
       console.log("Command : Greeting done");  
    }

    if(message.content === "Salut") {
        message.reply("Good day, isn't it ? ;)");
        console.log("Command : Greeting done");
});
