const Discord = require("discord.js")
const exec  = require('child_process').exec;
const { MessageEmbed } = require('discord.js');
var auth = require('../auth/bulls');
const client = new Discord.Client({
    intents:["GUILDS",
    "GUILD_MESSAGES"]
})
client.on("read",()=>{ console.log(`Logged in as ${client.user.tag}`)})


let counter = false
client.on("messageCreate",(message)=>{
    
    const exec  = require('child_process').exec;
    if(message.content=="!command"){
        message.reply("!quote !image !midterm !sleep !versionssss")
    }
    if(message.content=="!wake"){
        counter=true
    }
    if(message.content=="!sleep"){
        counter=false
    }
    if(message.content=="!quote" && counter==true){
        let x = Math.floor(Math.random() * 8);
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
            message.reply("We are never so defenseless against suffering as when we love")
        }
        else{
            message.reply("The unexamined life is not worth living")
        }
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
    if(message.content=="!image2"){
        

        const embed = new Discord.MessageEmbed().setTitle('Attachment').setImage('attachment://test.png');
        message.channel.send({ embeds: [embed], files: ['./test.png'] });
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
client.login(auth.token)


