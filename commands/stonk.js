const Canvas = require('canvas');
const { MessageAttachment} = require('discord.js');
const path = require('path')

module.exports = {
    name: "stonk",
    category: "all",
    description: "stonks",
    async execute(message, args){
        const canvas = Canvas.createCanvas(1568, 1585);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage(
            path.join(__dirname, '../stonks.png')
        )
        let x = 0;
        let y = 0;
        ctx.drawImage(background, x, y);

        const pfp = await Canvas.loadImage(
            message.member.user.displayAvatarURL({
                format: 'png',
            })
        )
        x = 230 - pfp.width/2;
        y = 490 - pfp.height/2;
        ctx.drawImage(pfp, x, y, 400, 400);
        let mes;
        if(args[0] == undefined){
            mes = ``;
        }
        else{
            mes = `${args[0]}`;
        }

        ctx.font = '100px sans-serif';
        x = canvas.width / 2 - ctx.measureText(mes).width/2;
        y = 200;
        ctx.fillText(mes, x, y);

        const attachment = new MessageAttachment(canvas.toBuffer());
        message.channel.send('', attachment);

    }
}