const { Intents, Client } = require("discord.js-light")
const configParse = require("./configParse")

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
})

const { ALLOWED_CHANNEL_ID, CHARACTERS, MIN_VALUE_CHARACTERS, MIN_VALUE_KAKERA, TOKEN, MARRY_ALL_WISHED } = configParse()

;(async () => {
  try {
    await client.login(TOKEN)

    client.on("message", async (msg) => {
      if (msg?.author?.id === "432610292342587392") {
        const description = msg?.embeds[0]?.description?.split("**")

        if (ALLOWED_CHANNEL_ID.includes(msg?.channel?.id)) {
          // Kakera Reaction
          if (msg?.embeds[0]?.color === "6753288" || msg?.embeds[0]?.footer?.text?.includes("Pertence")) {
            await msg.awaitReactions(
              async (msgReactions) => {
                if (msgReactions._emoji.name.includes("kakera") && description[1] >= MIN_VALUE_KAKERA) {
                  await msg.react(`${msgReactions._emoji.name}:${msgReactions._emoji.id}`).catch((error) => {
                    console.log(error)
                  })
                }
              },
              { max: 1 }
            )
            return null
          }
          await msg.awaitReactions(
            async (msgReactions) => {
              // Marry by Characters
              if (CHARACTERS.includes(msg?.embeds[0]?.author?.name)) {
                await msg.react(`${msgReactions._emoji.name}:${msgReactions._emoji.id}`).catch((error) => {
                  console.log(error)
                })
              }

              // Marry by Value
              if (description[1] >= MIN_VALUE_CHARACTERS) {
                if (msgReactions._emoji.id) {
                  await msg.react(`${msgReactions._emoji.name}:${msgReactions._emoji.id}`).catch((error) => {
                    console.log(error)
                  })
                } else {
                  await msg.react(`${msgReactions._emoji.name}`).catch((error) => {
                    console.log(error)
                  })
                }
              }

              // Marry by Wish
              description.forEach(async (element) => {
                if (element?.includes("Desejado por") && MARRY_ALL_WISHED) {
                  if (msgReactions._emoji.id) {
                    await msg.react(`${msgReactions._emoji.name}:${msgReactions._emoji.id}`).catch((error) => {
                      console.log(error)
                    })
                  } else {
                    await msg.react(`${msgReactions._emoji.name}`).catch((error) => {
                      console.log(error)
                    })
                  }
                }
              })
            },
            { max: 1 }
          )

          // Marry even if there's no reaction
          if (ALLOWED_CHANNEL_ID.includes(msg?.channel?.id)) {
            if (description !== undefined) {
              // Marry by Value
              if (description[1] >= MIN_VALUE_CHARACTERS) {
                return await msg?.react(`❤️`)
              }

              // Marry by Wish
              description.forEach(async (element) => {
                if (element?.includes("Desejado por") && MARRY_ALL_WISHED) {
                  return await msg?.react(`❤️`)
                }
              })
            }
          }
        }
      }
    })
  } catch (error) {
    if (error.toString().includes("An invalid token was provided") || error.toString().includes("401: Unauthorized")) {
      console.log("Invalid Token on config.txt")
      process.exit(1)
    }
    console.log(error)
  }
})()
