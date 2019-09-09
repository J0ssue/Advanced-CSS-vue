<template>
	<div class="bg-video">
		<video class="bg-video__content" autoplay muted loop>
			<source :src="mp4" type="video/mp4" />
			<source :src="webm" type="video/webm" />
			Your browser is not supported!
		</video>
	</div>
</template>

<script>
	export default {
		props: ["mp4", "webm"],
		name: "BGVideo"
	};
</script>