<template>
	<div class="composition">
		<img
			:src="img"
			alt="image"
			class="composition__photo"
			:class="'composition__photo--' + (index + 1)"
			v-for="(img, index) in images"
			:key="index"
		/>
	</div>
</template>

<script>
	export default {
		props: {
			images: {
				type: Array
			}
		},
		name: "Composition"
	};
</script>