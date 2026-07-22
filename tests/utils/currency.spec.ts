import { describe, expect, it } from 'vitest'
import { formatCurrency } from '~/utils/currency'

describe('formatCurrency', () => {
  it('formats a ruble amount without fractional digits', () => {
    expect(formatCurrency(23_480)).toMatch(/^23[\s\u00a0]480[\s\u00a0]₽$/)
  })
})
