const Discord = require('discord.js');
const coin = require('../coins.json');
const fs = require('fs');

module.exports = {
    name: 'math',
    category: "all",
    description: "math related stuff",
    execute(message, args){
        var type = ['+', '-', '*', '/', 'rand']
        var typeDesc = ['addition', 'subtraction', 'multiplication', 'division', 'operator']
        var ran = 4;

        if(!coin[message.author.id]){
            coin[message.author.id] = {
                name: message.member.displayName,
                coins: 0
            }
            fs.writeFileSync('./coins.json', JSON.stringify(coin), err =>{
                if(err){
                    console.log(err);
                }
            });
        }

        if(args[0] == type[4]){
            ran = Math.floor(Math.random() * 4);
        }
        if(args[0] == type[0] || ran == 0){
            op(message, "+");
        }
        else if(args[0] == type[1] || ran == 1){
            op(message, "-");
        }
        else if(args[0] == type[2] || ran == 2){
            op(message, "*");
        }
        else if(args[0] == type[3] || ran == 3){
            op(message, "/");
        }
        else{
            const embed = new Discord.MessageEmbed();
            embed.setTitle("Math Command List");
            embed.setDescription("Syntax: win|math <specific>");
            for(var i = 0; i < type.length; i++){
                embed.addFields(
                {name: type[i], value: `Random ${typeDesc[i]} problem`}
                );
            }
            embed.setColor('36393F');
            message.channel.send(embed);
        }
    }
}

async function op(message, s){
    var x = Math.floor(Math.random() * 10) + 1;
    var y = Math.floor(Math.random() * 10) + 1;
    var ans;
    var str = `\`\`\`${x} ${s} ${y} \`\`\``;
    message.channel.send(str);
    if(s == "+"){
        ans = x + y;
    }
    else if(s == "-"){
        ans = x - y;
    }
    else if(s == "*"){
        ans = x * y;
    }
    else if(s == "/"){
        ans = x / y;
    }
    ans = parseInt(ans);
    await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
                const msg = collected.first();
                if (!isNaN(msg) && parseInt(msg) == ans) {
                    coin[message.author.id] = {
                        name: message.member.displayName,
                        coins: parseFloat(coin[message.author.id].coins) + 1
                    }
                    fs.writeFileSync('./coins.json', JSON.stringify(coin), err =>{
                        if(err){
                            console.log(err);
                        }
                    });
                        message.channel.send(`<:winPoggers:769390638126596126> Correct +1 <:winPoggers:769390638126596126>`);
                }
                else{
                    coin[message.author.id] = {
                        name: message.member.displayName,
                        coins: parseFloat(coin[message.author.id].coins) - 1
                    }
                    fs.writeFileSync('./coins.json', JSON.stringify(coin), err =>{
                        if(err){
                            console.log(err);
                        }
                    });
                        message.channel.send(`<:winThisDude:769392136189640705> Wrong -1 <:winThisDude:769392136189640705>`); 
                }    
        }
    );
}

