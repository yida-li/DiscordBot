var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth/dennisauth');

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
          message: 'Date ban lec tut',
        });
        break;
      case 'date':
        bot.sendMessage({
          to: channelID,
          message: 'insert prama->(timezone.time)',
        });
        break;
      case 'lec':
        bot.sendMessage({
          to: channelID,
          message: 'https://concordia-ca.zoom.us/j/4371395259',
        });
        break;
      case 'tut':
        bot.sendMessage({
          to: channelID,
          message: '932 424 8186',
        });
        break;
      case 'Date':
        bot.sendMessage({
          to: channelID,
          message:'Assignment 3: Due wedneday 25 \nQuiz 4 : thursday 26',
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