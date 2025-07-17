import { AppRouteHandler } from '../../types/App';
import {
  getColors as getColorsRoute,
  getColor as getColorRoute,
} from './colors.routes';
import * as HttpStatusCodes from '../../lib/httpStatusCodes';

type Color = {
  id: number;
  name: string;
  hexValue: string;
  rgbValue: string;
  category: string;
  usage?: string;
};

// Professional color palette for corporate design systems
const DESIGN_COLORS: Color[] = [
  {
    id: 1,
    name: 'Primary Blue',
    hexValue: '#0066CC',
    rgbValue: 'rgb(0, 102, 204)',
    category: 'Primary',
    usage: 'Main brand color, primary buttons, links',
  },
  {
    id: 2,
    name: 'Secondary Gray',
    hexValue: '#6B7280',
    rgbValue: 'rgb(107, 114, 128)',
    category: 'Secondary',
    usage: 'Secondary text, borders, icons',
  },
  {
    id: 3,
    name: 'Success Green',
    hexValue: '#10B981',
    rgbValue: 'rgb(16, 185, 129)',
    category: 'Status',
    usage: 'Success messages, positive actions',
  },
  {
    id: 4,
    name: 'Warning Orange',
    hexValue: '#F59E0B',
    rgbValue: 'rgb(245, 158, 11)',
    category: 'Status',
    usage: 'Warning messages, caution states',
  },
  {
    id: 5,
    name: 'Error Red',
    hexValue: '#EF4444',
    rgbValue: 'rgb(239, 68, 68)',
    category: 'Status',
    usage: 'Error messages, destructive actions',
  },
  {
    id: 6,
    name: 'Neutral White',
    hexValue: '#FFFFFF',
    rgbValue: 'rgb(255, 255, 255)',
    category: 'Neutral',
    usage: 'Background, content areas',
  },
  {
    id: 7,
    name: 'Dark Charcoal',
    hexValue: '#1F2937',
    rgbValue: 'rgb(31, 41, 55)',
    category: 'Primary',
    usage: 'Primary text, headers, navigation',
  },
];

export const getColors: AppRouteHandler<typeof getColorsRoute> = async (c) => {
  return c.json({ items: DESIGN_COLORS }, HttpStatusCodes.OK);
};

export const getColor: AppRouteHandler<typeof getColorRoute> = async (c) => {
  const id = parseInt(c.req.param('id'));
  const color = DESIGN_COLORS.find((color) => color.id === id);

  if (!color) {
    return c.json({ message: 'Color not found' }, HttpStatusCodes.NOT_FOUND);
  }

  return c.json({ item: color }, HttpStatusCodes.OK);
};
