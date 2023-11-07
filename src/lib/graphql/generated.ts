/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	Upload: { input: any; output: any };
	Void: { input: any; output: any };
};

export type Auth = {
	__typename?: 'Auth';
	refreshToken: Scalars['String']['output'];
	token: Scalars['String']['output'];
	user?: Maybe<UserType>;
};

export type AuthSuccess = {
	__typename?: 'AuthSuccess';
	data: Auth;
	success: Scalars['Boolean']['output'];
};

export type FileFilter = {
	description?: InputMaybe<Scalars['String']['input']>;
	descriptionContains?: InputMaybe<Scalars['String']['input']>;
	folder?: InputMaybe<FileFolderType>;
	name?: InputMaybe<Scalars['String']['input']>;
	nameContains?: InputMaybe<Scalars['String']['input']>;
};

export type FileFilterPaginated = {
	filter?: InputMaybe<FileFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export enum FileFolderType {
	Blog = 'BLOG',
	General = 'GENERAL',
	Opportunity = 'OPPORTUNITY',
	Podcast = 'PODCAST',
	Profile = 'PROFILE'
}

export type FileInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	file?: InputMaybe<Scalars['Upload']['input']>;
	folder?: InputMaybe<FileFolderType>;
	id?: InputMaybe<Scalars['Int']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type FileType = {
	__typename?: 'FileType';
	dateAdded: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	name: Scalars['String']['output'];
	publicId: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export type FileTypeListListData = {
	__typename?: 'FileTypeListListData';
	data: Array<FileType>;
	total: Scalars['Int']['output'];
};

export type FileTypeSuccess = {
	__typename?: 'FileTypeSuccess';
	data: FileType;
	success: Scalars['Boolean']['output'];
};

export type GuestUserInput = {
	bio?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	imageId?: InputMaybe<Scalars['Int']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type GuestUserType = {
	__typename?: 'GuestUserType';
	bio?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	image?: Maybe<ImageType>;
	name: Scalars['String']['output'];
};

export type GuestUserTypeSuccess = {
	__typename?: 'GuestUserTypeSuccess';
	data: GuestUserType;
	success: Scalars['Boolean']['output'];
};

export type ImageFilter = {
	description?: InputMaybe<Scalars['String']['input']>;
	descriptionContains?: InputMaybe<Scalars['String']['input']>;
	folder?: InputMaybe<FileFolderType>;
};

export type ImageFilterPaginated = {
	filter?: InputMaybe<ImageFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageType = {
	__typename?: 'ImageType';
	dateAdded: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	publicId: Scalars['String']['output'];
	url: Scalars['String']['output'];
};

export type ImageTypeListListData = {
	__typename?: 'ImageTypeListListData';
	data: Array<ImageType>;
	total: Scalars['Int']['output'];
};

export type ImageTypeSuccess = {
	__typename?: 'ImageTypeSuccess';
	data: ImageType;
	success: Scalars['Boolean']['output'];
};

export type Mutation = {
	__typename?: 'Mutation';
	completePasswordChange: NoneTypeSuccess;
	createUpdateFile: FileTypeSuccess;
	createUpdateGuestUser: GuestUserTypeSuccess;
	createUpdateImage: ImageTypeSuccess;
	createUpdateOpportunity: OpportunityTypeSuccess;
	createUpdatePodcast: PodcastTypeSuccess;
	createUpdatePost: PostTypeSuccess;
	createUpdateTag: TagTypeSuccess;
	delete: NoneTypeSuccess;
	deleteFile: NoneTypeSuccess;
	deleteImage: NoneTypeSuccess;
	deletePodcast: NoneTypeSuccess;
	deletePost: NoneTypeSuccess;
	deleteTag: NoneTypeSuccess;
	increasePodcastListen: NoneTypeSuccess;
	increasePostViews: NoneTypeSuccess;
	initiatePasswordChange: NoneTypeSuccess;
	newStaff: StaffTypeSuccess;
	refreshToken: AuthSuccess;
	register: AuthSuccess;
	tokenAuth: AuthSuccess;
	updateProfile: ProfileTypeSuccess;
	updateStaffPermissions: StaffTypeSuccess;
};

export type MutationCompletePasswordChangeArgs = {
	input: PasswordResetInput;
};

export type MutationCreateUpdateFileArgs = {
	input: FileInput;
};

export type MutationCreateUpdateGuestUserArgs = {
	input: GuestUserInput;
};

export type MutationCreateUpdateImageArgs = {
	input: FileInput;
};

export type MutationCreateUpdateOpportunityArgs = {
	input: OpportunityInput;
};

export type MutationCreateUpdatePodcastArgs = {
	input: PodcastInput;
};

export type MutationCreateUpdatePostArgs = {
	input: PostInput;
};

export type MutationCreateUpdateTagArgs = {
	input: TagInput;
};

export type MutationDeleteArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeleteFileArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeleteImageArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeletePodcastArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeletePostArgs = {
	id: Scalars['Int']['input'];
};

export type MutationDeleteTagArgs = {
	id: Scalars['Int']['input'];
};

export type MutationIncreasePodcastListenArgs = {
	id: Scalars['Int']['input'];
};

export type MutationIncreasePostViewsArgs = {
	id: Scalars['Int']['input'];
};

export type MutationInitiatePasswordChangeArgs = {
	email: Scalars['String']['input'];
};

export type MutationNewStaffArgs = {
	email: Scalars['String']['input'];
};

export type MutationRefreshTokenArgs = {
	refreshToken: Scalars['String']['input'];
};

export type MutationRegisterArgs = {
	input: RegisterInput;
};

export type MutationTokenAuthArgs = {
	email: Scalars['String']['input'];
	password: Scalars['String']['input'];
};

export type MutationUpdateProfileArgs = {
	input: ProfileInput;
};

export type MutationUpdateStaffPermissionsArgs = {
	input: StaffInput;
};

export type NoneTypeSuccess = {
	__typename?: 'NoneTypeSuccess';
	data?: Maybe<Scalars['Void']['output']>;
	success: Scalars['Boolean']['output'];
};

export type OpportunityFilter = {
	contentContains?: InputMaybe<Scalars['String']['input']>;
	descriptionContains?: InputMaybe<Scalars['String']['input']>;
	orderBy: Array<OpportunityOrdering>;
	titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type OpportunityFilterPaginated = {
	filter?: InputMaybe<OpportunityFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OpportunityInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	coverPhotoId?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export enum OpportunityOrdering {
	DateAdded = 'DATE_ADDED',
	LastUpdated = 'LAST_UPDATED'
}

export type OpportunityType = {
	__typename?: 'OpportunityType';
	content?: Maybe<Scalars['String']['output']>;
	dateAdded: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	lastUpdated: Scalars['DateTime']['output'];
	title: Scalars['String']['output'];
};

export type OpportunityTypeListListData = {
	__typename?: 'OpportunityTypeListListData';
	data: Array<OpportunityType>;
	total: Scalars['Int']['output'];
};

export type OpportunityTypeSuccess = {
	__typename?: 'OpportunityTypeSuccess';
	data: OpportunityType;
	success: Scalars['Boolean']['output'];
};

export type PasswordResetInput = {
	password1: Scalars['String']['input'];
	password2: Scalars['String']['input'];
	resetKey: Scalars['String']['input'];
};

export type PodcastFilter = {
	descriptionContains?: InputMaybe<Scalars['String']['input']>;
	orderBy: Array<PodcastOrdering>;
	titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastFilterPaginated = {
	filter?: InputMaybe<PodcastFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PodcastInput = {
	audioId?: InputMaybe<Scalars['Int']['input']>;
	coverPhotoId?: InputMaybe<Scalars['Int']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	listen?: InputMaybe<Scalars['Boolean']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export enum PodcastOrdering {
	DateAdded = 'DATE_ADDED',
	LastUpdated = 'LAST_UPDATED',
	Listens = 'LISTENS'
}

export type PodcastType = {
	__typename?: 'PodcastType';
	audio: FileType;
	coverPhoto?: Maybe<ImageType>;
	dateAdded: Scalars['DateTime']['output'];
	description: Scalars['String']['output'];
	id: Scalars['Int']['output'];
	lastUpdated: Scalars['DateTime']['output'];
	listens: Scalars['Int']['output'];
	title: Scalars['String']['output'];
};

export type PodcastTypeListListData = {
	__typename?: 'PodcastTypeListListData';
	data: Array<PodcastType>;
	total: Scalars['Int']['output'];
};

export type PodcastTypeSuccess = {
	__typename?: 'PodcastTypeSuccess';
	data: PodcastType;
	success: Scalars['Boolean']['output'];
};

export type PostFilter = {
	abstractContains?: InputMaybe<Scalars['String']['input']>;
	bodyContains?: InputMaybe<Scalars['String']['input']>;
	orderBy: Array<PostOrderings>;
	titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type PostFilterPaginated = {
	filter?: InputMaybe<PostFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PostInput = {
	abstract?: InputMaybe<Scalars['String']['input']>;
	authorId?: InputMaybe<Scalars['Int']['input']>;
	body?: InputMaybe<Scalars['String']['input']>;
	coverPhotoId?: InputMaybe<Scalars['Int']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export enum PostOrderings {
	DateAdded = 'DATE_ADDED',
	LastUpdated = 'LAST_UPDATED',
	ReadLength = 'READ_LENGTH',
	Views = 'VIEWS'
}

export type PostType = {
	__typename?: 'PostType';
	abstract?: Maybe<Scalars['String']['output']>;
	author: UserType;
	body: Scalars['String']['output'];
	coverPhoto?: Maybe<ImageType>;
	dateAdded: Scalars['DateTime']['output'];
	id: Scalars['Int']['output'];
	lastUpdated: Scalars['DateTime']['output'];
	readLength?: Maybe<Scalars['Float']['output']>;
	title: Scalars['String']['output'];
	views: Scalars['Int']['output'];
};

export type PostTypeListListData = {
	__typename?: 'PostTypeListListData';
	data: Array<PostType>;
	total: Scalars['Int']['output'];
};

export type PostTypeSuccess = {
	__typename?: 'PostTypeSuccess';
	data: PostType;
	success: Scalars['Boolean']['output'];
};

export type ProfileInput = {
	about?: InputMaybe<Scalars['String']['input']>;
	firstName?: InputMaybe<Scalars['String']['input']>;
	id: Scalars['Int']['input'];
	imageId?: InputMaybe<Scalars['Int']['input']>;
	lastName?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileType = {
	__typename?: 'ProfileType';
	about?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	image?: Maybe<ImageType>;
	user: UserType;
};

export type ProfileTypeSuccess = {
	__typename?: 'ProfileTypeSuccess';
	data: ProfileType;
	success: Scalars['Boolean']['output'];
};

export type Query = {
	__typename?: 'Query';
	file: FileType;
	files: FileTypeListListData;
	image: ImageType;
	images: ImageTypeListListData;
	me?: Maybe<UserType>;
	opportunities: OpportunityTypeListListData;
	opportunity: OpportunityType;
	podcast: PodcastType;
	podcasts: PodcastTypeListListData;
	post: PostType;
	posts: PostTypeListListData;
	staff: StaffType;
	staffList: StaffTypeListListData;
	tags: TagTypeListListData;
	user?: Maybe<UserType>;
	users: Array<UserType>;
	version: Scalars['String']['output'];
};

export type QueryFileArgs = {
	id: Scalars['Int']['input'];
};

export type QueryFilesArgs = {
	input: FileFilterPaginated;
};

export type QueryImageArgs = {
	id: Scalars['Int']['input'];
};

export type QueryImagesArgs = {
	input: ImageFilterPaginated;
};

export type QueryOpportunitiesArgs = {
	input: OpportunityFilterPaginated;
};

export type QueryOpportunityArgs = {
	id: Scalars['Int']['input'];
};

export type QueryPodcastArgs = {
	id: Scalars['Int']['input'];
};

export type QueryPodcastsArgs = {
	input: PodcastFilterPaginated;
};

export type QueryPostArgs = {
	id: Scalars['Int']['input'];
};

export type QueryPostsArgs = {
	input: PostFilterPaginated;
};

export type QueryStaffArgs = {
	id: Scalars['Int']['input'];
};

export type QueryStaffListArgs = {
	input: StaffFilterPaginated;
};

export type QueryTagsArgs = {
	input: TagFilterPaginated;
};

export type QueryUserArgs = {
	id: Scalars['Int']['input'];
};

export type RegisterInput = {
	email: Scalars['String']['input'];
	password1: Scalars['String']['input'];
	password2: Scalars['String']['input'];
};

export type StaffFilter = {
	assetPermissions: Array<StaffPermissions>;
	opportunityPermissions: Array<StaffPermissions>;
	orderBy: Array<StaffOrdering>;
	podcastPermissions: Array<StaffPermissions>;
	postPermissions: Array<StaffPermissions>;
	userPermissions: Array<StaffPermissions>;
};

export type StaffFilterPaginated = {
	filter?: InputMaybe<StaffFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type StaffInput = {
	addAssetPermisions?: InputMaybe<Array<StaffPermissions>>;
	addOpportunityPermision?: InputMaybe<Array<StaffPermissions>>;
	addPodcastPermissions?: InputMaybe<Array<StaffPermissions>>;
	addPostPermissions?: InputMaybe<Array<StaffPermissions>>;
	addUserPermissions?: InputMaybe<Array<StaffPermissions>>;
	id: Scalars['Int']['input'];
	removeAssetPermisions?: InputMaybe<Array<StaffPermissions>>;
	removeOpportunityPermision?: InputMaybe<Array<StaffPermissions>>;
	removePodcastPermissions?: InputMaybe<Array<StaffPermissions>>;
	removePostPermissions?: InputMaybe<Array<StaffPermissions>>;
	removeUserPermissions?: InputMaybe<Array<StaffPermissions>>;
};

export enum StaffOrdering {
	DateJoined = 'DATE_JOINED'
}

export enum StaffPermissions {
	Create = 'CREATE',
	Delete = 'DELETE',
	Update = 'UPDATE'
}

export type StaffType = {
	__typename?: 'StaffType';
	assetPermissions: Array<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	opportunityPermissions: Array<Scalars['String']['output']>;
	podcastPermissions: Array<Scalars['String']['output']>;
	postPermissions: Array<Scalars['String']['output']>;
	user: UserType;
	userPermissions: Array<Scalars['String']['output']>;
};

export type StaffTypeListListData = {
	__typename?: 'StaffTypeListListData';
	data: Array<StaffType>;
	total: Scalars['Int']['output'];
};

export type StaffTypeSuccess = {
	__typename?: 'StaffTypeSuccess';
	data: StaffType;
	success: Scalars['Boolean']['output'];
};

export type TagFilter = {
	descriptionContains?: InputMaybe<Scalars['String']['input']>;
	titleContains?: InputMaybe<Scalars['String']['input']>;
};

export type TagFilterPaginated = {
	filter?: InputMaybe<TagFilter>;
	limit?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TagInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['Int']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type TagType = {
	__typename?: 'TagType';
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	title: Scalars['String']['output'];
};

export type TagTypeListListData = {
	__typename?: 'TagTypeListListData';
	data: Array<TagType>;
	total: Scalars['Int']['output'];
};

export type TagTypeSuccess = {
	__typename?: 'TagTypeSuccess';
	data: TagType;
	success: Scalars['Boolean']['output'];
};

export type UserType = {
	__typename?: 'UserType';
	email: Scalars['String']['output'];
	firstName?: Maybe<Scalars['String']['output']>;
	fullName?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	lastName?: Maybe<Scalars['String']['output']>;
	profile: ProfileType;
	staff?: Maybe<StaffType>;
	username?: Maybe<Scalars['String']['output']>;
};
