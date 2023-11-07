<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
</script>

<div
	class="flex flex-col lg:flex-row gap-4 w-full items-center p-4 relative z-0 py-20 overflow-hidden"
>
	<img src="/street_map.svg" class="z-[-100] top-0 right-0 w-[80%] absolute" alt="sreet map" />
	<div class="absolute inset-0 z-[-50] radial" />
	<Heading tag="h1" class="flex-1 text-4xl font-medium">
		Redefining <span class="font-extrabold md:text-7xl text-4xl">Geology</span>
		with<br /><span class="font-extrabold md:text-8xl text-4xl">Technology</span>
	</Heading>
	<Img class="w-full max-w-2xl" src="/laptop.png" />
</div>

<style>
	.radial {
		background: radial-gradient(
			circle at 74% 21%,
			rgba(255, 255, 0, 0) 0%,
			rgba(255, 255, 255, 1) 43%,
			rgba(255, 255, 255, 1) 100%
		);
	}
</style>
