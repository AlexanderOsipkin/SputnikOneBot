const TelegramApi = require('node-telegram-bot-api')

const token = '6200204120:AAGWYwAfE1XVSxQ1F-TAEqZXQjI4WYF884I'

const bot = new TelegramApi(token,{polling: true})

bot.setMyCommands([

    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Информация о пользователе'},
    {command: '/happybirthday', description: 'Информация о будущих именинах сокланов'},

])

const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/6f9/811/6f9811fb-ea2a-321a-a886-1dc9097d4df9/3.webp');
            return bot.sendMessage(chatId, `Привет страж! Как я могу помочь тебе?`);
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Твое имя ${msg.from.first_name}`);
        }
        if (text === '/happybirthday') {
            return bot.sendMessage(chatId, `Список всех будущих именин можно посмотреть вот тут -> https://docs.google.com/spreadsheets/d/13cQlQQ325eSpCDzGGmAZZjx2mM1Ifu7jF1LZsdF-nX8/edit#gid=2021197371`);
        }
        await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/6f9/811/6f9811fb-ea2a-321a-a886-1dc9097d4df9/9.webp');
        return bot.sendMessage(chatId, `Пожалуйста используйте только существующие команды`);
    })
}

start()