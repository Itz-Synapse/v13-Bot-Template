

const { MessageEmbed, MessageActionRow, MessageButton } = require(`discord.js`);

module.exports = async(client, con, interaction) => {

    try {

        let edited = new MessageEmbed()
        .setColor(client.config.colorhex)
        .setTitle(`${client.user.username} Help Menu`)
        .setThumbnail(client.user.avatarURL({ dynamic: true }))

        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('helpPageLeft')
            .setLabel(`Back`)
            .setStyle(`PRIMARY`),
        )
        .addComponents(
            new MessageButton()
            .setCustomId('helpPageRight')
            .setLabel(`Next`)
            .setStyle(`PRIMARY`),
        )

        let page2 = "`ping` - Check latency.\n`help` - Gets you this menu.\n`credits` - View the bots credits.";
        let page3 = `**Creators:**\n[@Your Name](https://your-url.com) - *Physical Programming.*\n[@Hyperz](https://hyperz.net/discord) - *Creating the [template](https://github.com/Itz-Hyperz/v13-Bot-Template).*`;

        if (!interaction.isButton()) return;
        let message = interaction.message
        if (interaction.customId === 'helpPageLeft') {

            // CODE FOR GOING BACK PAGES

            if(message.embeds) {
                message.embeds.forEach(embed => {
                    if(embed.footer.text.includes('Page 1/3')) {
                        edited.fields = null;
                        edited.setDescription(page4);
                        edited.setFooter(`Page 3/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 2/3')) {
                        edited.setDescription(``);
                        edited.addFields(
                            { name: "Bot Name", value: `\`${client.user.username}\``, inline: true, },
                            { name: "Bot Prefix", value: `\`${client.config.prefix}\``, inline: true, },
                            { name: "About Server", value: `${client.config.aboutServer}`, inline: false, },
                            { name: "Copyright", value: `${client.config.copyright}`, inline: false, },
                        )
                        edited.setFooter(`Page 1/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 3/3')) {
                        edited.fields = null;
                        edited.setDescription(page2);
                        edited.setFooter(`Page 2/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    }
                });
            }
        } else if (interaction.customId === 'helpPageRight') {

            // CODE FOR GOING FORWARD PAGES

            if(message.embeds) {
                message.embeds.forEach(embed => {
                    if(embed.footer.text.includes('Page 1/3')) {
                        edited.fields = null;
                        edited.setDescription(page2);
                        edited.setFooter(`Page 2/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 2/3')) {
                        edited.fields = null;
                        edited.setDescription(page3);
                        edited.setFooter(`Page 3/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 3/3')) {
                        edited.setDescription(``);
                        edited.addFields(
                            { name: "Bot Name", value: `\`${client.user.username}\``, inline: true, },
                            { name: "Bot Prefix", value: `\`${client.config.prefix}\``, inline: true, },
                            { name: "About Server", value: `${client.config.aboutServer}`, inline: false, },
                            { name: "Copyright", value: `${client.config.copyright}`, inline: false, },
                        )
                        edited.setFooter(`Page 1/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    }
                });
            }
        }
    } catch(e) {}

}