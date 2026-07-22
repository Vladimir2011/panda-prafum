import { describe, expect, it } from 'vitest'
import { validateLoginForm, validateRegistrationForm } from '~/utils/auth-validation'

describe('auth form validation', () => {
  it('accepts valid login credentials', () => {
    const errors = validateLoginForm({
      email: 'panda@example.ru',
      password: 'strong-pass',
      remember: true,
    })

    expect(errors).toEqual({})
  })

  it('rejects invalid login credentials', () => {
    const errors = validateLoginForm({
      email: 'wrong-email',
      password: 'short',
      remember: false,
    })

    expect(errors.email).toBe('Введите корректный email')
    expect(errors.password).toBe('Пароль должен содержать не менее 8 символов')
  })

  it('requires matching passwords and privacy consent for registration', () => {
    const errors = validateRegistrationForm({
      name: 'Панда',
      email: 'panda@example.ru',
      password: 'strong-pass',
      passwordConfirmation: 'another-pass',
      privacyConsent: false,
    })

    expect(errors.passwordConfirmation).toBe('Пароли не совпадают')
    expect(errors.privacyConsent).toBe('Необходимо принять политику конфиденциальности')
  })
})
