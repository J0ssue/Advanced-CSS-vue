<template>
	<footer class="footer">
		<div class="footer__logo-box">
			<img
				src="@/assets/images/logo-green-2x.png"
				alt="full logo"
				class="footer__logo"
			/>
		</div>

		<div class="row">
			<div class="col-1-of-2">
				<div class="footer__navigation">
					<ul class="footer__list">
						<li class="footer__item">
							<a href="#" class="footer__link">Company</a>
						</li>
						<li class="footer__item">
							<a href="#" class="footer__link">Contact us</a>
						</li>
						<li class="footer__item">
							<a href="#" class="footer__link"></a>
						</li>
						<li class="footer__item">
							<a href="#" class="footer__link">Company</a>
						</li>
						<li class="footer__item">
							<a href="#" class="footer__link">Company</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-1-of-2"></div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "DefaultFooter"
	};
</script>