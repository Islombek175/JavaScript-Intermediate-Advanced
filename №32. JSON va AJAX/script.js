// Serverga ma'lumot yuborayotganda har doim JSON formatidan foydalanamiz
// Serverdan ma'lumot olayotganda ham javobni JSON formatida kutamiz

const person = {
	name: 'Islombek',
	age: 17,
	hobbies: {
		sport: 'football',
		games: 'COD',
	},
}

const objToJSON = JSON.stringify(person) // Ob'ektni JSON formatiga o'tkazish
const clone = JSON.parse(JSON.stringify(person)) // Ob'ektni klonlash uchun ham JSON formatidan foydalanish mumkin

clone.hobbies.sport = 'boxing'

console.log(clone)

console.log(objToJSON)

console.log('----------------')

const jsonToObj = JSON.parse(objToJSON) // JSON formatidan ob'ektga o'tkazish

console.log(jsonToObj)

console.log('----------------')

const sumValue = document.querySelector('#sum'),
	usdValue = document.querySelector('#usd')

sumValue.addEventListener('input', () => {
	const request = new XMLHttpRequest()
	// request - bu bizning so'rov yuborishimiz uchun kerak bo'lgan ob'ekt
	request.open('GET', './current.json')
	// open() - bu metod so'rov turini va manzilini ko'rsatish uchun kerak
	// 'GET' - ma'lumot olish uchun so'rov turi
	// './current.json' - so'rov yuboriladigan manzil(serverdagi fayl)
	request.setRequestHeader('Content-Type', 'application/json')
	request.send()
	// send() - so'rovni yuborish uchun kerak bo'lgan metod

	request.addEventListener('load', () => {
		if (request.status === 200) {
			// status - bu xolat kodi, 200 kodi hamma narsa yaxshi ekanligini bildiradi
			const data = JSON.parse(request.response)

			console.log(data)

			usd.value = (+sum.value / data.current.USD).toFixed(2)
		} else {
			usd.value = 'Something went wrong'
		}
	})
})
