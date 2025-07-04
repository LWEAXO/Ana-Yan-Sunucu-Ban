const { EmbedBuilder } = require('discord.js');
const colors = require("colors")/* github.com/LWEAXO */

module.exports = {/* github.com/LWEAXO */
  name: 'guildMemberRemove',
  async execute(member, client) {
    if (!client.config) {
      console.error('Config yüklenmedi!'.red.bold);
      return;
    }

    const { anaSunucuID, yanSunucuID, banSebep, dmMesaj, logKanalID } = client.config;
    
    if (member.guild.id !== anaSunucuID) return;

    const logChannel = client.channels.cache.get(logKanalID);
    const user = member.user;

    try {
      const yanSunucu = await client.guilds.fetch(yanSunucuID);
      const yanSunucuUyesi = await yanSunucu.members.fetch(user.id).catch(() => null);

      if (yanSunucuUyesi) {
        await Promise.all([
          member.guild.bans.create(user.id, { reason: banSebep }),
          yanSunucu.bans.create(user.id, { reason: banSebep })
        ]);

        try {
          await user.send(dmMesaj);
        } catch (dmError) {
          console.log(`${user.tag} kullanıcısına DM gönderilemedi`.red.bold);
        }

        if/* github.com/LWEAXO */ (logChannel) {/* github.com/LWEAXO */
          const logEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('⛔ Otomatik Ban')
            .setDescription(`${user.tag} (${user.id}) yasaklandı`)
            .setFooter({ text: `github.com/LWEAXO`, iconURL: client.user.displayAvatarURL() || null })
            .addFields(
              { name: 'Sebep', value: banSebep },
              { name: 'Sunucular', value: `${member.guild.name}\n${yanSunucu.name}` }
            )
            .setTimestamp();
          await logChannel.send({ embeds: [logEmbed] /* github.com/LWEAXO */ });
        }
      }
    } catch (error) {
      console.error('Ban hatası:', error);
      if (logChannel) {
        const errorEmbed = new EmbedBuilder()
          .setColor('#ff0000')
          .setTitle('Ban Sistemi Hatası')
          .setFooter({ text: `github.com/LWEAXO`, iconURL: client.user.displayAvatarURL() || null })
          .setDescription(`🔴 **Kullanıcı:** ${user.tag}\n**Hata:** ${error.message}`)
          .setTimestamp();
        await logChannel.send({ embeds: [errorEmbed] });/* github.com/LWEAXO */
      }
    }
  }
};