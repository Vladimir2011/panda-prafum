import type { CartItem } from '~/types/shop'

export const demoCartItems: CartItem[] = [
  {
    id: 'molecule-01-100',
    brand: 'Escentric Molecules',
    name: 'Molecule 01',
    variant: 'Туалетная вода, 100 мл',
    quantity: 1,
    price: 12_490,
    colorClass: 'from-stone-100 to-stone-300',
  },
  {
    id: 'montale-roses-musk-50',
    brand: 'Montale',
    name: 'Roses Musk',
    variant: 'Парфюмерная вода, 50 мл',
    quantity: 1,
    price: 10_990,
    colorClass: 'from-brand-50 to-brand-200',
  },
]
