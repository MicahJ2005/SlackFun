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

  console.log('⚡️Hello World.. Bolt app is running lab 1!')
})()

// Listen to the app_home_opened event, and when received, respond with a message including the user being messaged
app.event('app_home_opened', ({ event, say }) => {
  say(`Hello world and <@${event.user}>! Great job completing lab 1!`)
})