import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import AppLogo from '~/components/AppLogo.vue'

describe('AppLogo', () => {
  it('renders an accessible link to the homepage', async () => {
    const wrapper = await mountSuspended(AppLogo)
    const link = wrapper.get('a')
    const image = wrapper.get('img')

    expect(link.attributes('href')).toBe('/')
    expect(link.attributes('aria-label')).toBe('Panda Parfum — на главную')
    expect(image.attributes('src')).toBeTruthy()
    expect(image.attributes('alt')).toBe('')
    expect(link.text()).toContain('Panda Parfum')
    expect(link.text()).toContain('Парфюмерия и косметика')
  })
})
