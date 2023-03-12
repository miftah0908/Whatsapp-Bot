__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{ 

if (!q) return md.sendMessage(from, { text: "Masukkan query" },{quoted: md1})
var textRandom = ["Bisa","Gabisa","Mungkin bisa","Mustahil!","Gtau, Coba tanya megawati"]
var textRandomResult = `[ KERANG AJAIB ( *${command}* ) ]

• *${command}* : ${q}
• 🤖 : ${textRandom[Math.floor(Math.random() * textRandom.length)]}`

md.sendMessage(from, { text: textRandomResult },{quoted: md1})

} catch (e) { console.log(e) }
} 
