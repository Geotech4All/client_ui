<script lang="ts">
	import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';
	import { Client, cacheExchange, fetchExchange, setContextClient } from '@urql/svelte';
	const client = new Client({
		url: PUBLIC_GRAPHQL_ENDPOINT,
		exchanges: [cacheExchange, fetchExchange]
	});

	setContextClient(client);
</script>

<slot />
