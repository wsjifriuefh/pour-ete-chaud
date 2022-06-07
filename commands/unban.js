module.exports = {
    name: 'unban',
    description: 'unban a user with id',
    async execute(message, args, client){
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission de débannir un utilisateur")
        if (!message.guild.me.permissions.has("SEND_MESSAGES")) return
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("**Je n'ai pas la permission de débannir des utilisateurs**");

const id = args[0];
if (!id) return message.reply("Merci d'envoyer un identifiant!")


const bannedMembers = await message.guild.bans.fetch();
if (!bannedMembers.find((user) => user.user.id === id ))
 return message.reply("L'utilisateur n'est pas banni!");

 message.guild.members.unban(id);
 message.reply("L'utilisateur à était débanni avec succès :white_check_mark: !");

}}