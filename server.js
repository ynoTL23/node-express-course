const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }]

app.get('/users', (req, res) => {
	res.json({
		success: true,
		message: 'successfully got users!',
		users: mockUserData
	})
})

app.get('/users/:id', (req, res) => {
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login', (req, res) => {
	const username = req.body.username
	const password = req.body.password

	const mockUsername = 'billyTheKid'
	const mockPassword = 'superSecret'

	if (username === mockUsername && password === mockPassword) {
		res.json({
			success: true,
			message: 'password and username match',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'username and password do not match'
		})
	}
})

app.post('/age-limit', (req, res) => {
	const age = req.body.age

	if (age >= 21) {
		res.json({
			success: true,
			message: 'You are at/over the age limit of 21 years old!'
		})
	} else {
		res.json({
			success: false,
			message: 'You are under the age of 21'
		})
	}
})

app.listen(8000, () => {
	console.log('Server is listening')
})
