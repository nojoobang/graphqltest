import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Welcome from '@/components/Welcome'
import eee from '../../loader/loader.js'
console.log('eee: ', eee)
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/welcome',
			name: 'Welcome',
			component: Welcome
		}
	]
})
