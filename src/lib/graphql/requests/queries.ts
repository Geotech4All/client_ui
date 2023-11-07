import { gql } from '@urql/svelte';

export const POSTS = gql`
	query Posts($input: PostFilterPaginated!) {
		posts(input: $input) {
			total
			data {
				id
				title
				abstract
				views
				readLength
				lastUpdated
				coverPhoto {
					id
					url
					description
				}
				author {
					id
					firstName
					lastName
					profile {
						id
						image {
							url
							description
							id
						}
					}
				}
			}
		}
	}
`;

export const POST = gql`
	query Post($id: Int!) {
		post(id: $id) {
			id
			title
			abstract
			body
			views
			readLength
			lastUpdated
			coverPhoto {
				id
				url
				description
			}
			author {
				firstName
				lastName
				profile {
					id
					image {
						id
						url
						description
					}
				}
			}
		}
	}
`;
