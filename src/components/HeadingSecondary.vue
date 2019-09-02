<template>
	<h2 class="heading-secondary" v-text="text"></h2>
</template>

<script>
	export default {
		props: {
			text: {
				type: String
			}
		},
		name: "Heading"
	};
</script>
