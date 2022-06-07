const { MessageEmbed } = require('discord.js');

module.exports = {
    name : 'uptime',
    description: 'show uptime',
    execute(message, args, client){
    if (!message.guild.me.permissions.has("SEND_MESSAGES")) return
    const embed = new MessageEmbed()
    .setColor("#080808")
    .addField("**:white_check_mark:  | Online Since**", (Math.round(client.uptime / (1000 * 60 * 60 * 24)) % 30) + " Days, " + (Math.round(client.uptime / (1000 * 60 * 60))) + " Hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " Minutes " + (Math.round(client.uptime / 1000) % 60) + " Seconds", true)
    message.channel.send({ embeds: [embed] })
}}