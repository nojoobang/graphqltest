<template>
	<div class="welcome">
		<div class="title">{{ mag }}</div>
		<router-link to="/">Go to Hello</router-link>	
	</div>
</template>

<script>
export default {
	name: '/welcome',
	data () {
		return {
			msg: '웰컴이라는'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title {
		font-size: 20px;
		color: rgb(255, 200, 15);
	}
</style>
