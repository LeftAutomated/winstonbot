module.exports = {
    name: 'loop',
    category: "all",
    description: "loops queue",
    async execute(message, client, player, isLoop){
        try{
            client.player = player;
            await client.player.setRepeatMode(message, isLoop);
            if(isLoop){
                message.channel.send('**queue looped**');
            }
            else{
                message.channel.send('**queue not looped**');
            }
        }
        catch(err){
            message.channel.send('\`nothing is queued\`');
            return;
        }
    }
}