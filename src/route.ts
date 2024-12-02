import { createRoute } from "@hono/zod-openapi";
import { querySchema, UserSchema } from "./schemas";

export const route = createRoute({
    method: 'get',
    path: '/users',
    request: {
        query: querySchema,
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: UserSchema
                },
            },
            description: 'Retrive the user',
        },
    },
});

