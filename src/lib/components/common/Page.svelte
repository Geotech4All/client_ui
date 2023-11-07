<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let klass = '';
	export { klass as class };
</script>

<main class={twMerge('w-full max-w-[100vw] overflow-hidden', klass)}>
	<slot />
</main>
