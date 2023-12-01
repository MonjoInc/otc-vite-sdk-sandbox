/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthCheck } from '../models/HealthCheck';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthCheckService {

    /**
     * AWS ALB and Target Group HealthCheck endpoint
     * @returns HealthCheck Successful Response
     * @throws ApiError
     */
    public static getRoot(): CancelablePromise<HealthCheck> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

}
