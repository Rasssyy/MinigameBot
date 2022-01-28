const { Client, Message, MessageEmbed } = require('discord.js');
const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()

module.exports = {
    name: 'rockpaperdcissors',
    aliases: ['rpc'],
    categories : 'discord_games',
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first()
        message.channel.send(
            new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Your Game is Starting , Please Wait....`)
                .setAuthor(message.author.tag)
                .setFooter(`Coded By No Name`)
                .setTimestamp(5000)
        ).then(msg => {
            msg.delete({ timeout: 5000 })
            if (!user) return message.channel.send(
                new MessageEmbed()
                    .setTitle(`Please Mention Your Friend To Play Game.`)
            ).then(hehe => {
                hehe.delete({ timeout: 5000 })
            })
            setTimeout(() => {
                RockPaperScissors.startGame(message)
            }, 5000);
        })


    }
}