import * as HttpStatusCodes from "../../lib/httpStatusCodes";
import * as HttpStatusPhrases from "../../lib/httpStatusPhrases";
import { createRoute, z } from "@hono/zod-openapi";
import {
  jsonContent,
  multipleItemsResponseSchema,
  serverErrorSchema,
} from "../../lib/schemas/returnSchema";

export const getColors = createRoute({
  method: "get",
  tags: ["Colors"],
  request: {
    params: z.object({}),
  },
  description: "Retrieve a list of color palettes for design systems",
  summary: "Get available color palettes",
  path: "/api/colors",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      multipleItemsResponseSchema(
        z.object({
          id: z.number(),
          name: z.string(),
          hexValue: z.string(),
          rgbValue: z.string(),
          category: z.string(),
          usage: z.string().optional(),
        })
      ),
      "List of available colors"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      serverErrorSchema,
      HttpStatusPhrases.INTERNAL_SERVER_ERROR
    ),
  },
});
