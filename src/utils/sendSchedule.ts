import { bot } from '../bot.js'
import { fetchSchedule, fetchUsers } from './fetch.js'

setInterval(async () => {
	const json = await fetchSchedule()

	if (!json) return

	for (const [day, schedule] of Object.entries(json)) {
		for (const [time, message] of Object.entries(schedule as string[])) {
			const [hour, minute] = time.split(':').map(v => +v)
			const date = new Date()

			const [link, book] = message?.split('|')

			if (book?.trim()) var [from_user_id, message_id] = book.split('->')

			if (date.getHours() === hour && date.getMinutes() === minute && date.getDay() === +day && message) {
				for (let user_id of await fetchUsers()) {
					await bot.sendMessage(user_id, link, { disable_web_page_preview: true }).catch(console.error)
					if (book?.trim()) bot.forwardMessage(user_id, from_user_id!, +message_id!).catch(console.error)
				}
			}
		}
	}
}, 1000 * 60)
