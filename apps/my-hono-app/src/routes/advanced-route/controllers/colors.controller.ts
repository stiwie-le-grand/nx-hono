import { AppRouteHandler } from "../../../types/App";
import { getColors } from "../colors.routes";
import { ColorsService } from "../services/colors.service";

export class ColorsController {
  private colorsService: ColorsService;

  constructor() {
    this.colorsService = new ColorsService();
  }

  public getColors: AppRouteHandler<typeof getColors> = async (c) => {
    const result = await this.colorsService.getColors();
    return c.json({ items: result, message: "Colors fetched successfully" });
  };
}
