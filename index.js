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
        message.reply("!quote !elecmidterm !coen366 !elec311 !elecdate !elechomework !coen448 !coen490 !engl233 !schedule")
    }
    if(message.content=="!troll"){
        message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley&t=43s")
    }
    if(message.content=="!coen366"){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/85484966161?pwd=T3NndStaY2FkQkduQlozWmJzOE1aQT09")
        message.reply("wednesday lab:\nhttps://concordia-ca.zoom.us/my/mohamad.al.adraa")
        message.reply("thusday lab:\nhttps://concordia-ca.zoom.us/my/shreyakhisa")
    }
    if(message.content=="!elec311"){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/86955612783")
        message.reply("monday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("wednesday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("friday tut:\nhttps://concordia-ca.zoom.us/j/81069305289")                
    }
    if(message.content=="!coen448"){
        message.reply("lecture:\n https://concordia-ca.zoom.us/j/8639387838")
        message.reply("lab mon + tut :\n https://concordia-ca.zoom.us/j/84911178054?pwd=NkZiSzlsM0YvY3BFQ0hCU3BsWmhDdz09")
        message.reply("lab non-monday:\n https://concordia-ca.zoom.us/j/84918786624?pwd=YmtWMHNlcnQ0ZVpkZjJMR0RGU1Iydz09")
    }
    if(message.content=="!coen490"){
        message.reply("https://concordia-ca.zoom.us/j/87665129256#success")
    }
    if(message.content=="!engl233"){
        message.reply("https://concordia-ca.zoom.us/j/84872995940")
    }
    if(message.content=="!quote"){
        let x = Math.floor(Math.random() * 16);
        if (x==0){
            message.reply("Sometimes, to save someone, you must fight them.")
        }
        else if(x==1){
            message.reply("A gem cannot be polished without friction, nor a man perfected without trials.")
        }
        else if(x==2){
            message.reply("The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.")
        }
        else if(x==3){
            message.reply("There are three basic types, Mr. Pizer: the Wills, the Won'ts, and the Can'ts. The Wills accomplish everything, the Won'ts oppose everything, and the Can'ts won't try anything.")
        }
        else if(x==4){
            message.reply("Thus, a good man, though a slave, is free; but a wicked man, though a king, is a slave. For he serves, not one man alone, but what is worse, as many masters as he has vices.")
        }
        else if(x==5){
            message.reply("Each of us lives, dependent, and bound by our individual knowledge and our awareness. All that is what we call reality. However, both knowledge and awareness are equivocal. One’s reality might be another’s illusion. We all live inside our own fantasies")
        }
        else if(x==6){
            message.reply("We are never so defenseless against suffering as when we love.")
        }
        else if(x==7){
            message.reply("There is always some madness in love. But there is also always some reason in madness.")
        }
        else if(x==8){
            message.reply("When you are right,you have no need to be angry. When you are wrong, you have no right to be angry.")
        }
        else if(x==9){
            message.reply("To see the world in a silicon, and a heaven in a rose, holding infinities in the palms of your hand, an eternity in an hour and fifteen minutes.")
        }
        else if(x==10){
            message.reply("Those who know do not speak. Those who speak do not know.")
        }
        else if(x==11){
            message.reply("To live life, is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.")
        }
        else if(x==12){
            message.reply("Learn to recognize the counterfeit coins that may buy you just a single instance of pleasure, then drags you for days and nights, like a broken man behind a farting camel.")
        }
        else if(x==13){
            message.reply("The first and best victory is to conquer one self, to be conquered by self is of all things, the most shameful and vile.")
        }
        else if(x==14){
            message.reply("It was a great surprise to me when I discovered that most of the ugliness i saw in others, was but a reflection of my own nature.")
        }
        else if(x==15){
            message.reply("Why did i spend years deliberately fooling myself by creating alibis, excuses, to cover up my weaknesses.If used differently, the same time would be sufficient to cure the weakness")
        }
        else{
            message.reply("The unexamined life is not worth living.")
        }
    }
    if(message.content=="!elecdate"){
        message.reply("Jan 18 : Workshop\nJan 31 : Homework\nFebr 1 : Workshop\nFeb 3 : Midterm 1 \nFeb 14 : Homework \nFeb 22 : Workshop \nMarch 7 : Homework \nMarch 10 : Workshop\nMarch 15 : Midterm 2 \nMarch 22 : Workshop\nApril 4 :Homework\nApril 5 : Workshop")
    }
    if(message.content=="!elechomework"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s1.png');
        message.channel.send({ embeds: [embed], files: ['./s1.png'] });
    }
    if(message.content=="!schedule"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s2.png');
        message.channel.send({ embeds: [embed], files: ['./s2.png'] });
    }
    if(message.content=="!sad"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s3.jpg');
        message.channel.send({ embeds: [embed], files: ['./s3.jpg'] });
    }
    if(message.content=="!library"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s4.jpg');
        message.channel.send({ embeds: [embed], files: ['./s4.jpg'] });
    }
    if(message.content=="!sus"){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s5.jpg');
        message.channel.send({ embeds: [embed], files: ['./s5.jpg'] });
    }
    if(message.content=="!nap"){
        exec.kill('SIGINT');
      }

})
client.login(token)


