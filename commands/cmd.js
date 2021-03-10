const Discord = require('discord.js');

module.exports = {
    name: "cmd",
    category: "all",
    description: "lists available commands",
    execute(message, commandFiles){
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Command List");
        embed.setDescription("prefix -> win|");
        commandFiles.sort();
        for (const file of commandFiles) {
            const command = require(`C:/Programming Project/discordbot/commands/${file}`);
            embed.addFields(
            { name: `win|${command.name}`, value: `access: ${command.category}\ndesc: ${command.description}`}
            );
        }
        embed.setColor('36393F');
        message.channel.send(embed);
    }
}