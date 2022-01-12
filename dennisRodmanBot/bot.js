const Discord = require("discord.js")

var auth = require('../auth/bulls');
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})

client.on("messageCreate",(message)=>{

    if(message.content=="!command"){
        message.reply("!link !midterm !final !tutmonday !tutwednesday !tutfriday")
    }
    if(message.content=="!link"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!midterm"){
        message.reply("Feb 3/ March 15")
    }
    if(message.content=="!final"){
        message.reply("April 31")
    }
    if(message.content=="!tutmonday"){
        message.reply("https://concordia-ca.zoom.us/s/8317684339")
    }
    if(message.content=="!tutwednesday"){
        message.reply("https://concordia-ca.zoom.us/s/8317684339")
    }
    if(message.content=="!tutfriday"){
        message.reply("https://concordia-ca.zoom.us/j/81069305289")
    }
})
client.login(auth.token)

