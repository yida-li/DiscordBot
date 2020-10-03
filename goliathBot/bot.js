var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth/goliathauth');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    const { exec } = require('child_process');
    args = args.splice(1);
    switch (cmd) {
      // !ping
      case 'wake':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!',
        });

        exec(
          'node ../YIDABOT/dennisRodmanBot/bot.js',
          (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
          }
        );

        break;

      case 'sleep':
        exec.kill('SIGINT');
        /*
      ReferenceError: Cannot access 'exec' before initialization
    at DiscordClient.<anonymous> (C:\Users\yidas\Desktop\yidaBot\goliathBot\bot.js:51:9) 
    at DiscordClient.emit (events.js:315:20)
    at DiscordClient.handleWSMessage (C:\Users\yidas\Desktop\yidaBot\node_modules\discord.io\lib\index.js:1854:11)
    at WebSocket.emit (events.js:315:20)
    at Receiver.ontext (C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\WebSocket.js:841:10)
    at C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\Receiver.js:536:18
    at Receiver.applyExtensions (C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\Receiver.js:371:5)
    at C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\Receiver.js:508:14
    at Receiver.flush (C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\Receiver.js:347:3)
    at Receiver.finish (C:\Users\yidas\Desktop\yidaBot\node_modules\ws\lib\Receiver.js:541:12)
      */

        break;

      // Just add any case commands if you want to..
    }
  }
});
