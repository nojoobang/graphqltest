let axios = require('axios')

module.exports = {
	a: axios({
		method: 'get',
		url: '/hello',
		responseType: 'document'
	}).then(function(response) {
		return response
	}),
	b: axios({
		method: 'get',
		url: '/welcome',
		responseType: 'document'
	}).then(function(response) {
		return response
	})
}