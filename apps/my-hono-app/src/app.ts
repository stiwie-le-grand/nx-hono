import { cors } from 'hono/cors';
import { createPartialApp } from './lib/createApp';
import { configureOpenAPI } from './lib/open-api';
import { colorsRouter } from './routes/simple-route/colors.index';
import { advancedColorsRouter } from './routes/advanced-route/colors.index';

const app = createPartialApp();

/* CRITICAL-TODO: DONT DO THIS IN PROD!! MAKE SURE TO USE SECURE CORS SETTINGS! */
app.use('/*', cors());

// configure the OpenAPI docs
configureOpenAPI(app);

// Attach routes to main router's root path, it could also be attached to /api
const routes = [colorsRouter /* advancedColorsRouter */];
routes.forEach((route) => app.route('/', route));

export default app;
