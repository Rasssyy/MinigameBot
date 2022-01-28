const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../../config/config.json");

module.exports = {
  name: 'ping',
  aliases: ['api'],
  categories : 'info',
  description: 'Get Bot Ping..',
  useage: 'ping',
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setFooter("Coded by: No Name")
        .setTitle(`${'🎈'} Pinging....`)
    ).then(msg => {
      msg.edit(
        new MessageEmbed()
          .setColor("RED")
          .setFooter("Coded by: No Name")
          .setDescription(`🎈 Ping : ${client.ws.ping}ms`)
      )
    })
  }
}