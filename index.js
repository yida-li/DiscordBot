const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const token = process.env.token;
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})
let counter = false // boolean flag
let lock = false    // boolean flag
client.on("messageCreate",(message)=>{

    if(message.content=="!wake"){
        counter=true
    }
    if(message.content=="!wakee"){
        lock=true
    }
    if(message.content=="!sleep"){
        counter=false
        lock=false
    }    
    if(message.content=="!command" && counter==true ){
        message.reply("!quote !elecmidterm !coen366 !elec311 !elecdate !elechomework !coen448 !coen490 !engl233 !schedule !manual !pod !lab")
    }
    if(message.content=="!coen366" && counter==true){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/85484966161?pwd=T3NndStaY2FkQkduQlozWmJzOE1aQT09")
        message.reply("wednesday lab:\nhttps://concordia-ca.zoom.us/my/mohamad.al.adraa")
        message.reply("thusday lab:\nhttps://concordia-ca.zoom.us/my/shreyakhisa")
    }
    if(message.content=="!elec311" && counter==true){
        message.reply("lecture:\nhttps://concordia-ca.zoom.us/j/86955612783")
        message.reply("monday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("wednesday tut:\nhttps://concordia-ca.zoom.us/s/8317684339")
        message.reply("friday tut:\nhttps://concordia-ca.zoom.us/j/81069305289")                
    }
    if(message.content=="!coen448" && counter==true){
        message.reply("lecture:\n https://concordia-ca.zoom.us/j/8639387838")
        message.reply("lab mon + tut :\n https://concordia-ca.zoom.us/j/84911178054?pwd=NkZiSzlsM0YvY3BFQ0hCU3BsWmhDdz09")
        message.reply("lab non-monday:\n https://concordia-ca.zoom.us/j/84918786624?pwd=YmtWMHNlcnQ0ZVpkZjJMR0RGU1Iydz09")
    }
    if(message.content=="!coen490" && counter==true){
        message.reply("https://concordia-ca.zoom.us/j/87665129256")
    }
    if(message.content=="!engl233" && counter==true){
        message.reply("https://concordia-ca.zoom.us/j/84872995940")
    }
    if(message.content=="!rolldice" && counter==true){
        let x = Math.floor(Math.random() * 6);
        if (x==0){
            message.reply("You rolled a 1")
        }
        else if(x==1){
            message.reply("you rolled a 2")
        }
        else if(x==2){
            message.reply("you rolled a 3")
        }
        else if(x==3){
            message.reply("you rolled a 4")
        }
        else if(x==4){
            message.reply("you rolled a 5")
        }
        else{
            message.reply("you rolled a 6")
        }

    }
    if(message.content=="!quote" && counter==true&& lock==true){
        let x = Math.floor(Math.random() * 38);
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
        else if(x==16){
            message.reply("The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.")
        }
        else if(x==17){
            message.reply("If your hate could be turned into electricity, it would light up the whole world.")
        }
        else if(x==18){
            message.reply("Is a leaf's only purpose to fall?.")
        }
        else if(x==19){
            message.reply("Without music, life would be a mistake.")
        }
        else if(x==20){
            message.reply("You must have chaos within you to give birth to a dancing star.")
        }
        else if (x==21){
            message.reply("Be alone, that is the secret of invention; be alone, that is when ideas are born.")
        }
        else if(x==22){
            message.reply("The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.")
        }
        else if(x==23){
            message.reply("The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.")
        }
        else if(x==24){
            message.reply("One must be sane to think clearly, but one can think deeply and be quite insane.")
        }
        else if(x==25){
            message.reply("Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.")
        }
        else if(x==26){
            message.reply("Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine")
        }
        else if(x==27){
            message.reply("All that was great in the past was ridiculed, condemned, combated, suppressed — only to emerge all the more powerfully, all the more triumphantly from the struggle.")
        }
        else if(x==28){
            message.reply("We crave for new sensations but soon become indifferent to them. The wonders of yesterday are today common occurrences.")
        }
        else if(x==29){
            message.reply("If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.")
        }     
        else if(x==30){
            message.reply("The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.")
        }
        else if(x==31){
            message.reply("Just as eating contrary to the clination is injurious to the health, so study without desire spoils the memory, and it retains nothing that it takes in.")
        }
        else if(x==32){
            message.reply("Envy is the ulcer of the soul.")
        }    
        else if(x==33){
            message.reply("When anything tempts you to feel bitter,not this is misfortune but to bear this worthly is good fortune.")
        }       
        else if(x==34){
            message.reply("If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you. but respond : he was ignorant of my other faults else he would not have mentioned these alone")
        }  
        else if(x==35){
            message.reply("Memory is everything, without it, we are blind, without it, we leave the fate of our world to chance.")
        }
        else if(x==36){
            message.reply("Tell me and I forget, Show me and i remember, Involve me and I understand.")
        }
        else{
            message.reply("The unexamined life is not worth living.")
        }
    }
    if(message.content=="!elecdate" && counter==true){
        message.reply("Jan 18 : Workshop\nJan 31 : Homework\nFebr 1 : Workshop\nFeb 3 : Midterm 1 \nFeb 14 : Homework \nFeb 22 : Workshop \nMarch 7 : Homework \nMarch 10 : Workshop\nMarch 15 : Midterm 2 \nMarch 29 : Workshop\nApril 4 :Homework\nApril 7 : Workshop")
    }
    if(message.content=="!elechomework" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s1.png');
        message.channel.send({ embeds: [embed], files: ['./s1.png'] });
    }
    if(message.content=="!schedule" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s2.png');
        message.channel.send({ embeds: [embed], files: ['./s2.png'] });
    }
    if(message.content=="!lab" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s6.png');
        message.channel.send({ embeds: [embed], files: ['./s6.png'] });
    }
    if(message.content=="!manual" && counter==true){
    
        message.reply("https://users.encs.concordia.ca/~sqin/ELEC311/")
    }
    if(message.content=="!pod" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s7.png');
        message.channel.send({ embeds: [embed], files: ['./s7.png'] });
    }
    if(message.content=="!sad" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s3.jpg');
        message.channel.send({ embeds: [embed], files: ['./s3.jpg'] });
    }
    if(message.content=="!sus" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s4.jpg');
        message.channel.send({ embeds: [embed], files: ['./s4.jpg'] });
    }
    if(message.content=="!library" && counter==true){
    
        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://s5.jpg');
        message.channel.send({ embeds: [embed], files: ['./s5.jpg'] });
    }
    if(message.content=="!kill"){
        exec.kill('SIGINT');
      }

})
client.login(token)


