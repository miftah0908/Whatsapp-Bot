__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try {
if (!isGroup) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena perintah ini hanya bisa di lakukan di dalam group"},{quoted: md1 })
await md.sendMessage(bot.message.extendedTextMessage.contextInfo.mentionedJid[0], {sticker: {url: "https://github.com/naylachan/STICKER1/blob/main/" + command + ".webp?raw=true"}}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `${pushname} Mengirim sticker untuk anda` } } } })
await md.sendMessage(from, {text: "Sukses"},{quoted: md1})
} catch(e) {
md.sendMessage(from, {text: "Silahkan tag orang yang ingin kamu jadikan target"},{quoted: md1})
}

} 
