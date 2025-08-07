//========= SILENT-DROPPER-V2 - index.js =========//
console.clear();
require('dotenv').config(); // Load config.env

const { default: baileys, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const P = require('pino');
const chalk = require('chalk');

// Session auth state
const sessionFolder = './session';
const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) });

// Load Plugins
const pluginFolder = path.join(__dirname, 'plugins');
function loadPlugins(client) {
    if (!fs.existsSync(pluginFolder)) return;
    fs.readdirSync(pluginFolder).forEach(file => {
        if (file.endsWith('.js')) {
            try {
                const plugin = require(path.join(pluginFolder, file));
                if (typeof plugin === 'function') {
                    plugin(client);
                    console.log(chalk.green(`✅ Plugin loaded: ${file}`));
                }
            } catch (err) {
                console.log(chalk.red(`❌ Failed to load plugin ${file}: ${err.message}`));
            }
        }
    });
}

// Start Bot
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);
    const { version, isLatest } = await fetchLatestBaileysVersion();
    
    const client = baileys({
        version,
        auth: state,
        printQRInTerminal: true,
        logger: P({ level: 'silent' })
    });

    store.bind(client.ev);

    client.ev.on('creds.update', saveCreds);

    client.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut);
            console.log(chalk.yellow(`📴 Disconnected: ${lastDisconnect?.error?.output?.statusCode}. Reconnecting: ${shouldReconnect}`));
            if (shouldReconnect) startBot();
        } else if (connection === 'open') {
            console.log(chalk.green('✅ Connected to WhatsApp!'));
        }
    });

    client.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify') return;
        const msg = messages[0];
        if (!msg.message) return;
        if (msg.key && msg.key.remoteJid === 'status@broadcast') return;

        const sender = msg.key.remoteJid;
        const messageContent = msg.message.conversation || msg.message.extendedTextMessage?.text;
        if (!messageContent) return;

        console.log(chalk.cyan(`[${sender}] → ${messageContent}`));

        // Example Command Handler
        if (messageContent.toLowerCase() === 'ping') {
            await client.sendMessage(sender, { text: 'Pong! 🏓' }, { quoted: msg });
        }
    });

    // Load plugins
    console.log(chalk.blue('🧬 Installing Plugins'));
    loadPlugins(client);
}

// Launch
startBot();