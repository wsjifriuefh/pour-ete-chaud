const Discord = require("discord.js");
const { pi } = require("mathjs");
const Math = require("mathjs");
const fs = require ("fs");
const client = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]});
const {TOKEN, PREFIX} = require('./outils.js');
const { timeLog } = require("console");
const { CLIENT_RENEG_LIMIT } = require("tls");
const { setInterval } = require("timers/promises");

client.commands = new Discord.Collection

fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(async f => {
    
    const command = require(`./commands/${f}`)
    console.log(`${f} as been loaded !`)
    client.
    commands.set(command.name, command)
});



client.on("ready", () => {
    console.log("im here !");
    client.user.setActivity('my prefix is ;', { type: "WATCHING" })
})

client.on('messageCreate', message => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

        const args = message.content.slice(PREFIX.length).split(/ +/);
        const command = args.shift().toLowerCase();
        
                    if (command === 'ban'){
                        client.commands.get('ban').execute(message, args, client);
                            } else if (command === 'uptime')
                                client.commands.get('uptime').execute(message, args, client);
                                    else if (command === 'unban')
                                        client.commands.get('unban').execute(message, args, client)
                                            else if (command === 'ping')
                                                client.commands.get('ping').execute(message, args, client, Discord)
                                                    else if (command === 'help')
                                                        client.commands.get('help').execute(message, args, client, Discord)
                                            
})
                    
client.login(TOKEN);