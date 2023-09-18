/**
 *
 * @param {string} authorization // Your token
 * @param {string} guild_id // Server ID
 * @param {string} channel_id // Channel ID
 * @param {string} message_id // Message ID
 * @param {string} custom_id // Message ID
 * @param {string} application_id // Application ID in case you are using other mudae version
 */
const buttonHandler = async (
  authorization,
  guild_id,
  channel_id,
  message_id,
  custom_id,
  application_id = "432610292342587392"
) => {
  try {
    await fetch("https://discord.com/api/v9/interactions", {
      headers: {
        accept: "*/*",
        "accept-language": "pt-BR",
        authorization,
        "content-type": "application/json",
        "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "pt-BR",
        "x-discord-timezone": "America/Sao_Paulo",
        "x-super-properties":
          "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDE3Iiwib3NfdmVyc2lvbiI6IjEwLjAuMjI2MjEiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJpYTMyIiwic3lzdGVtX2xvY2FsZSI6InB0LUJSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIGRpc2NvcmQvMS4wLjkwMTcgQ2hyb21lLzEwOC4wLjUzNTkuMjE1IEVsZWN0cm9uLzIyLjMuMTIgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjIyLjMuMTIiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyMjg2NzIsIm5hdGl2ZV9idWlsZF9udW1iZXIiOjM3MTY4LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        cookie:
          "__dcfduid=ebcbe7d0a26c11ed901a654be6558bdf; __sdcfduid=ebcbe7d1a26c11ed901a654be6558bdfa88253eb71e6cae7c424f48f117227aad9a6477b5d41e3f69db45fc3b9d383f8; __stripe_mid=d9c2aa02-5b4f-4fb4-9957-07d916332410d076d8; __cfruid=eb30d6ce5a70b7a8b040bbeb68ab5efcf37abc49-1695045529; cf_clearance=0uOQlpUjlL6fJkE_n4iSnTRTAbhVHb16cjyjw.XYPe8-1695045533-0-1-f8765d1b.919370ba.c3acfd40-0.2.1695045533",
        Referer: `https://discord.com/channels/${guild_id}/${channel_id}`,
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: `{"type":3,"guild_id":"${guild_id}","channel_id":"${channel_id}","message_flags":0,"message_id":"${message_id}","application_id":"${application_id}","session_id":"0c10c7f223747bc824f8242daa6e3e31","data":{"component_type":2,"custom_id":"${custom_id}"}}`,
      method: "POST",
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = buttonHandler
