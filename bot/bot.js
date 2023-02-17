const { Telegraf } = require('telegraf');

const BOT_TOKEN = '5898470385:AAEGIZj1tZ0sOAXvWJjssFQCEoZxtGWRN2w'
const web_url = "https://react-redux-cash-app.netlify.app/"

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => {
    ctx.reply("Assalamu alaykum >>>", {
        reply_markup: {
            keyboard: [[{ text: 'web app', web_app: { url: web_url } }]]
        }
    })
});
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();