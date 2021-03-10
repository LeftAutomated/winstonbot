module.exports = {
    name: 'stop',
    category: "all",
    description: "stops all music",
    async execute(message, client, player){
        try{
            client.player = player;
            await client.player.stop(message);
            message.channel.send('**music stopped**');
        }
        catch(err){
            message.channel.send('\`nothing is queued\`');
            return;
        }
    }
}