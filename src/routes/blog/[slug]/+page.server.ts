import type { PostType, QueryPostArgs } from '$lib/graphql/generated';
import { POST } from '$lib/graphql/requests/queries';
import { graphqlQuery } from '$lib/graphql/utils/fetch';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const postId = parseInt(params.slug.split('-')[0]);
	const data = await graphqlQuery<QueryPostArgs, { post: PostType }>(fetch, POST, { id: postId });
	return data.data;
};
