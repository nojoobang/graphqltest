// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import loader from '../loader/loader.js'
import Hello from '@/components/Hello'

console.log('Original vue inst: ', Hello)

let router

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
	router = new Router({
		routes: [
			{
				path: '/',
				name: 'Hello',
				component: { template: v[0].querySelector('head').firstChild.innerHTML }
			},
			{
				path: '/welcome',
				name: 'Welcome', ate: v[1].querySelector('head').firstChild.innerHTML }
			}
		]
	})

	startApp()
})

let startApp = () => {
	Vue.config.productionTip = false
	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: { App }
	})
}

// let convertingHtmlToVue = (v) => {
// 	let name
// 	let rv = []

// 	v.forEach(vv => {
// 		name = 'Random' + Math.floor(Math.random() * 1000)
// 		console.log(vv.querySelector('head').innerHTML)
// 		Vue.component(name, {
// 			template: vv.querySelector('head').innerHTML
// 		})
// 		rv.push(name)
// 	})

// 	return rv
// }
