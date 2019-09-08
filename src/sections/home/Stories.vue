<template>
	<section class="section-stories">
		<background-video :mp4="video[0]" :webm="video[1]"></background-video>
		<header class="u-center-text u-margin-bottom-big">
			<heading-secondary
				text="We make people genuinely happy"
			></heading-secondary>
		</header>
		<div class="row" v-for="story in stories" :key="story.avatar">
			<story
				:caption="story.caption"
				:avatar="story.avatar"
				:text="story.text"
				:title="story.title"
			/>
		</div>
		<div class="u-center-text u-margin-top-huge">
			<a href="#" class="btn-text">Read all stories &rarr;</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: "StoriesSection",
		data() {
			return {
				video: [
					require("@/assets/videos/video.mp4"),
					require("@/assets/videos/video.webm")
				],
				stories: [
					{
						title: "I had the best week ever with my family",
						caption: "Mary Smith",
						avatar: require("@/assets/images/nat-8.jpg"),
						text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni repellendus et in consequuntur necessitatibus, ipsam odit minima`
					},
					{
						title: "Wow my life is completely different now",
						caption: "Jack Wilson",
						avatar: require("@/assets/images/nat-9.jpg"),
						text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni repellendus et in consequuntur necessitatibus, ipsam odit minima`
					}
				]
			};
		}
	};
</script>