export interface Recipe {
  id: string
  title: string
  description: string
  duration: number
  category?: string
  image: string
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    description:
      'A classic Neapolitan pizza featuring San Marzano tomatoes, fresh buffalo mozzarella, and fragrant basil leaves on a perfectly charred crust.',
    duration: 45,
    category: 'Italian',
    image:
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Artisanal Avocado Toast',
    description:
      'Creamy smashed avocado on freshly baked sourdough, topped with heirloom cherry tomatoes, microgreens, and a drizzle of extra virgin olive oil.',
    duration: 15,
    category: 'Breakfast',
    image:
      'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Antioxidant Berry Smoothie Bowl',
    description:
      'A vibrant blend of mixed berries, banana, and açai, topped with house-made granola, fresh fruits, and a drizzle of local honey.',
    duration: 10,
    category: 'Healthy',
    image:
      'https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Pan-Seared Norwegian Salmon',
    description:
      'Wild-caught salmon fillet with crispy skin, served with roasted seasonal vegetables and a light lemon herb butter sauce.',
    duration: 30,
    category: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80',
  },
]
