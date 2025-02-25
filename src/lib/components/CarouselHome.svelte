<script lang="ts">
	import bio_1 from '$lib/assets/bio_1.webp?enhanced';
	import bio_2 from '$lib/assets/bio_2.webp?enhanced';
	import bio_3 from '$lib/assets/bio_3.webp?enhanced';
	import bio_4 from '$lib/assets/bio_4.webp?enhanced';

	let { classes = '' } = $props();
</script>

<div class="carousel {classes}">
	<div id="slide1" class="carousel-item relative w-full">
		<enhanced:img src={bio_1} alt="SAAC STEM Winner Team!" />
		<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
			<a href="#slide4" class="btn btn-circle">❮</a>
			<a href="#slide2" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide2" class="carousel-item relative w-full">
		<enhanced:img src={bio_2} alt="Concert Band Presentation" class="w-full" />
		<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide3" class="carousel-item relative w-full">
		<enhanced:img src={bio_3} alt="Me & Milita on Valentine's Day!" class="w-full" />
		<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide4" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide4" class="carousel-item relative w-full">
		<enhanced:img src={bio_4} alt="Also me & Milita on Valentine's Day! Ehehehe" class="w-full" />
		<div class="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
			<a href="#slide3" class="btn btn-circle">❮</a>
			<a href="#slide1" class="btn btn-circle">❯</a>
		</div>
	</div>
</div>
