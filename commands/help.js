const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Show all commands',
    execute(message, args, client, Discord){
        if (!message.guild.me.permissions.has("SEND_MESSAGES")) return
        const help = new MessageEmbed()
        .setColor("#080808")
        .setTitle("Mes Commandes")
        .setAuthor('ton pseudo\'s Bot Help', message.author.displayAvatarURL())
        .addFields(
            { name:  "🔨 - Moderation Commands (2)", value: "`ban` `unban`" },
            { name: "🍇 - Utils Commands (3)", value: "`ping` `uptime` `help`"},
        )
        .setFooter("LENOMDETONBOT ✠ wwz'#4877")
       
        message.channel.send({ embeds: [help] })
       
    }
}
