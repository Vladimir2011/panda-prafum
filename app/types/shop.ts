export interface NavigationItem {
  label: string
  href: string
  icon: string
  accent?: boolean
}

export interface CartItem {
  id: string
  brand: string
  name: string
  variant: string
  quantity: number
  price: number
  colorClass: string
}

export interface SearchProduct {
  id: string
  brand: string
  name: string
  variant: string
  price: number
  colorClass: string
  keywords: string[]
}
