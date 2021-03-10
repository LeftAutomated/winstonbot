const Discord = require('discord.js');
const coin = require('../coins.json');

module.exports = {
    name: 'lb',
    category: "all",
    description: "displays leaderboard",
    execute(message){
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Leaderboard");
        
        var ranks = "";
        var users = "";
        var points = "";
        var place = 1;

        for(var key in coin){
            ranks += place + "\n";
            users += coin[key].name + "\n";
            points += coin[key].coins + "\n";
            place++;
        }

        embed.addField(
            'Rank', ranks, true);

        embed.addField(
            'User', users, true);

        embed.addField(
            'Points', points, true);

        embed.setColor('36393F');
            message.channel.send(embed);
    }
}
