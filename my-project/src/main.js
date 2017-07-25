// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import loader from '../loader/loader.js'

Vue.use(Router)

async function setRouter () {
	let a = await loader.a.then(v => {
		return v.data
	})

	let b = await loader.b.then(v => {
		return v.data
	})

	return [a, b]
}

setRouter().then(v => {
	let router = new Router({
		routes: [
			{
				path: '/',
				name: 'Hello',
				component: v[0].querySelector('head')
			},
			{
				path: '/welcome',
				name: 'Welcome',
				component: v[1].querySelector('head')
			}
		]
	})

	Vue.config.productionTip = false

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: { App }
	})
})
