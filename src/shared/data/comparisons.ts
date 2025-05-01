export interface Feature {
  label: string;
  value: string;
  enabled?: boolean;
}

export interface Comparison {
  name: string;
  image: string;
  features: Feature[];
}

export const comparisons: Comparison[] = [
  {
    name: 'Midjourney 3',
    image: '/images/mj3.webp',
    features: [
      { label: 'Resemblance', value: 'Low resemblance', enabled: false },
      { label: 'Character', value: 'Inconsistent character', enabled: false },
      { label: 'Photorealism', value: 'Medium photorealism', enabled: true },
      { label: 'Resolution', value: 'Low resolution', enabled: false },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Clear and sharp', enabled: true },
    ],
  },
  {
    name: 'Artphoto.AI',
    image: '/images/artphoto.webp',
    features: [
      { label: 'Resemblance', value: 'High resemblance', enabled: true },
      { label: 'Character', value: 'Consistent character', enabled: true },
      { label: 'Photorealism', value: 'High photorealism', enabled: true },
      { label: 'Resolution', value: 'High resolution', enabled: true },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Clear and sharp', enabled: true },
    ],
  },
  {
    name: 'DALL-E 3',
    image: '/images/dalle3.webp',
    features: [
      { label: 'Resemblance', value: 'No resemblance' },
      { label: 'Character', value: 'Inconsistent character', enabled: false },
      { label: 'Photorealism', value: 'Low photorealism', enabled: false },
      { label: 'Resolution', value: 'No resolution', enabled: false },
      { label: 'Ethnicity', value: 'Maintains ethnicity', enabled: true },
      { label: 'Clarity', value: 'Not clear and not sharp', enabled: false },
    ],
  },
];
