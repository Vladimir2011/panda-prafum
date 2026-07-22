import type { SearchProduct } from '~/types/shop'

export const demoSearchProducts: SearchProduct[] = [
  {
    id: 'molecule-01-100',
    brand: 'Escentric Molecules',
    name: 'Molecule 01',
    variant: 'Туалетная вода, 100 мл',
    price: 12_490,
    colorClass: 'from-stone-100 to-stone-300',
    keywords: ['молекула', 'унисекс', 'древесный'],
  },
  {
    id: 'montale-roses-musk-50',
    brand: 'Montale',
    name: 'Roses Musk',
    variant: 'Парфюмерная вода, 50 мл',
    price: 10_990,
    colorClass: 'from-brand-50 to-brand-200',
    keywords: ['роза', 'мускус', 'женский'],
  },
  {
    id: 'lanvin-eclat-100',
    brand: 'Lanvin',
    name: "Éclat d'Arpège",
    variant: 'Парфюмерная вода, 100 мл',
    price: 8_790,
    colorClass: 'from-violet-50 to-violet-200',
    keywords: ['эклат', 'цветочный', 'женский'],
  },
  {
    id: 'versace-eros-100',
    brand: 'Versace',
    name: 'Eros',
    variant: 'Туалетная вода, 100 мл',
    price: 11_690,
    colorClass: 'from-cyan-50 to-cyan-200',
    keywords: ['эрос', 'мужской', 'свежий'],
  },
  {
    id: 'clinique-moisture-surge-50',
    brand: 'Clinique',
    name: 'Moisture Surge',
    variant: 'Увлажняющий гель, 50 мл',
    price: 4_590,
    colorClass: 'from-pink-50 to-pink-200',
    keywords: ['уход', 'крем', 'увлажнение'],
  },
]
