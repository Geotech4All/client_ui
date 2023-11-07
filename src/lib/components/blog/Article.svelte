<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let klass = '';
	export { klass as class };
</script>

<div class={twMerge('shadow-none', klass)}>
	<slot />
</div>
