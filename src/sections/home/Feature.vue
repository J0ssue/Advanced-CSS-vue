<template>
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
</template>

<script>
	export default {
		name: "FeatureSection",
		data() {
			return {
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
