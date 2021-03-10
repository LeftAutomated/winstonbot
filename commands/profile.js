const { stripIndents } = require('common-tags');
const Discord = require('discord.js');
const coin = require('../coins.json');

module.exports = {
    name: "profile",
    category: "all",
    description: "displays profile",
    execute(message, args){
        const embed = new Discord.MessageEmbed();
        embed.setAuthor("Profile");
        embed.setThumbnail(message.author.avatarURL({ dynamic:true }));
        embed.addField(
            'Member Information', stripIndents`**Display name |** ${message.member.displayName} 
            **Joined at |** ${Intl.DateTimeFormat('en-US').format(message.member.joinedAt)} 
            **Roles |** ${message.member.roles.cache.first()}
            **Math Points |** ${coin[message.author.id].coins} `, true);
        
        embed.addField(
            'User Information', stripIndents`**ID |** ${message.author.id}
            **Username |** ${message.author.username}
            **Tag |** ${message.member.user.tag}
            **Created at |** ${Intl.DateTimeFormat('en-US').format(message.member.user.createdAt)}`, true);
        
        embed.setFooter(message.guild.name, message.guild.iconURL());
        embed.setColor('36393F');
        message.channel.send(embed);
    }
}