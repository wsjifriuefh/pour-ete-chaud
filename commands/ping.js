module.exports = {
name: 'ping',
description: 'ping command',
execute(message, args, client, Discord){
    if (!message.guild.me.permissions.has("SEND_MESSAGES")) return
    message.channel.send(`Finding the bot ping...`).then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`The Ping of the bot is ${ping}ms!`) 
})
}}