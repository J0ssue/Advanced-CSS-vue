<style lang="scss" scoped>
</style>

<template>
	<h3 class="heading-tertiary" v-text="text"></h3>
</template>

<script>
	export default {
		props: {
			text: {
				type: String
			}
		},
		name: "HeadingTertiary"
	};
</script>