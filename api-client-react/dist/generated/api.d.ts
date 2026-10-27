import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { Application, ApplicationInput, ApplicationReceipt, ApplicationStatusInput, Committee, CommitteeInput, Conference, ConferenceDetail, ConferenceInput, ConferenceUpdate, Dashboard, HealthStatus, PublicationInput } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDashboardUrl: () => string;
/**
 * @summary Get live administrative dashboard totals
 */
export declare const getDashboard: (options?: Parameters<typeof customFetch>[1]) => Promise<Dashboard>;
export declare const getGetDashboardQueryKey: () => readonly ["/api/dashboard"];
export declare const getGetDashboardQueryOptions: <TData = Awaited<ReturnType<typeof getDashboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboard>>>;
export type GetDashboardQueryError = ErrorType<unknown>;
/**
 * @summary Get live administrative dashboard totals
 */
export declare function useGetDashboard<TData = Awaited<ReturnType<typeof getDashboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListConferencesUrl: () => string;
/**
 * @summary List conferences for authorized administrators
 */
export declare const listConferences: (options?: Parameters<typeof customFetch>[1]) => Promise<Conference[]>;
export declare const getListConferencesQueryKey: () => readonly ["/api/conferences"];
export declare const getListConferencesQueryOptions: <TData = Awaited<ReturnType<typeof listConferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listConferences>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListConferencesQueryResult = NonNullable<Awaited<ReturnType<typeof listConferences>>>;
export type ListConferencesQueryError = ErrorType<unknown>;
/**
 * @summary List conferences for authorized administrators
 */
export declare function useListConferences<TData = Awaited<ReturnType<typeof listConferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateConferenceUrl: () => string;
/**
 * @summary Create a conference draft
 */
export declare const createConference: (conferenceInput: ConferenceInput, options?: Parameters<typeof customFetch>[1]) => Promise<Conference>;
export declare const getCreateConferenceMutationKey: () => readonly ["createConference"];
export declare const getCreateConferenceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConference>>, TError, CreateConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createConference>>, TError, CreateConferenceMutationVariables, TContext>;
export type CreateConferenceMutationResult = NonNullable<Awaited<ReturnType<typeof createConference>>>;
export type CreateConferenceMutationBody = BodyType<ConferenceInput>;
export type CreateConferenceMutationError = ErrorType<unknown>;
export type CreateConferenceMutationVariables = {
    data: BodyType<ConferenceInput>;
};
/**
* @summary Create a conference draft
*/
export declare const useCreateConference: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConference>>, TError, CreateConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createConference>>, TError, CreateConferenceMutationVariables, TContext>;
export declare const getGetConferenceUrl: (id: number) => string;
/**
 * @summary Get an administrative conference record
 */
export declare const getConference: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<Conference>;
export declare const getGetConferenceQueryKey: (id: number) => readonly [`/api/conferences/${number}`];
export declare const getGetConferenceQueryOptions: <TData = Awaited<ReturnType<typeof getConference>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConference>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConference>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConferenceQueryResult = NonNullable<Awaited<ReturnType<typeof getConference>>>;
export type GetConferenceQueryError = ErrorType<unknown>;
/**
 * @summary Get an administrative conference record
 */
export declare function useGetConference<TData = Awaited<ReturnType<typeof getConference>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConference>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateConferenceUrl: (id: number) => string;
/**
 * @summary Update a conference
 */
export declare const updateConference: (id: number, conferenceUpdate: ConferenceUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Conference>;
export declare const getUpdateConferenceMutationKey: () => readonly ["updateConference"];
export declare const getUpdateConferenceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateConference>>, TError, UpdateConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateConference>>, TError, UpdateConferenceMutationVariables, TContext>;
export type UpdateConferenceMutationResult = NonNullable<Awaited<ReturnType<typeof updateConference>>>;
export type UpdateConferenceMutationBody = BodyType<ConferenceUpdate>;
export type UpdateConferenceMutationError = ErrorType<unknown>;
export type UpdateConferenceMutationVariables = {
    id: number;
    data: BodyType<ConferenceUpdate>;
};
/**
* @summary Update a conference
*/
export declare const useUpdateConference: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateConference>>, TError, UpdateConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateConference>>, TError, UpdateConferenceMutationVariables, TContext>;
export declare const getArchiveConferenceUrl: (id: number) => string;
/**
 * @summary Archive a conference
 */
export declare const archiveConference: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getArchiveConferenceMutationKey: () => readonly ["archiveConference"];
export declare const getArchiveConferenceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof archiveConference>>, TError, ArchiveConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof archiveConference>>, TError, ArchiveConferenceMutationVariables, TContext>;
export type ArchiveConferenceMutationResult = NonNullable<Awaited<ReturnType<typeof archiveConference>>>;
export type ArchiveConferenceMutationError = ErrorType<unknown>;
export type ArchiveConferenceMutationVariables = {
    id: number;
};
/**
* @summary Archive a conference
*/
export declare const useArchiveConference: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof archiveConference>>, TError, ArchiveConferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof archiveConference>>, TError, ArchiveConferenceMutationVariables, TContext>;
export declare const getSetConferencePublishedUrl: (id: number) => string;
/**
 * @summary Publish or unpublish a conference
 */
export declare const setConferencePublished: (id: number, publicationInput: PublicationInput, options?: Parameters<typeof customFetch>[1]) => Promise<Conference>;
export declare const getSetConferencePublishedMutationKey: () => readonly ["setConferencePublished"];
export declare const getSetConferencePublishedMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setConferencePublished>>, TError, SetConferencePublishedMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setConferencePublished>>, TError, SetConferencePublishedMutationVariables, TContext>;
export type SetConferencePublishedMutationResult = NonNullable<Awaited<ReturnType<typeof setConferencePublished>>>;
export type SetConferencePublishedMutationBody = BodyType<PublicationInput>;
export type SetConferencePublishedMutationError = ErrorType<unknown>;
export type SetConferencePublishedMutationVariables = {
    id: number;
    data: BodyType<PublicationInput>;
};
/**
* @summary Publish or unpublish a conference
*/
export declare const useSetConferencePublished: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setConferencePublished>>, TError, SetConferencePublishedMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setConferencePublished>>, TError, SetConferencePublishedMutationVariables, TContext>;
export declare const getListPublicConferencesUrl: () => string;
/**
 * @summary List published conferences
 */
export declare const listPublicConferences: (options?: Parameters<typeof customFetch>[1]) => Promise<Conference[]>;
export declare const getListPublicConferencesQueryKey: () => readonly ["/api/public/conferences"];
export declare const getListPublicConferencesQueryOptions: <TData = Awaited<ReturnType<typeof listPublicConferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPublicConferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPublicConferences>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPublicConferencesQueryResult = NonNullable<Awaited<ReturnType<typeof listPublicConferences>>>;
export type ListPublicConferencesQueryError = ErrorType<unknown>;
/**
 * @summary List published conferences
 */
export declare function useListPublicConferences<TData = Awaited<ReturnType<typeof listPublicConferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPublicConferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPublicConferenceUrl: (slug: string) => string;
/**
 * @summary Get a published conference page
 */
export declare const getPublicConference: (slug: string, options?: Parameters<typeof customFetch>[1]) => Promise<ConferenceDetail>;
export declare const getGetPublicConferenceQueryKey: (slug: string) => readonly [`/api/public/conferences/${string}`];
export declare const getGetPublicConferenceQueryOptions: <TData = Awaited<ReturnType<typeof getPublicConference>>, TError = ErrorType<unknown>>(slug: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicConference>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPublicConference>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPublicConferenceQueryResult = NonNullable<Awaited<ReturnType<typeof getPublicConference>>>;
export type GetPublicConferenceQueryError = ErrorType<unknown>;
/**
 * @summary Get a published conference page
 */
export declare function useGetPublicConference<TData = Awaited<ReturnType<typeof getPublicConference>>, TError = ErrorType<unknown>>(slug: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPublicConference>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCommitteesUrl: (id: number) => string;
/**
 * @summary List committees for a conference
 */
export declare const listCommittees: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<Committee[]>;
export declare const getListCommitteesQueryKey: (id: number) => readonly [`/api/conferences/${number}/committees`];
export declare const getListCommitteesQueryOptions: <TData = Awaited<ReturnType<typeof listCommittees>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCommittees>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCommittees>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCommitteesQueryResult = NonNullable<Awaited<ReturnType<typeof listCommittees>>>;
export type ListCommitteesQueryError = ErrorType<unknown>;
/**
 * @summary List committees for a conference
 */
export declare function useListCommittees<TData = Awaited<ReturnType<typeof listCommittees>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCommittees>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateCommitteeUrl: (id: number) => string;
/**
 * @summary Create a committee
 */
export declare const createCommittee: (id: number, committeeInput: CommitteeInput, options?: Parameters<typeof customFetch>[1]) => Promise<Committee>;
export declare const getCreateCommitteeMutationKey: () => readonly ["createCommittee"];
export declare const getCreateCommitteeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCommittee>>, TError, CreateCommitteeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCommittee>>, TError, CreateCommitteeMutationVariables, TContext>;
export type CreateCommitteeMutationResult = NonNullable<Awaited<ReturnType<typeof createCommittee>>>;
export type CreateCommitteeMutationBody = BodyType<CommitteeInput>;
export type CreateCommitteeMutationError = ErrorType<unknown>;
export type CreateCommitteeMutationVariables = {
    id: number;
    data: BodyType<CommitteeInput>;
};
/**
* @summary Create a committee
*/
export declare const useCreateCommittee: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCommittee>>, TError, CreateCommitteeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCommittee>>, TError, CreateCommitteeMutationVariables, TContext>;
export declare const getSubmitApplicationUrl: () => string;
/**
 * @summary Submit and persist a delegate application
 */
export declare const submitApplication: (applicationInput: ApplicationInput, options?: Parameters<typeof customFetch>[1]) => Promise<ApplicationReceipt>;
export declare const getSubmitApplicationMutationKey: () => readonly ["submitApplication"];
export declare const getSubmitApplicationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitApplication>>, TError, SubmitApplicationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitApplication>>, TError, SubmitApplicationMutationVariables, TContext>;
export type SubmitApplicationMutationResult = NonNullable<Awaited<ReturnType<typeof submitApplication>>>;
export type SubmitApplicationMutationBody = BodyType<ApplicationInput>;
export type SubmitApplicationMutationError = ErrorType<unknown>;
export type SubmitApplicationMutationVariables = {
    data: BodyType<ApplicationInput>;
};
/**
* @summary Submit and persist a delegate application
*/
export declare const useSubmitApplication: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitApplication>>, TError, SubmitApplicationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitApplication>>, TError, SubmitApplicationMutationVariables, TContext>;
export declare const getListApplicationsUrl: () => string;
/**
 * @summary List applications for authorized administrators
 */
export declare const listApplications: (options?: Parameters<typeof customFetch>[1]) => Promise<Application[]>;
export declare const getListApplicationsQueryKey: () => readonly ["/api/admin/applications"];
export declare const getListApplicationsQueryOptions: <TData = Awaited<ReturnType<typeof listApplications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listApplications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listApplications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListApplicationsQueryResult = NonNullable<Awaited<ReturnType<typeof listApplications>>>;
export type ListApplicationsQueryError = ErrorType<unknown>;
/**
 * @summary List applications for authorized administrators
 */
export declare function useListApplications<TData = Awaited<ReturnType<typeof listApplications>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listApplications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateApplicationUrl: (id: number) => string;
/**
 * @summary Update an application status
 */
export declare const updateApplication: (id: number, applicationStatusInput: ApplicationStatusInput, options?: Parameters<typeof customFetch>[1]) => Promise<Application>;
export declare const getUpdateApplicationMutationKey: () => readonly ["updateApplication"];
export declare const getUpdateApplicationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateApplication>>, TError, UpdateApplicationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateApplication>>, TError, UpdateApplicationMutationVariables, TContext>;
export type UpdateApplicationMutationResult = NonNullable<Awaited<ReturnType<typeof updateApplication>>>;
export type UpdateApplicationMutationBody = BodyType<ApplicationStatusInput>;
export type UpdateApplicationMutationError = ErrorType<unknown>;
export type UpdateApplicationMutationVariables = {
    id: number;
    data: BodyType<ApplicationStatusInput>;
};
/**
* @summary Update an application status
*/
export declare const useUpdateApplication: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateApplication>>, TError, UpdateApplicationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateApplication>>, TError, UpdateApplicationMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map