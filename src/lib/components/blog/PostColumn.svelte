<script lang="ts">
	import type { PostType } from '$lib/graphql/generated';
	import { Button, Card, Heading, P } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { twMerge } from 'tailwind-merge';

	let klass = '';
	export { klass as class };

	export let posts: PostType[];
	function makeSlug(title: string, id: number): string {
		let slug = title.split(' ').join('-').toLowerCase();
		return `/blog/${id}-${slug}`;
	}
</script>

<ul class={twMerge('grid grid-cols-1 h-fit gap-3 m-2 place-items-center', klass)}>
	{#each posts as post}
		<Card class="max-h-fit mt-2 h-fit overflow-hidden" img={post.coverPhoto?.url} size="md">
			<Heading tag="h5" class="mb-2">{post.title}</Heading>
			<P class="line-clamp-3 my-2 mb-3">{post.abstract}</P>
			<Button href={makeSlug(post.title, post.id)}>
				Read More <ArrowRightOutline />
			</Button>
		</Card>
	{/each}
</ul>
