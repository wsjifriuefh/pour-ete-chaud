const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'ban',
    description: 'Ban a member',
    execute(message, args, client){
        try {
            if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission de bannir un utilisateur")
            if (!message.guild.me.permissions.has("SEND_MESSAGES")) return
            if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("Je n'ai pas la permission de bannir un utilisateur! - [BAN_MEMBERS]");
            if (!args[0]) return message.channel.send(`<@${message.author.id}> Merci de mentionner un utilisateur!`)

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**Je n'arrive pas à trouver cette utilisateur**");
            if (banMember === message.member) return message.channel.send("**Tu ne peux pas te bannir toi même xD**")
            if (
                message.member.roles.highest.position <=
                banMember.roles.highest.position
            )
            
                return message.reply(
                    "Tu ne peux pas bannir cette utilisateur car il a un rôle plus haut que toi ou le même!"
                );            

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Je ne peut pas bannir cette utilisateur**")
            try {
            message.guild.members.ban(banMember)
            banMember.send(`**Bonjour, vous avez était banni du serveur ${message.guild.name} pour ${reason || "Aucune raison fournie"}**`).catch(() => null)
            } catch {
                message.guild.members.ban(banMember)
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("#080808")
                .setDescription(`${banMember.user.username} à était banni pour ${reason}`)
            message.channel.send({ embeds: [sembed] })
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("#080808")
                .setDescription(`**${banMember.user.username}** à était banni`)
            message.channel.send({ embeds: [sembed2] })
            }
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
        } catch (e) {
            return console.log(`${e.message}`)
        }
    }
}