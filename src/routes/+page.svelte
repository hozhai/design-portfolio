<script lang="ts">
	import './blog/[blogId]/page.css';

	import CarouselHome from '@/components/CarouselHome.svelte';

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	import Introduction from '@/mdx/intro.md';
	import Hero from '@/sections/Hero.svelte';
	import Footer from '@/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Zhai Portfolio</title>
</svelte:head>

<Hero />

<section class="bg-base-200 p-18" id="intro">
	<h2 class="text-6xl">
		<span class="text-stone-500">| </span>
		<span class="underline">Introduction</span>
	</h2>
	<div class="mt-10 flex justify-between">
		<div class="w-1/2 space-y-8 text-xl">
			<p>
				Hi! I'm legally Fanhongmeng Zhai Fan, actually Hongmeng Zhai, technically <br />翟洪蒙,
				usually just Zhai, and I go by he/him/they/them :)
			</p>
			<p>
				I'm a sophomore at Nido, and I've been here since 9th grade! Before that I was previously in
				2 other Chilean schools. I've been living in Chile since 2012, and I'm orignally from China,
				Shandong!
			</p>
			<p>
				As you may have noticed, I'm a massive coding nerd! I've been tinkering with computers since
				the age of 3, and at that point had already learned to type. In 2021, I received my first
				coding certificate from John Hopkin's Introduction to Web Development course on Coursera!
			</p>
			<p>
				Other than coding, I like biking, playing tennis, singing, photography, and playing guitar
				along with my saxophone! I've been having a lot of motivation to get into poetry recently,
				and I'm loving it so far (thank youuu Emiliaaa) &lt;333
			</p>
			<span class="text-lg">
				<Introduction />
			</span>
		</div>
		<div class="w-[48%]">
			<CarouselHome />
			<div class="chat chat-start mt-5 text-xl">
				<div class="chat-bubble italic">
					"Moving on, is a simple thing, what it leaves behind is hard."<br /> - Dave Mustaine
				</div>
			</div>
			<div class="chat chat-end mt-5 text-xl">
				<div class="chat-bubble italic">
					"There is always some madness in love. But there is also always some reason in madness." <br
					/>- Friedrich Nietzsche
				</div>
			</div>
			<div class="chat chat-start mt-5 text-xl">
				<div class="chat-bubble italic">
					"Children aren't coloring books. You don't get to fill them with your favorite colors." <br
					/> - Khalid Hosseini
				</div>
			</div>
			<div class="chat chat-end mt-5 text-xl">
				<div class="chat-bubble italic">
					"You cannot kill me in a way that matters." <br /> - some random person on Tumblr
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
