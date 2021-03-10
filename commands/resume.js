module.exports = {
    name: 'resume',
    category: "all",
    description: "resume music",
    async execute(message, client, player){
        try{
            client.player = player;
            await client.player.resume(message);
            message.channel.send('**music resumed**');
        }
        catch(err){
            message.channel.send('\`nothing is queued\`');
            return;
        }
    }
}