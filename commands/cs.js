const Discord = require("discord.js");

module.exports = {
    name: "cs",
    category: "all",
    description: "lists commands for general computer science stuff",
    execute(message, args){
        var gen = ["data"];
        var genDesc = ["computer data measurements"];
        if(args[0] == gen[0]){
            message.channel.send(dataTable(args));
        }
        else{
            const embed = new Discord.MessageEmbed();
            embed.setTitle("General Computer Science Topic List");
            embed.setDescription("Syntax: win|cs <topic>");
            for(var i = 0; i < gen.length; i++){
                embed.addFields(
                {name: gen[i], value: genDesc[i]}
                );
            }
            embed.setColor('36393F');
            message.channel.send(embed);
        }
    }
}

function dataTable(s){
    const embed = new Discord.MessageEmbed();
    var type = ["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte", "Petabyte", "Exabyte"];
    embed.setTitle("Data Measurements List");
    for(var i = 0; i < type.length; i++){
        if(i == 0){
            embed.addFields(
            {name: type[i], value: "1 binary digit (0 or 1)"}
            );
        }
        else if(i == 1){
            embed.addFields(
                {name: type[i], value: `8 ${type[0]}s`}
                );            
        }
        else {
            embed.addFields(
            {name: type[i], value: `1024 ${type[i-1]}s`}
            );
        }
    }
    embed.setColor('36393F');
    return embed;
}
