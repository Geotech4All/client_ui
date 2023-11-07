<script lang="ts">
	import type { PostTypeListListData, QueryPostsArgs } from '$lib/graphql/generated';
	import { POSTS } from '$lib/graphql/requests/queries';
	import { getContextClient, queryStore } from '@urql/svelte';
	import PostColumn from '../blog/PostColumn.svelte';
	import { CardPlaceholder, Heading, P } from 'flowbite-svelte';

	const posts = queryStore<{ posts: PostTypeListListData }, QueryPostsArgs>({
		client: getContextClient(),
		query: POSTS,
		variables: {
			input: { limit: 7 }
		}
	});
</script>

<div class="lg:px-20 p-3">
	<a href="/blog" class="mb-8">
		<P size="2xl">Our Blog</P>
		<Heading tag="h2">The Geotech Journal</Heading>
	</a>
	{#if $posts.fetching}
		<div class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
			{#each new Array(6).keys() as item (item)}
				<div>
					<CardPlaceholder size="sm" />
				</div>
			{/each}
		</div>
	{/if}
	{#if $posts.data?.posts.data}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
			<PostColumn posts={$posts.data?.posts.data.slice(1, 3)} />
			<PostColumn posts={$posts.data?.posts.data.slice(3, 5)} />
			<PostColumn class="hidden md:block" posts={$posts.data?.posts.data.slice(5, 7)} />
		</div>
	{/if}
</div>
