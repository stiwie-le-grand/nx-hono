import * as HttpStatusCodes from '../../lib/httpStatusCodes';
import * as HttpStatusPhrases from '../../lib/httpStatusPhrases';
import { createRoute, z } from '@hono/zod-openapi';
import {
  jsonContent,
  multipleItemsResponseSchema,
  serverErrorSchema,
  singleItemResponseSchema,
} from '../../lib/schemas/returnSchema';

export const getColors = createRoute({
  method: 'get',
  tags: ['Colors'],
  request: {
    params: z.object({}),
  },
  description: 'Retrieve a list of design system colors',
  summary: 'Get available colors',
  path: '/api/colors',
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
      'List of available colors'
    ),
  },
});

export const getColor = createRoute({
  method: 'get',
  tags: ['Colors'],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  description: 'Retrieve a specific color by ID',
  summary: 'Get color by ID',
  path: '/api/colors/{id}',
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      singleItemResponseSchema(
        z.object({
          id: z.number(),
          name: z.string(),
          hexValue: z.string(),
          rgbValue: z.string(),
          category: z.string(),
          usage: z.string().optional(),
        })
      ),
      'Color details'
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      serverErrorSchema,
      HttpStatusPhrases.NOT_FOUND
    ),
  },
});
