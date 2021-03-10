module.exports = {
    name: 'help',
    category: "all",
    description: "mentions Sensei Assistant for help",
    execute(message, args){
        if(!(message.channel.id == '768278913767702528' || message.channel.id == '768315174758776862'))
            return;

        if(args == ""){
            message.channel.send(`<@!${message.guild.owner.id}>, student <@!${message.member.id}> needs help with computer science`);
        }
        else{
            var str = "";
            args.forEach(element => {
                str += element + " ";
            });
            message.channel.send(`<@!${message.guild.owner.id}>, student <@!${message.member.id}> needs help with ${str}`);
        }
    }
}



