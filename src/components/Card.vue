<template>
	<div class="card">
		<div class="card__side card__side--front">
			<div
				class="card__picture"
				:class="{
					'card__picture--1': index === 0,
					'card__picture--2': index === 1,
					'card__picture--3': index === 2
				}"
			>
				&nbsp;
			</div>
			<h4 class="card__heading">
				<span
					class="card__heading-span"
					:class="{
						'card__heading-span--1': index === 0,
						'card__heading-span--2': index === 1,
						'card__heading-span--3': index === 2
					}"
					v-text="card.title"
				></span>
			</h4>
			<div class="card__details">
				<ul>
					<li
						v-for="(detail, index) in card.details"
						:key="index"
						v-text="detail"
					></li>
				</ul>
			</div>
		</div>
		<div
			class="card__side card__side--back card__side--back-1"
			:class="{
				'card__side--back-1': index === 0,
				'card__side--back-2': index === 1,
				'card__side--back-3': index === 2
			}"
		>
			<div class="card__cta">
				<div class="card__price-box">
					<p class="card__price-only">Only</p>
					<div class="card__price-value" v-text="card.price"></div>
				</div>
				<a href="#" class="btn btn--white">book now!</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			card: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		name: "Card"
	};
</script>