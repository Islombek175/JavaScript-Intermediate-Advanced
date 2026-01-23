const friend = {
	status: 'failure',
}

const request = new Promise((resolve, reject) => {
	if (friend.status === 'success') {
		friend.time = '12:00'
		resolve(friend)
	} else {
		friend.reason = 'Probka'
		reject(friend)
	}
})

request
	.then(data => {
		data.place = 'Humo Arena'
		return data
	})
	.then(data => {
		data.food = 'Lavash'
		return data
	})
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.log(error)
	})
	.finally(() => {
		console.log("Telefon qilib qo'ydi")
	})

// Example 2

const logger = time => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

logger(1000).then(() => {
	console.log('1000ms')
})
logger(2000).then(() => {
	console.log('2000ms')
})

Promise.all([logger(1000), logger(2000)]).then(() => {
	console.log('All promises resolved')
})
