const { prefix } = require('../index')
const client = require('../index')
const { version: discordjsVersion } = require('discord.js');

client.on('ready', async () => {
  client.user.setStatus('dnd');
  console.log(`${client.user.username} ✅`)
  client.user.setActivity(`${prefix}help | version ${discordjsVersion}`)

})