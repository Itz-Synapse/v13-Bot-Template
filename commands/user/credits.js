const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args, con) => {

    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor(client.config.colorhex)
    .setDescription(`**Creators:**\n[@Your Name](https://your-url.com) - *Physical Programming.*\n[@Hyperz](https://hyperz.net/discord) - *Creating the [template](https://github.com/Itz-Hyperz/v13-Bot-Template).*`)
    message.channel.send({ embeds: [embed] }).then((msg) => {
        if(client.config.deleteCommands) {
            setTimeout(() => {
                msg.delete().catch(e => {});
            }, 14000);
        }
    }).catch(e => {});

}

exports.info = {
    name: "credits",
    description: "View the credits for this bot!",
    aliases: ['creator', 'hyperz']
}
