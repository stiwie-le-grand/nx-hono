import { createPartialApp } from '../../lib/createApp';
import { ColorsController } from './controllers/colors.controller';
import { getColors } from './colors.routes';

const colorsController = new ColorsController();

const router = createPartialApp();
router.openapi(getColors, colorsController.getColors);

export const advancedColorsRouter = router;
