import type { NavigationItem } from '~/types/shop'

export const navigationItems: NavigationItem[] = [
  {
    label: 'Женская парфюмерия',
    href: '/?category=women',
    icon: 'i-lucide-sparkles',
  },
  {
    label: 'Мужская парфюмерия',
    href: '/?category=men',
    icon: 'i-lucide-user-round',
  },
  {
    label: 'Макияж',
    href: '/?category=makeup',
    icon: 'i-lucide-palette',
  },
  {
    label: 'Уход',
    href: '/?category=care',
    icon: 'i-lucide-leaf',
  },
  {
    label: 'Бренды',
    href: '/?view=brands',
    icon: 'i-lucide-tags',
  },
  {
    label: 'Подарки',
    href: '/?category=gifts',
    icon: 'i-lucide-gift',
  },
  {
    label: 'Акции',
    href: '/?category=offers',
    icon: 'i-lucide-badge-percent',
    accent: true,
  },
  {
    label: 'Sale %',
    href: '/?category=sale',
    icon: 'i-lucide-percent',
    accent: true,
  },
]
