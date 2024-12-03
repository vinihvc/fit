import { TacoType } from '@/content/TACO'

import { formatValue } from './formatters'

export const factsMapper = (data: TacoType) => {
  return [
    { name: 'Calories', value: formatValue(data.energy_kcal), unit: 'kcal' },
    {
      name: 'Carbohydrate',
      value: formatValue(data.carbohydrate_g),
      unit: 'g',
    },
    {
      name: 'Protein',
      value: formatValue(data.protein_g),
      unit: 'g',
    },
    {
      name: 'Fat',
      value: formatValue(data.saturated_g),
      unit: 'g',
    },
    {
      name: 'Fiber',
      value: formatValue(data.fiber_g),
      unit: 'g',
    },
    {
      name: 'Vitamin C',
      value: formatValue(data.vitaminC_mg),
      unit: 'mg',
    },
    {
      name: 'Sodium',
      value: formatValue(data.sodium_mg),
      unit: 'mg',
    },
  ]
}
