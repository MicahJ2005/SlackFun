const { App } = require('@slack/bolt')
require('dotenv').config()

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000)

  console.log('⚡️Hello World.. Bolt app is running again...Lab 2!')
})()

// Listens to incoming messages that contain "hello"
app.message('hello', ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log('message:', message);
  say(`Hey there <@${message.user}>! You're done with lab two!`)
})

// app.event('app_home_opened', ({ event, say }) => {
//   say(`Hello world and <@${event.user}>! Great job completing lab 1!`)
// })