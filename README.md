# Discord Ban Sistemi

Bu proje, Discord sunucuları için gelişmiş bir ban yönetim sistemi sağlar. İki farklı modülden oluşur: ban listeleme/toplu affetme ve otomatik ban sistemi.

## Özellikler

### 1. Ban Listeleme Sistemi (`banlist` komutu)
- Ana ve yan sunucudaki tüm banları listeler
- Toplu ban affı özelliği
- İşlem iptal seçeneği
- Log kaydı tutma

### 2. Otomatik Ban Sistemi (`guildMemberRemove` eventi)
- Ana sunucudan ayrılan üyeleri otomatik olarak yasaklar
- Yan sunucudaki hesabı da yasaklar
- Kullanıcıya DM gönderir
- Log kaydı tutar

## Kurulum

1. Gerekli modülleri yükleyin:
```bash
npm install discord.js colors
```

2. `config` nesnesini bot dosyanızda tanımlayın veya bir config dosyası oluşturun:
```json
{
  "token": "BOTUN_TOKENİ",
  "anaSunucuID": "ANA_SUNUCU_ID",
  "yanSunucuID": "YAN_SUNUCU_ID",
  "Prefix": "PREFİX",
  "banSebep": "Ana sunucudan ayrıldı",
  "logKanalID": "LOG_KANAL_ID",
  "dmMesaj": "Ana sunucudan ayrıldığın için yasaklandın!"
};
```

3. Komutları ve event handler'ınızı uygun şekilde ekleyin.

## Kullanım

### `banlist` Komutu
```
!banlist
```
- Sunuculardaki tüm banları listeler
- "Toplu Ban Affı" butonu ile tüm banları kaldırabilirsiniz
- "İptal" butonu ile işlemi iptal edebilirsiniz

### Otomatik Ban Sistemi
- Ana sunucudan ayrılan bir üye otomatik olarak yasaklanır
- Kullanıcı yan sunucuda varsa, oradan da yasaklanır
- Kullanıcıya DM gönderilir
- Log kanalına kayıt düşülür

## Gereksinimler
- Node.js v16+
- Discord.js v14+
- Yönetici izinleri olan bir bot

## Yapılandırma
`client.config` nesnesinde aşağıdaki ayarları yapın:
- `anaSunucuID`: Ana sunucu ID'si
- `yanSunucuID`: Yan sunucu ID'si
- `logKanalID`: Log kanalı ID'si
- `banSebep`: Otomatik ban sebebi
- `dmMesaj`: Yasaklanan kullanıcıya gönderilecek DM mesajı

## Katkı
Katkıda bulunmak için [GitHub](https://github.com/LWEAXO) adresini ziyaret edebilirsiniz.

## Lisans
Bu proje [MIT](LISANCE) lisansı altında dağıtılmaktadır.