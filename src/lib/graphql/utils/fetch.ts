import type { DocumentNode } from 'graphql';
import { PUBLIC_GRAPHQL_ENDPOINT } from '$env/static/public';

export async function graphqlQuery<VariableType = unknown, ReturnType = unknown>(
	fetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>,
	query: DocumentNode,
	variables?: VariableType
): Promise<{ data: ReturnType }> {
	const fetchBody = query.loc?.source.body;

	const res = await fetch(PUBLIC_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: fetchBody,
			variables
		})
	});
	if (res.ok) {
		const json = await res.json();
		if (json satisfies { data: ReturnType }) {
			return json;
		} else {
			throw new Error(`${json} does not match ReturnType`);
		}
	} else {
		throw new Error(`Failed to fetch resource: ${res.statusText}`);
	}
}
