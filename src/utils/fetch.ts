export const fetchSchedule = async () => {
	const res = await fetch('https://raw.githubusercontent.com/oleksandrh324110/NodeJS_telegram_bot/master/schedule.json', {
		cache: 'no-cache'
	})
	return await res.json().catch(console.error)
}

export const fetchUsers = async () => {
	const res = await fetch('https://raw.githubusercontent.com/oleksandrh324110/NodeJS_telegram_bot/master/users.json', {
		cache: 'no-cache'
	})
	return await res.json().catch(console.error)
}
