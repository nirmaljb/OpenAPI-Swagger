/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param id
     * @returns any Retrive the user
     * @throws ApiError
     */
    public static getUsers(
        id: string,
    ): CancelablePromise<{
        id: string;
        name: string;
        age: User;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'id': id,
            },
        });
    }
}
