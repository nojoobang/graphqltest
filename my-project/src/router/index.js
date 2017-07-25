import Vue from 'vue'
import Router from 'vue-router'
import { getHtml } from '../../loader/loader.js'

let Hello

getHtml(function (r) {
	Hello = r
})

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		}
	]
})
