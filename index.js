const Discord = require("discord.js")

const token = process.env.token;
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})

client.on("messageCreate",(message)=>{
    
    if(message.content=="!command"){
        message.reply("!link !elecmidterm !final !tutmonday !tutwednesday !tutfriday !coen366 !elec311 !coen448 !coen490 !engl233")
    }
    if(message.content=="!link"){
        message.reply("")
    }
    if(message.content=="!coen366"){
        message.reply("https://concordia-ca.zoom.us/j/85484966161?pwd=T3NndStaY2FkQkduQlozWmJzOE1aQT09")
    }
    if(message.content=="!elec311"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!coen448"){
        message.reply("lecture:\n https://concordia-ca.zoom.us/j/8639387838")
        message.reply("lab: https://concordia-ca.zoom.us/j/84911178054?pwd=NkZiSzlsM0YvY3BFQ0hCU3BsWmhDdz09")
    }
    if(message.content=="!coen490"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!engl233"){
        message.reply("https://concordia-ca.zoom.us/j/84872995940")
    }
    if(message.content=="!elecmidterm"){
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
    if(message.content=="!nap"){
        exec.kill('SIGINT');
      }

})
client.login(token)


