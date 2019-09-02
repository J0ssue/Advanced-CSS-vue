<template>
	<div>
		<header-section></header-section>
		<main>
			<!-- ABOUT SECTION -->
			<div class="section-about">
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
			</div>
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
				]
			};
		}
	};
</script>
