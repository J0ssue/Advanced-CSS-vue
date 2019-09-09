<template>
	<section class="section-stories">
		<header class="u-center-text u-margin-bottom-big">
			<heading-secondary
				text="We make people genuinely happy"
			></heading-secondary>
		</header>
		<div class="row" v-for="story in stories" :key="story.name">
			<story
				:img="story.img"
				:name="story.name"
				:title="story.title"
				:text="story.text"
			/>
		</div>
		<div class="u-center-text u-margin-bottom-huge">
			<a href="#" class="btn-text">Read all stories &rarr;</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: "StoriesSection",
		data() {
			return {
				stories: [
					{
						img: require("../../assets/images/nat-8.jpg"),
						name: "Mary Smith",
						title: "I had the best week ever with my family",
						text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe.
																									Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
																									similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
																									magni repellendus et in consequuntur necessitatibus, ipsam odit minima`
					},
					{
						img: require("../../assets/images/nat-8.jpg"),
						name: "Jack Wilson",
						title: "Wow my life is completely different now",
						text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe.
																				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
																									similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
																									magni repellendus et in consequuntur necessitatibus, ipsam odit minima`
					}
				]
			};
		}
	};
</script>