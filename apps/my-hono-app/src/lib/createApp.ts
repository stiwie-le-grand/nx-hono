import { OpenAPIHono } from '@hono/zod-openapi';
import { AppBindings } from '../types/App';

export function createPartialApp() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
  });
}
