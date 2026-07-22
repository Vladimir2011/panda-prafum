export interface LoginFormState {
  email: string
  password: string
  remember: boolean
}

export interface RegistrationFormState {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  privacyConsent: boolean
}

export type FormErrors<T> = Partial<Record<keyof T, string>>
