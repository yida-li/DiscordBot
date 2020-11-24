var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth/scottieauth');

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

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case 'command':
        bot.sendMessage({
          to: channelID,
          message: 'date lec github tut',
        });
        break;
      case 'date':
        bot.sendMessage({
          to: channelID,
          message: '',
        });
        break;
        case 'github':
          bot.sendMessage({
            to: channelID,
            message: 'https://github.com/Xilinx/embeddedsw/tree/master/XilinxProcessorIPLib/drivers/uartlite',
          });
          break;

        

      case 'lec':
        bot.sendMessage({
          to: channelID,
          message: 'maybe 94583822067',
        });
        break;
      case 'tut':
        bot.sendMessage({
          to: channelID,
          message: 'https://concordia-ca.zoom.us/w/99722964177?tk=ULk4H_SKD3Q3DjbkjalxHikBjGAcsLgt8rAKDaiFjPc.DQIAAAAXN_Os0RZTOGJqbFJXTVQ5cTlDandSNWFiWlhBAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        });
        break;
     
      // Just add any case commands if you want to..
    }
  }
  if (message.substring(0, 1) == '?') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case 'trivia':
        bot.sendMessage({
          to: channelID,
          message: 'Initialized',
        });

      // Just add any case commands if you want to..
    }
  }
});





 //// //// ///  https://github.com/yida-li/DiscordBot ///  //// ////