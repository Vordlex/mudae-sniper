const { Intents, Client } = require("discord.js-selfbot-v13")
const configParse = require("./configParse")
const buttonHandler = require("./buttonHandler")

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  checkUpdate: false,
})

const {
  ALLOWED_CHANNEL_ID,
  CHARACTERS,
  MIN_VALUE_CHARACTERS,
  MIN_VALUE_KAKERA,
  TOKEN,
  MARRY_ALL_WISHED,
} = configParse()

;(async () => {
  try {
    await client.login(TOKEN)

    client.on("ready", () => {
      console.log("CLIENT CONNECTED")
    })

    client.on("messageCreate", async (msg) => {
      if (msg.author.id === "432610292342587392") {
        if (msg.components.length === 0) return

        if (ALLOWED_CHANNEL_ID.includes(msg.channel.id)) {
          const msgComponents = msg.components[0]
          const description = msg.embeds[0]?.description.split("**")

          // Kakera Reaction
          if (
            msg.embeds[0]?.color === "6753288" ||
            msg.embeds[0]?.footer?.text?.includes("Pertence")
          ) {
            if (
              msgComponents.components[0].emoji.name.includes("kakera") &&
              description[1] >= MIN_VALUE_KAKERA
            ) {
              return await buttonHandler(
                TOKEN,
                msg.guildId,
                msg.channelId,
                msg.id,
                msgComponents.components[0].customId
              )
            }

            return null
          }

          // Marry by Characters
          if (CHARACTERS.includes(msg.embeds[0]?.author?.name)) {
            return await buttonHandler(
              TOKEN,
              msg.guildId,
              msg.channelId,
              msg.id,
              msgComponents.components[0].customId
            )
          }

          // Marry by Value
          if (description[1] >= MIN_VALUE_CHARACTERS) {
            return await buttonHandler(
              TOKEN,
              msg.guildId,
              msg.channelId,
              msg.id,
              msgComponents.components[0].customId
            )
          }

          // Marry by Wish
          description.forEach(async (element) => {
            if (element?.includes("Desejado por") && MARRY_ALL_WISHED) {
              return await buttonHandler(
                TOKEN,
                msg.guildId,
                msg.channelId,
                msg.id,
                msgComponents.components[0].customId
              )
            }
          })

          // Marry even if there's no reaction
          if (ALLOWED_CHANNEL_ID.includes(msg.channel.id)) {
            if (description !== undefined) {
              // Marry by Value
              if (description[1] >= MIN_VALUE_CHARACTERS) {
                return await buttonHandler(
                  TOKEN,
                  msg.guildId,
                  msg.channelId,
                  msg.id,
                  msgComponents.components[0].customId
                )
              }

              // Marry by Wish
              description.forEach(async (element) => {
                if (element?.includes("Desejado por") && MARRY_ALL_WISHED) {
                  return await buttonHandler(
                    TOKEN,
                    msg.guildId,
                    msg.channelId,
                    msg.id,
                    msgComponents.components[0].customId
                  )
                }
              })
            }
          }
        }
      }
    })
  } catch (error) {
    console.log(error)
    if (
      error.toString().includes("An invalid token was provided") ||
      error.toString().includes("401: Unauthorized")
    ) {
      console.log("Invalid Token on config.txt")
      process.exit(1)
    }
  }
})()
