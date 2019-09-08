<template>
	<div class="story">
		<figure class="story__shape">
			<img :src="avatar" alt="person on a tour" class="story__img" />
			<figcaption class="story__caption" v-text="caption"></figcaption>
		</figure>
		<div class="story__text">
			<heading-tertiary
				class="u-margin-bottom-small"
				v-text="title"
			></heading-tertiary>
			<p v-text="text"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Story",
		props: ["avatar", "text", "title", "caption"]
	};
</script>