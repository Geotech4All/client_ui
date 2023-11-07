<script>
	import '../app.postcss';
	import GraphqlClient from '$lib/graphql/GraphqlClient.svelte';
</script>

<GraphqlClient>
	<slot />
</GraphqlClient>

<style>
	@import '../globalStyles.css';
</style>
