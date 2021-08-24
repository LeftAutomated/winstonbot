const Discord = require('discord.js');
const client = new Discord.Client();
const { Player } = require("discord-player");
const player = new Player(client);

const prefix = 'win|';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
var isLoop = false;

client.on('ready', () => {
    console.log('Winston online.');
    client.user.setActivity("with humans", {type: "PLAYING"});
});

client.on("guildMemberAdd", member =>{
    const welcomelog = "768278272882376726";
    client.channels.cache.get(welcomelog).send(`<@!${member.user.id}> bowed to Winston`);
    member.roles.add("768281023606947850");
});

client.on("guildMemberRemove", member =>{
    const goodbyelog = "768298929312890900";
    client.channels.cache.get(goodbyelog).send(`<@!${member.user.id}> left Winston`);
});

player.on('trackStart', (message, track) => {
    message.channel.send(`**playing** \`${track.title}\``);
}); 


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client);
    } 
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }
    else if(command === 'play'){
        client.commands.get('play').execute(message, args, client, player);
    }
    else if(command === 'pause'){
        client.commands.get('pause').execute(message, client, player);
    }
    else if(command === 'resume'){
        client.commands.get('resume').execute(message, client, player);
    }
    else if(command === 'stop'){
        client.commands.get('stop').execute(message, client, player);
    }
    else if(command === 'queue'){
        client.commands.get('queue').execute(message, client, player, isLoop);
    }
    else if(command === 'loop'){
        isLoop = !isLoop;
        client.commands.get('loop').execute(message, client, player, isLoop);
    }
    else if(command === 'emoji'){
        client.commands.get('emoji').execute(message, args);
    }
    else if(command === 'cmd'){
        client.commands.get('cmd').execute(message, commandFiles);
    }
    else if(command === 'java'){
        client.commands.get('java').execute(message, args);             //WIP
    }
    else if(command === 'cs'){
        client.commands.get('cs').execute(message, args);               //WIP
    }
    else if(command === 'math'){
        client.commands.get('math').execute(message, args);             //WIP
    }
    else if(command === 'suggest'){
        client.commands.get('suggest').execute(message, args, client);         
    }
    else if(command === 'profile'){
        client.commands.get('profile').execute(message, args);
    }
    else if(command === 'lb'){
        client.commands.get('lb').execute(message);                     //WIP
    }
    else if(command === 'stonk'){
        client.commands.get('stonk').execute(message, args);
    }
    else{
        client.commands.get('cmd').execute(message, commandFiles);
    }
});

client.login('token');
