const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const token = process.env.token;
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})

client.on("messageCreate",(message)=>{
    
    if(message.content=="!command"){
        message.reply("!link !elecmidterm !final !coen366 !elec311 !elecdate !elechomework !coen448 !coen490 !engl233")
    }
    if(message.content=="!link"){
        message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley&t=43s")
    }
    if(message.content=="!coen366"){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/85484966161?pwd=T3NndStaY2FkQkduQlozWmJzOE1aQT09")
    }
    if(message.content=="!elec311"){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/86955612783")
        message.reply("monday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("wednesday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("friday tut:\nhttps://concordia-ca.zoom.us/j/81069305289")                
    }
    if(message.content=="!coen448"){
        message.reply("lecture:\n https://concordia-ca.zoom.us/j/8639387838")
        message.reply("lab:\n https://concordia-ca.zoom.us/j/84911178054?pwd=NkZiSzlsM0YvY3BFQ0hCU3BsWmhDdz09")
    }
    if(message.content=="!coen490"){
        message.reply("https://concordia-ca.zoom.us/j/86955612783#success")
    }
    if(message.content=="!engl233"){
        message.reply("https://concordia-ca.zoom.us/j/84872995940")
    }
    if(message.content=="!elecdate"){
        message.reply("Jan 18 : Workshop\nJan 31 : Homework\nFebr 1 : Workshop\nFeb 3 : Midterm 1 \nFeb 14 : Homework \nFeb 22 : Workshop \nMarch 7 : Homework \nMarch 10 : Workshop\nMarch 15 : Midterm 2 \nMarch 22 : Workshop\nApril 4 :Homework\nApril 5 : Workshop")
    }
    if(message.content=="!final"){
        message.reply("April 31")
    }
    if(message.content=="!elechomework"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s1.png');
        message.channel.send({ embeds: [embed], files: ['./s1.png'] });
    }
    if(message.content=="!nap"){
        exec.kill('SIGINT');
      }

})
client.login(token)


