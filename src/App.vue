<template>
	<div id="app">
		<home-page></home-page>
	</div>
</template>

<script>
	import Home from "@/pages/Home";
	export default {
		name: "app",
		components: {
			"home-page": Home
		}
	};
</script>