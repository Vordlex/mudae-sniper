const { readFileSync } = require("fs")

const configParse = () => {
  const config = readFileSync("./config.txt", "utf8").replace(/\r/g, "").split("\n")

  let ALLOWED_CHANNEL_ID = []
  let CHARACTERS = []
  let MIN_VALUE_CHARACTERS = 30
  let MIN_VALUE_KAKERA = 30
  let TOKEN = ""
  let MARRY_ALL_WISHED = false

  config.forEach((line) => {
    const [key, value] = line.split("=")
    switch (key) {
      case "ALLOWED_CHANNEL_ID":
        ALLOWED_CHANNEL_ID = value.split(",")
        break
      case "CHARACTERS":
        CHARACTERS = value.split(",")
        break
      case "MIN_VALUE_CHARACTERS":
        MIN_VALUE_CHARACTERS = parseInt(value) || 10000
        break
      case "MIN_VALUE_KAKERA":
        MIN_VALUE_KAKERA = parseInt(value) || 10000
        break
      case "TOKEN":
        if (value.length === 0) {
          console.log("Please use your TOKEN in config.txt")
          process.exit(1)
        }
        TOKEN = value
        break
      case "MARRY_ALL_WISHED":
        MARRY_ALL_WISHED = value === "true"
        break
      default:
        break
    }
  })
  return {
    ALLOWED_CHANNEL_ID,
    CHARACTERS,
    MIN_VALUE_CHARACTERS,
    MIN_VALUE_KAKERA,
    TOKEN,
    MARRY_ALL_WISHED,
  }
}

module.exports = configParse
