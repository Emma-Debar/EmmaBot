const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready' , function() {
    bot.user.setGame("Command:  :help");
    console.log("Connected");
});

bot.login("NTExNTUwNjc4ODUwODYzMTA0.DstOsg.4CS1iBqjFV61KZANFS6vNjAfvbY");


bot.on('message' , message => {
    if  (message.content === prefix + "help"){
         message.channel.sendMessage("Liste des commandes:  \n  !tt  \n  !fabriquant");
    }
    if  (message.content === prefix + "tt"){
         message.content.sendMessage("Liste des commandes:  \n  !tt  \n  !fabriquant");
         console.log("Création du bot le _11/11/2018_ a _5heure_");
    
    }

    if  (message.content === prefix + "fabriquant"){
         message.reply("_Ce bot a été crée par Emma Debard_");
         console.log("Commande effectué");
    }
});
