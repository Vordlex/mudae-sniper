# Mudae-Sniper
Mudae-Sniper is a NodeJS bot that snipe all rolls and kakera on allowed servers.

# Configuration
+ `ALLOWED_CHANNEL_ID` - Here you should put all the channels that the bot will be able to monitor. Use "," to separate channels
+ `CHARACTERS` - These are the characters the bot will automatically match regardless of the value. Use "," to separate characters.
+ `MIN_VALUE_CHARACTERS` - This is the minimum value the character must have for the bot to automatically marry.
+ `MIN_VALUE_KAKERA` - This is the minimum value the character must have for the bot to automatically react with kakera.
+ `MARRY_ALL_WISHED` - This option will make the bot match all the wished characters.
+ `TOKEN` - Here you should put your discord token, there are several ways to get it like in this video https://www.youtube.com/watch?v=YEgFvgg7ZPI

# Requirements
+ NodeJS 12+

# How to Run
+ Install [NodeJS](https://nodejs.org/en/download/package-manager/current)
+ Clone this repo with `git clone https://github.com/Vordlex/mudae-sniper` or just download and extract it.
+ Go into repo folder and open a terminal and type this command to install dependencies
```sh
npm i
```
+ To run the bot just configure `config.txt` and type this final command 
```sh
node index.js
```


# Disclaimer
This is a simple bot and many features can be added (like autoroll), but as a precaution and to avoid banning servers and even discord itself I don't think this is a good idea. But feel free to fork the project to edit it as you wish. JUST BE CAREFUL AND DON'T PUSH A COMMIT WITH YOUR TOKEN, THIS WILL GIVE ACCESS TO YOUR ACCOUNT
