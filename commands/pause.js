module.exports = {
    name: 'pause',
    category: "all",
    description: "pause music",
    async execute(message, client, player){
        try{
            client.player = player;
            await client.player.pause(message);
            message.channel.send('**music paused**');
        }
        catch(err){
            message.channel.send('\`nothing is queued\`');
            return;
        }
    }
}