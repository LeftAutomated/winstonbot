module.exports = {
    name: 'purge',
    category: "mod",
    description: "deletes a certain number of messages",
    execute(message, args){
        if(message.member.id != message.guild.owner.id){
            message.channel.send("Command restricted for students.");
            return;
        }
        if(args == ""){
            message.channel.send("Must set number of messages to delete.");
            return;
        }
        if(isNaN(args)){
            message.channel.send("Must set a number.");
            return;
        }
        message.channel.bulkDelete(parseInt(args));
    }
}