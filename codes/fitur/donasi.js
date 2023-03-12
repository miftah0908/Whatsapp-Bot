__path = process.cwd()
const fs = require('fs');
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
md.sendMessage(from, {image:{ url: donasi}, caption: "Terimakasih jika ingin berdonasi"}, {quoted: md1}).catch(e => { md.sendMessage(from, {text: "Image donasi tidak terdeteksi, Mungkin owner bot tidak membuka donasi untuk ini."}, {quoted: md1}) })
} 
