/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Movie } from '../models/Movie';
import type { MovieCreate } from '../models/MovieCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MflixService {

    /**
     * Find One By Year
     * @returns Movie Successful Response
     * @throws ApiError
     */
    public static findOneByYear({
        year,
    }: {
        year: number,
    }): CancelablePromise<Movie> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mflix/find_one/{year}',
            path: {
                'year': year,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Find Multiple By Year
     * @returns Movie Successful Response
     * @throws ApiError
     */
    public static findMultipleByYear({
        year,
    }: {
        year: number,
    }): CancelablePromise<Array<Movie>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mflix/find_multiple/{year}',
            path: {
                'year': year,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create One
     * @returns string Successful Response
     * @throws ApiError
     */
    public static createOne({
        requestBody,
    }: {
        requestBody: MovieCreate,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mflix/create_one',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Replace One By Id
     * @returns string Successful Response
     * @throws ApiError
     */
    public static replaceOneById({
        requestBody,
    }: {
        requestBody: Movie,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mflix/replace_one_by_id',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete One By Id
     * @returns string Successful Response
     * @throws ApiError
     */
    public static deleteOneById({
        requestBody,
    }: {
        requestBody: Movie,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mflix/delete_one_by_id',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
