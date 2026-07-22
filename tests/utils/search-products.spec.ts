import { describe, expect, it } from 'vitest'
import { demoSearchProducts } from '~/data/search-products'
import { filterSearchProducts } from '~/utils/search-products'

describe('filterSearchProducts', () => {
  it('does not search for a one-character query', () => {
    expect(filterSearchProducts(demoSearchProducts, 'm')).toEqual([])
  })

  it('matches products by brand, name and keywords', () => {
    expect(filterSearchProducts(demoSearchProducts, 'женский').map((item) => item.id)).toEqual([
      'montale-roses-musk-50',
      'lanvin-eclat-100',
    ])
  })

  it('returns no more than three products by default', () => {
    expect(filterSearchProducts(demoSearchProducts, '100')).toHaveLength(3)
  })

  it('returns three demo products for the test query', () => {
    const results = filterSearchProducts(demoSearchProducts, '  ТЕСТ  ')

    expect(results).toHaveLength(3)
    expect(results.map((product) => product.id)).toEqual([
      'molecule-01-100',
      'montale-roses-musk-50',
      'lanvin-eclat-100',
    ])
  })
})
