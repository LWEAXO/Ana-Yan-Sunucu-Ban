const { Prefix } = require("../config.json")
const colors = require("colors")

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
      if (message.author.bot) return;
      
      if (message.content.toLowerCase() === `${Prefix}banlist`) {
        const command = client.commands.get('banlist');
        if (!command) return;
        
        try {
          console.log(`Komut çalıştırılıyor:`.white.bold + ` ${command.name}`.green.bold + ` (${message.author.tag})`.blue.bold);
          await command.execute(message, client);
        } catch (error) {
          console.error('Komut hatası:'.red.bold, error);
          await message.reply('Komut çalıştırılırken hata oluştu!'.red.bold);
        }
      }
    }
  };