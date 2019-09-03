<template>
	<div>
		<header-section></header-section>
		<main>
			<!-- ABOUT SECTION -->
			<about-section></about-section>
			<!-- FEATURE SECTION -->
			<feature-section></feature-section>
			<!-- TOURS SECTION -->
			<tours-section></tours-section>
			<!-- STORIES SECTION -->
			<stories-section></stories-section>
		</main>
	</div>
</template>

<script>
	import Header from "@/sections/home/Header";
	import About from "@/sections/home/About";
	import Feature from "@/sections/home/Feature";
	import Tours from "@/sections/home/Tours";
	import Stories from "@/sections/home/Stories";
	export default {
		components: {
			"header-section": Header,
			"about-section": About,
			"feature-section": Feature,
			"tours-section": Tours,
			"stories-section": Stories
		},
		name: "Home"
	};
</script>
