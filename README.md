# Discord-bot

A Discord bot for OSL Discord Server, features include a few commands mentioned below.

## Commands

- !help - Show all bot commands
- !discord - Guides you how to use discord
- !ping - Shows the current ping of the bot server
- !dice - Throw one or more dice up and display the result
- !coinflip - Throw a coin up and display the result

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Download repo and extract
2. Open terminal and CD into the project folder
3. Run 'npm install' to install dependancies
4. Visit https://discordapp.com/developers/applications/me and create new app, giving it a name and avatar.
5. Scroll down and "Create bot user", then copy the token
6. Create a .env file to store copied token under variable "Bot_token" and save the file
7. Fire up node by entering 'node index.js' into the terminal
8. Now you should see your bot online on discord

You should now be running the bot on your local system

## File Structure

```

├── README.md
├── cmds            -> Add your commands here
| ├── coinflip.js
| ├── dice.js
| ├── help.js
| └── ping.js
├── index.js
├── package-lock.json
└── package.json

```

## Built With

- [Discord JS](http://discord.js.org) - The framework used
- [An Idiots Guide](https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/) - Referenced thier guide
- [Threebow](https://www.youtube.com/watch?v=024upsEuHaU&list=PLVBD9pLCy6oogSgJuUQzE-99_-voOdSng) - Awesome video tutorials
