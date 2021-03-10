const Discord = require('discord.js');

module.exports = {
    name: 'emoji',
    category: "all",
    description: "displays number of a certain emoji",
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        var emojiArr = ["winPoggers", "winDance", "winMute", "winThisDude", "winOk", "winPoggersBaby", "neil", "elon", "winClown", "winPoggersLeft"];
        var emojiCode = ["<:winPoggers:769390638126596126>", "<a:winDance:769439715547021325>", "<:winMute:769393439564890112>",
                        "<:winThisDude:769392136189640705>", "<:winOk:769391171637346334>", "<:winPoggersBaby:771566466931753011>",
                        "<:neil:775894958753185838>", "<:elon:775898899080282152>", "<:winClown:775913008810557460>", "<:winPoggersLeft:778364418467168267>"];
        if(!emojiArr.includes(args[0])){
            embed.setTitle("Emoji Name List");
            embed.setDescription("Syntax: win|emoji <emoji-name> <1 - 50>");
            for(var i = 0; i < emojiArr.length;  i++){
                embed.addFields(
                {name: emojiArr[i], value: emojiCode[i]}
                ); 
            }
            embed.setColor('36393F');
            message.channel.send(embed);
            return;
        }

        if(!Number.isInteger(parseInt(args[1])) || parseInt(args[1]) > 50 || parseInt(args[1]) <= 0){
            message.channel.send(`\`\`\`Syntax: win|emoji ${args[0]} <1 - 50>\`\`\``);
            return;
        }

        function emojiSend(s){
            var str = "";
            for(var i = 0; i < parseInt(args[1]); i++){
                if(i % 10 == 0){
                    str += "\n";
                }
                str += s;
            }
            message.channel.send(str)
        }

        for(var i = 0; i < emojiArr.length; i++){
            if(args[0] == emojiArr[i]){
                emojiSend(emojiCode[i]);
                break;
            }
        }

    }
}