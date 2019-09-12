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
			<!-- BOOKING SECTION -->
			<booking-section></booking-section>
			<!-- DEFAULT FOOTER -->
			<default-footer></default-footer>
		</main>
	</div>
</template>

<script>
	import Header from "@/sections/home/Header";
	import About from "@/sections/home/About";
	import Feature from "@/sections/home/Feature";
	import Tours from "@/sections/home/Tours";
	import Stories from "@/sections/home/Stories";
	import Booking from "@/sections/home/Booking";
	import Footer from "@/layouts/DefaultFooter";
	import DefaultFooter from "../layouts/DefaultFooter.vue";
	export default {
		components: {
			"header-section": Header,
			"about-section": About,
			"feature-section": Feature,
			"tours-section": Tours,
			"stories-section": Stories,
			"booking-section": Booking,
			"default-footer": DefaultFooter
		},
		name: "Home"
	};
</script>
