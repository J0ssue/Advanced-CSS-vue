<template>
	<div class="feature-box">
		<i :class="icon" class="feature-box__icon"></i>
		<heading-tertiary
			:text="title"
			class="u-margin-bottom-small"
		></heading-tertiary>
		<p class="feature-box__text" v-text="text"></p>
	</div>
</template>

<script>
	export default {
		props: {
			title: { type: String },
			icon: { type: String },
			text: { type: String }
		},
		name: "FeatureBox"
	};
</script>