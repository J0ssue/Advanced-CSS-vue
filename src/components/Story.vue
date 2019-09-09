<template>
	<div class="story">
		<figure class="story__shape">
			<img :src="img" alt="person on a tour" class="story__img" />
			<figcaption class="story__caption" v-text="name"></figcaption>
		</figure>
		<div class="story__text">
			<heading-tertiary
				class="u-margin-bottom-small"
				:text="title"
			></heading-tertiary>
			<p v-text="text"></p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["img", "name", "title", "text"],
		name: "Story"
	};
</script>