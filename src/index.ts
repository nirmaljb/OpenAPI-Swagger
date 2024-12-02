import { OpenAPIHono } from '@hono/zod-openapi'
import { route } from './route';
import { swaggerUI } from '@hono/swagger-ui';

const app = new OpenAPIHono()

interface Query {
  id: string
}

app.openapi(route, (c) => {
  const query: Query = c.req.valid("query");
  const { id } = query;
  return c.json({
    id,
    age: 18,
    name: 'Nirmal'
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'OpenAPI 1.0.1',
  },
})

app.get('/ui', swaggerUI({ url: '/doc' }))

export default app
