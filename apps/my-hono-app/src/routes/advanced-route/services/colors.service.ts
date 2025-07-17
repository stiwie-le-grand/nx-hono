import { Color } from '../models/colors.model';

export class ColorsService {
  private readonly designColors: Color[] = [
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
    {
      id: 8,
      name: 'Accent Purple',
      hexValue: '#8B5CF6',
      rgbValue: 'rgb(139, 92, 246)',
      category: 'Accent',
      usage: 'Highlights, call-to-action elements',
    },
  ];

  public getColors = async (): Promise<Color[]> => {
    // Simulate async operation for consistency with API patterns
    return Promise.resolve(this.designColors);
  };

  public getColor = async (id: number): Promise<Color | null> => {
    const color = this.designColors.find((color) => color.id === id);
    return Promise.resolve(color || null);
  };

  public getColorsByCategory = async (category: string): Promise<Color[]> => {
    const colors = this.designColors.filter(
      (color) => color.category.toLowerCase() === category.toLowerCase()
    );
    return Promise.resolve(colors);
  };
}
