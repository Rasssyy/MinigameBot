const { Client, Message, MessageEmbed } = require('discord.js');
const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()


module.exports = {
    name: 'guessnumber',
    aliases: ['gsnm'],
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
                guessTheNumber.startGame(message)
            }, 5000);
        })
    }
}