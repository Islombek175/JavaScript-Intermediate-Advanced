window.addEventListener('DOMContentLoaded', () => {
	const postWrapper = document.querySelector('.posts')
	const URL = 'https://jsonplaceholder.typicode.com/posts'
	// METHOD GET
	fetch(URL, {
		// fetch orqali serverga so'rov yuboriladi
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then(response => {
			return response.json()
			// serverdan kelgan javobni json formatiga o'zgartiramiz
		})
		.then(data => {
			data.forEach((item, index) => {
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML += `
				<h4> <b>#${index + 1}</b> ${item.title}</h4>
				<p>${item.body}</p>
				`
				postWrapper.append(postEl)
			})
		})
		.catch(error => {
			const errorEl = document.createElement('div')
			errorEl.classList.add('error')
			errorEl.textContent = 'Something went wrong!'
			postWrapper.append(errorEl)
		})

	// METHOD POST
	const form = document.querySelector('form')

	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)

		const object = {}
		formData.forEach((value, key) => {
			object[key] = value
		})

		const json = JSON.stringify(object)
		console.log(json)

		fetch(URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: json,
		})
			.then(response => response.json())
			.then(data => {
				form.reset()
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML += `
				<h4> <b>#${data.id}</b> ${data.title}</h4>
				<p>${data.body}</p>
				`
				postWrapper.append(postEl)
			})
			.catch(error => console.log(error))
	})
})
