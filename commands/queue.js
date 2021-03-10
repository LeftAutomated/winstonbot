const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    category: "all",
    description: "shows queued music",
    async execute(message, client, player, isLoop){
        const embed = new Discord.MessageEmbed();
        
        try{
            client.player = player;
            var songs = client.player.getQueue(message).tracks;
        }
        catch(err){
            message.channel.send('\`nothing is queued\`');
            return;
        }

        var str = "__**Song Queue**__\n\n";
        str += `\`1\` **${songs[0].title}** | \`requested by ${songs[0].requestedBy.username}\`\n\n`;

        for(var i = 1; i < songs.length; i++){
            str += `\`${i+1}\` **${songs[i].title}** | \`requested by ${songs[i].requestedBy.username}\`\n\n`;
        }

        if(songs.length == 1){
            str += `**${songs.length} song in queue** `;
        }
        else{
            str += `**${songs.length} songs in queue** `;
        }
        if(isLoop){
            str += "**| looped**";
        }
        
        embed.setDescription(str);
        embed.setColor('36393F');
        message.channel.send(embed);
    }
}