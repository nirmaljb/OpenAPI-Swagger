import { z } from "@hono/zod-openapi";

export const querySchema = z.object({
    id: z.string().min(1).max(10).openapi({
      param: {
        name: 'id',
        in: 'query'
      },
      example: 'abc123',
    }),
});

export const UserSchema = z.object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'Nirmal'
    }),
    age: z.number().openapi({
      example: 18
    })
    .openapi('User')
});