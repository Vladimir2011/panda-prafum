import type { SearchProduct } from '~/types/shop'

export function filterSearchProducts(
  products: SearchProduct[],
  query: string,
  limit = 3,
): SearchProduct[] {
  const normalizedQuery = query.trim().toLocaleLowerCase('ru-RU')

  if (normalizedQuery.length < 2) {
    return []
  }

  if (normalizedQuery === 'тест') {
    return products.slice(0, limit)
  }

  return products
    .filter((product) =>
      [product.brand, product.name, product.variant, ...product.keywords]
        .join(' ')
        .toLocaleLowerCase('ru-RU')
        .includes(normalizedQuery),
    )
    .slice(0, limit)
}
