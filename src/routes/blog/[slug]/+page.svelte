<script lang="ts">
	import { Heading, Hr, Img } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import Page from '$lib/components/common/Page.svelte';
	import Article from '$lib/components/blog/Article.svelte';
	import User from '$lib/components/common/User.svelte';

	export let data;
</script>

{#if $page.error}
	<div>{$page.error.message}</div>
{/if}
<Page class="lg:px-44 p-10">
	<Article>
		<Heading class="mb-4" tag="h1">{data.post.title}</Heading>
		<Img class="rounded-lg" src={data.post.coverPhoto?.url} />
		<div>
			<User user={data.post.author} label="Author" class="mt-4" />
		</div>
		<Hr />
		<div class="md:text-lg text-black/80">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.post.body}
		</div>
	</Article>
</Page>
