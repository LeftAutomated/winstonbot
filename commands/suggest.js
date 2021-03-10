const Discord = require('discord.js');

module.exports = {
    name: 'suggest',
    category: "all",
    description: "input your suggestions for bot and emojis",
    execute(message, args, client){
        if(!args[0]){
            var str = "\`\`\`Syntax: win|suggest <text>\`\`\`";
            message.channel.send(str);
            return;
        }
        
        const embed = new Discord.MessageEmbed();
        const like = "<:winPoggers:769390638126596126>";
        const dislike = "<:winThisDude:769392136189640705>";
        const suggestLog = "769015836273803335";
        embed.setAuthor("Suggestion");
        embed.setDescription(`from <@!${message.author.id}>\n`);
        embed.setThumbnail(message.author.avatarURL({ dynamic:true }));
        var str = "";
        for(var w of args){
            str += w + " ";
        }
        embed.addFields(
        {name: `\u200B\n${str}`, value: `\u200B\nReact with ${like} if you like this, or ${dislike} if you dislike this`}
        );
        embed.setTimestamp();
        embed.setColor('36393F');
        client.channels.cache.get(suggestLog).send(embed).then(embedMessage => {
            embedMessage.react(like);
            embedMessage.react(dislike);
        });
    }
}