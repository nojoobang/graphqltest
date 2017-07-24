let axios = require('axios')
let cnt = 0
let hello
let welcome

axios({
	method: 'get',
	url: '/hello',
	responseType: 'document'
}).then(function(response) {
	hello = response.data
});

axios({
	method: 'get',
	url: '/welcome',
	responseType: 'document'
}).then(function(response) {
	welcome = response.data
});

module.exports = {
	a: hello,
	b: welcome 
}
