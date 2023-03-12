__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{ 

if (!q) return md.sendMessage(from, { text: "Masukkan query" },{quoted: md1})
var textRandom = ["Besok","Lusa","1 Minggu lagi!","2 Minggu lagi!","3 Minggu lagi!","Bulan depan","2 Bulan lagi","3 Bulan lagi","4 Bulan lagi","Tahun depan"]
var textRandomResult = `[ KERANG AJAIB ( *${command}* ) ]

• *${command}* : ${q}
• 🤖 : ${textRandom[Math.floor(Math.random() * textRandom.length)]}`

md.sendMessage(from, { text: textRandomResult },{quoted: md1})

} catch (e) { console.log(e) }
} 
