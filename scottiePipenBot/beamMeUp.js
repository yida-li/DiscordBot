const Discord = require("discord.js")
const exec  = require('child_process').exec;
const { MessageEmbed } = require('discord.js');
var auth = require('../auth/bulls');
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})

client.on("messageCreate",(message)=>{
    const exec  = require('child_process').exec;
    if(message.content=="!command"){
        message.reply("!link !image !midterm !sleep !version")
    }
    if(message.content=="!link"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!image2"){
        

        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://test.png');
        message.channel.send({ embeds: [embed], files: ['./test.png'] });
    }
    if(message.content=="!sleep"){
      exec.kill('SIGINT');
    }
    if(message.content=="!version"){
      
      exec("node -v", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    }

})
client.login(auth.token2)


