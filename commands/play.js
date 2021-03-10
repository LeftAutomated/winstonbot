module.exports = {
    name: 'play',
    category: "all",
    description: "queues song",
    async execute(message, args, client, player){
        if(args == ""){
            message.channel.send("Use a Youtube Link");
            return;
        }
        if(!args[0].startsWith("https://www.youtube.com/")){
            message.channel.send("Use a Youtube Link");
            return;
        }
        if(!message.member.voice.channel){
            message.channel.send("Not in a voice channel");
            return;
        }
        
        client.player = player;
        client.player.play(message, args[0]);
        //message.channel.send(`**queuing** \`${client.player.getQueue(message).tracks[0].title}\``);
    }
}