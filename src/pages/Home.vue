<template>
	<div>
		<header-section></header-section>
		<main>
			<!-- ABOUT SECTION -->
			<section class="section-about">
				<header class="u-center-text u-margin-bottom-8">
					<heading-secondary
						class="u-margin-bottom-big"
						text="Exciting tours for adventurous people"
					></heading-secondary>
				</header>

				<div class="row">
					<div class="col-1-of-2">
						<heading-tertiary
							class="u-margin-bottom-2"
							text="you're going to fall in love with nature"
						></heading-tertiary>
						<p class="paragraph">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
							deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur, aperia. Lorem ipsum dolor sit amet.
						</p>

						<heading-tertiary
							class="u-margin-bottom-2"
							text="live adventures like you never have before"
						></heading-tertiary>
						<p class="paragraph">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
							deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur, aperiam. Lorem ipsum dolor sit amet consectetur.
						</p>

						<a href="#" class="btn-text">Learn more &rarr;</a>
					</div>
					<div class="col-1-of-2">
						<composition :images="images"></composition>
					</div>
				</div>
			</section>

			<!-- FEATURE SECTION -->
			<section class="section-feature">
				<div class="row">
					<div
						class="col-1-of-4"
						v-for="(box, index) in featureBoxes"
						:key="index * 3"
					>
						<feature-box
							:icon="box.icon"
							:title="box.title"
							:text="box.text"
						></feature-box>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
	import Header from "@/sections/home/Header";
	export default {
		components: {
			"header-section": Header
		},
		name: "Home",
		data() {
			return {
				images: [
					require("../assets/images/nat-1-large.jpg"),
					require("../assets/images/nat-2-large.jpg"),
					require("../assets/images/nat-3-large.jpg")
				],
				featureBoxes: [
					{
						icon: "fas fa-globe-europe",
						title: "Explore the world",
						text:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus?"
					},

					{
						icon: "far fa-compass",
						title: "Meet Nature",
						text:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus?"
					},
					{
						icon: "far fa-map",
						title: "Find your way",
						text:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus?"
					},
					{
						icon: "far fa-heart",
						title: "Live a healthier life",
						text:
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, natus?"
					}
				]
			};
		}
	};
</script>
