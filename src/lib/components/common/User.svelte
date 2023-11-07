<script lang="ts">
	import type { UserType } from '$lib/graphql/generated';
	import { Avatar, Hr } from 'flowbite-svelte';
	import { twMerge } from 'tailwind-merge';

	let klass = '';
	export { klass as class };
	export let user: UserType;
	export let label: string | undefined = undefined;

	let name =
		user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'The Geotech Team';
</script>

<div class={twMerge('border border-black/10 w-fit rounded-md overflow-hidden', klass)}>
	{#if label}
		<p class="px-2 m-0 font-medium text-black/80 bg-black/5 w-full">{label}</p>
	{/if}
	<Hr hrClass="my-0" />
	<div class="flex items-center font-medium gap-2 p-1 text-lg text-black/70">
		<Avatar src={user.profile.image?.url} border />
		<span>{name}</span>
	</div>
</div>
