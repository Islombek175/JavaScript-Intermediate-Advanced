'use strict'

localStorage.setItem('theme', 'ligth')

const theme = localStorage.getItem('theme')

if (theme === 'light') {
	document.body.style.backgroundColor = '#eee'
} else if (theme === 'dark') {
	document.body.style.backgroundColor = '#111'
}

console.log(theme)

// localStorage.clear() -- clears all items in localStorage
// localStorage.removeItem() -- removes specefic item in local storage

const form = document.querySelector('form'),
	postsParent = document.querySelector('.posts')

form.addEventListener('submit', event => {
	event.preventDefault()

	const formData = new FormData(form)

	const obj = {}

	formData.forEach((value, key) => {
		obj[key] = value
	})

	const db = JSON.parse(localStorage.getItem('posts'))

	if (db) {
		localStorage.setItem('posts', JSON.stringify([...db, obj]))
	} else {
		localStorage.setItem('posts', JSON.stringify([obj]))
	}
})

getPosts()
function getPosts() {
	const posts = JSON.parse(localStorage.getItem('posts'))
	posts.forEach((item, index) => {
		const postElement = document.createElement('div')
		postElement.classList.add('post')
		postElement.innerHTML = `
		<h4> <b>#${index + 1}.</b> ${item.title}</h4>>
		<p>${item.body}</p>
		`
		postsParent.append(postElement)
	})
}
