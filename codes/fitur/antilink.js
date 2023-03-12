__path = process.cwd()
const fs = require('fs');
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{
const groupMetadata = isGroup ? await md.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(md.user.id.split(':')[0] + '@s.whatsapp.net') || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;

if (!isGroup) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena perintah ini hanya bisa di lakukan di dalam group"},{quoted: md1 })
if (!isBotGroupAdmins) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena bot bukan admin!"},{quoted: md1 })
if (!isGroupAdmins) return md.sendMessage(from, {text: "Tidak dapat melakukan perintah ini, karena kamu bukan admin!"},{quoted: md1 })
    
var dbLink = JSON.parse(fs.readFileSync(__path + '/setting/antilink.json')); 
if (!q) return md.sendMessage(from, {text: "Masukkan query on/off\n> Contoh !antilink on"},{quoted: md1})
if (q == "on") {
md.sendMessage(from, {text: "Sukses mengaktifkan antilink di group ini!"},{quoted: md1})
dbLink.push(from)
fs.writeFileSync(__path + '/setting/antilink.json', JSON.stringify(dbLink, null, 2))
} else if (q == "off"){
md.sendMessage(from, {text: "Sukses menonaktifkan antilink di group ini!"},{quoted: md1})
Object.keys(dbLink).forEach((i) => { 
  if (dbLink[i] == from){
    dbLink.splice([i], 1)
    fs.writeFileSync(__path + '/setting/antilink.json', JSON.stringify(dbLink, null, 2))
  }
})
} else { md.sendMessage(from, {text: "Masukkan query on/off\n> Contoh !antilink on"},{quoted: md1}) }
} catch (e) { console.log(e) }
} 
