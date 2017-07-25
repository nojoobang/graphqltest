let axios = require('axios')

module.exports = {
	a: new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url: '/hello',
			responseType: 'document'
		}).then(function(response) {
			resolve(response)
		})
	}).then((r) => {
		return r 
	}),
	b: new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url: '/welcome',
			responseType: 'document'
		}).then(function(response) {
			resolve(response)
		})
	}).then((r) => {
		return r 
	})
}