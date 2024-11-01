const fs = require('fs');
const axios = require('axios');
const readline = require('readline');

fs.readFile('config.json', 'utf8', (confige4, configData) => {
    if (confige4) { console.error(confige4);
        return;
    }
    
    let config;
    try {
        config = JSON.parse(configData);
    } catch (confige4) {
        console.error(confige4);
        return;
    }

    fs.readFile('me.json', 'utf8', (e4, data) => {
        if (e4) { console.error(e4);
            return;
        }

        try {
            const meinejson = JSON.parse(data);
            console.log(meinejson);
            console.log('enjoy');
            let anyenabled = false;
            if (config.discord.enabled) {
                anyenabled = true;
                const webhookUrl = config.discord.webhook;
                const payload = {
                    content: `done parsed -> ${JSON.stringify(meinejson)}`
                };

                axios.post(webhookUrl, payload)
                    .then(() => {
                        console.log('done post discord webhook');
                    })
                    .catch(hooke4 => {
                        console.error(hooke4);
                    });
            }

            if (config.telegram.enabled) {
                anyenabled = true;
                const telegramapi = `https://api.telegram.org/bot${config.telegram.tkn}/sendMessage`;
                const payloadtlgrm = {
                    chat_id: config.telegram.chatid,
                    text: `done parsed -> ${JSON.stringify(meinejson)}`
                };

                axios.post(telegramapi, payloadtlgrm)
                    .then(() => {
                        console.log('done post telegram chatid');
                    })
                    .catch(telegrame4 => {
                        console.error(telegrame4);
                    });
            }

            if (!anyenabled) {
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                rl.question('do you want save txt file (y/n) ', (answer) => {
                    if (answer.toLowerCase() === 'y' && config.txtonline) {
                        fs.writeFile('parsed.txt', JSON.stringify(meinejson), (write4) => {
                            if (write4) {
                                console.error(write4);
                            } else {
                                console.log('done parsed -> parsed.txt.');
                            }
                        });
                    } else {console.log('no action taken');
                        console.log("why:((");
                    }
                    rl.close();
                });
            }
           }
          catch (parse4) {console.error(parse4);}
    });
});
