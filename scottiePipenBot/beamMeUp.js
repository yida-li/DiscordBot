const Discord = require("discord.js")
const exec  = require('child_process').exec;
var auth = require('../auth/bulls');
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})

client.on("messageCreate",(message)=>{
    const exec  = require('child_process').exec;
    if(message.content=="!command"){
        message.reply("!link !midterm !sleep !version")
    }
    if(message.content=="!link"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!midterm"){
        message.reply("Feb 3/ March 15")
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


