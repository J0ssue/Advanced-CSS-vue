<template>
	<section class="section-tours">
		<header class="u-center-text u-margin-bottom-big u-margin-top-big">
			<heading-secondary text="Most popular tours"></heading-secondary>
		</header>
		<div class="row">
			<div class="col-1-of-3" v-for="(card, index) in cards" :key="card.price">
				<card :card="card" :index="index"></card>
			</div>
		</div>
		<div class="u-center-text u-margin-top-huge">
			<a href="#" class="btn btn--green">Discover all tours</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: "ToursSection",
		data() {
			return {
				cards: [
					{
						title: "the sea explorer",
						details: [
							"3 day tour",
							"Up to 30 people",
							"2 tour guides",
							"Sleep in cozy hotels",
							"Difficulty: easy"
						],
						price: "€297"
					},
					{
						title: "the forest hiker",
						details: [
							"7 day tour",
							"Up to 40 people",
							"6 tour guides",
							"Sleep in provided tent",
							"Difficulty: medium"
						],
						price: "€497"
					},
					{
						title: "the snow adventurer",
						details: [
							"5 day tour",
							"Up to 15 people",
							"3 tour guides",
							"Sleep in provided tents",
							"Difficulty: hard"
						],
						price: "€897"
					}
				]
			};
		}
	};
</script>