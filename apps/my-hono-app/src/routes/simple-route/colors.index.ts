import { createPartialApp } from '../../lib/createApp';
import * as handlers from './colors.handlers';
import * as routes from './colors.routes';

const router = createPartialApp();
router.openapi(routes.getColors, handlers.getColors);
router.openapi(routes.getColor, handlers.getColor);

export const colorsRouter = router;
