__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{ 

if (!q) return md.sendMessage(from, { text: "Masukkan query" },{quoted: md1})
var textRandom = ["1","2","3","4","5","6","7","8","9","17","23","34","46","52","69","71","84","90"]
var textRandomResult = `[ KERANG AJAIB ( *${command}* ) ]

• *${command}* : ${q}
• 🤖 : ${textRandom[Math.floor(Math.random() * textRandom.length)]}`

md.sendMessage(from, { text: textRandomResult },{quoted: md1})

} catch (e) { console.log(e) }
} 
