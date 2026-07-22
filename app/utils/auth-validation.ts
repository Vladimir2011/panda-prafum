import type { FormErrors, LoginFormState, RegistrationFormState } from '~/types/auth'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateLoginForm(state: LoginFormState): FormErrors<LoginFormState> {
  const errors: FormErrors<LoginFormState> = {}

  if (!emailPattern.test(state.email.trim())) {
    errors.email = 'Введите корректный email'
  }

  if (state.password.length < 8) {
    errors.password = 'Пароль должен содержать не менее 8 символов'
  }

  return errors
}

export function validateRegistrationForm(
  state: RegistrationFormState,
): FormErrors<RegistrationFormState> {
  const errors: FormErrors<RegistrationFormState> = {}

  if (state.name.trim().length < 2) {
    errors.name = 'Укажите имя'
  }

  if (!emailPattern.test(state.email.trim())) {
    errors.email = 'Введите корректный email'
  }

  if (state.password.length < 8) {
    errors.password = 'Пароль должен содержать не менее 8 символов'
  }

  if (state.passwordConfirmation !== state.password) {
    errors.passwordConfirmation = 'Пароли не совпадают'
  }

  if (!state.privacyConsent) {
    errors.privacyConsent = 'Необходимо принять политику конфиденциальности'
  }

  return errors
}
