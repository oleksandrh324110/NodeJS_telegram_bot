import TelegramBot from 'node-telegram-bot-api'

process.env.TZ = 'Europe/Kiev'

export const admin_chat_id = [961384484, 840090351]

export const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_TOKEN, {
  polling: true
})

import('./events/onMessage.js')
import('./utils/sendSchedule.js')

console.log('Bot has been started')
