const { Client, Message, MessageEmbed } = require('discord.js');
const djsGames = require('djs-games')
const SnakeGame = new djsGames.SnakeGame()

module.exports = {
    name: 'snack',
    aliases: ['snk'],
    categories : 'discord_games',
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        message.channel.send(
            new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Your Game is Starting , Please Wait....`)
                .setAuthor(message.author.tag)
                .setFooter(`Coded By No Name`)
                .setTimestamp(5000)
        ).then(msg => {
            msg.delete({ timeout: 5000 })
            setTimeout(() => {
                SnakeGame.startGame(message)
            }, 5000);
        })

    }
}