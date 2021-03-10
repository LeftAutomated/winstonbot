module.exports = {
    name: 'ping',
    category: "all",
    description: "returns your ping",
    execute(message, args, client){
        message.channel.send("\`\`\`pogging\`\`\`").then(m =>{
            setTimeout(function(){ 
                m.edit("\`\`\`pogging .\`\`\`"); 
            }, 500);
            setTimeout(function(){ 
                m.edit("\`\`\`pogging . .\`\`\`"); 
            }, 1000);
            setTimeout(function(){ 
                m.edit("\`\`\`pogging . . .\`\`\`"); 
            }, 1500);
            setTimeout(function(){ 
                m.edit(`\`\`\`ping => ${Math.round(client.ws.ping)} ms\`\`\``);
            }, 2000);
            
        });
    }
}