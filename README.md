# json-data-parser

json-data-parser is a simple Node.js bot that parses JSON data from a file, sends notifications via Discord and Telegram, and can save the parsed data to a text file.

## Features

- Reads and parses JSON data from a file named `me.json`.
- Sends parsed data to Discord via a specified webhook.
- Sends parsed data to a Telegram chat using a bot token and chat ID.
- Offers the option to save the parsed data to a text file if no notification services are enabled.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/infalibless/json-data-parser.git
   cd json-data-parser
   ```

2. Install dependencies:
   ```bash
   npm install axios
   ```

3. Create a `config.json` file with your configurations:
   ```json
   {
       "discord": {
           "enabled": true,
           "webhook": "your_discord_webhook_url"
       },
       "telegram": {
           "enabled": true,
           "tkn": "your_telegram_bot_token",
           "chatid": "your_chat_id"
       },
       "txtonline": true
   }
   ```

4. Create a `me.json` file with the JSON data you want to parse.

## Usage

Run the bot with the following command:
```bash
node parser.js
```

Follow the prompts to use the bot.

## Contributing

Feel free to submit issues or pull requests to improve this project.

## License

This project is licensed under the MIT License.
