<script setup lang="ts">
import { UModal, USlideover } from '#components'
import type { FormErrors, LoginFormState, RegistrationFormState } from '~/types/auth'
import { validateLoginForm, validateRegistrationForm } from '~/utils/auth-validation'

type AuthMode = 'login' | 'register'

const { display = 'modal' } = defineProps<{
  display?: 'modal' | 'panel'
}>()

const open = defineModel<boolean>('open', { required: true })
const toast = useToast()

const mode = ref<AuthMode>('login')
const showLoginPassword = ref(false)
const showRegistrationPassword = ref(false)

const loginState = reactive<LoginFormState>({
  email: '',
  password: '',
  remember: true,
})

const registrationState = reactive<RegistrationFormState>({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  privacyConsent: false,
})

const loginErrors = ref<FormErrors<LoginFormState>>({})
const registrationErrors = ref<FormErrors<RegistrationFormState>>({})

const title = computed(() => (mode.value === 'login' ? 'Вход' : 'Регистрация'))
const description = computed(() =>
  mode.value === 'login'
    ? 'Войдите, чтобы управлять заказами и профилем.'
    : 'Создайте аккаунт Panda Parfum.',
)
const overlayComponent = display === 'panel' ? USlideover : UModal
const overlayProps = computed(() =>
  display === 'panel'
    ? {
        side: 'right',
        close: true,
        ui: {
          content: 'h-dvh w-screen max-w-none rounded-none',
          header: 'min-h-16 px-4',
          body: 'min-h-0 overflow-y-auto px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]',
          close: 'top-2.5 right-3 rounded-lg',
        },
      }
    : {
        ui: {
          content: 'max-w-lg rounded-[18px]',
          header: 'items-start px-6 pt-6 pb-4 sm:px-8 sm:pt-8',
          body: 'px-6 pb-6 sm:px-8 sm:pb-8',
          close: 'rounded-lg',
        },
      },
)

function setMode(nextMode: AuthMode) {
  mode.value = nextMode
  loginErrors.value = {}
  registrationErrors.value = {}
}

function submitLogin() {
  loginErrors.value = validateLoginForm(loginState)

  if (Object.keys(loginErrors.value).length > 0) {
    return
  }

  toast.add({
    title: 'Демо-режим',
    description: 'Авторизация заработает после подключения backend.',
    color: 'info',
    icon: 'i-lucide-info',
  })
}

function submitRegistration() {
  registrationErrors.value = validateRegistrationForm(registrationState)

  if (Object.keys(registrationErrors.value).length > 0) {
    return
  }

  toast.add({
    title: 'Демо-режим',
    description: 'Создание аккаунта заработает после подключения backend.',
    color: 'info',
    icon: 'i-lucide-info',
  })
}
</script>

<template>
  <component :is="overlayComponent" v-model:open="open" :title :description v-bind="overlayProps">
    <template #body>
      <div class="mb-6 grid grid-cols-2 rounded-xl bg-stone-100 p-1" role="tablist">
        <button
          type="button"
          role="tab"
          :aria-selected="mode === 'login'"
          class="min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand-700"
          :class="mode === 'login' ? 'bg-white text-brand-700 shadow-sm' : 'text-stone-600'"
          @click="setMode('login')"
        >
          Войти
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="mode === 'register'"
          class="min-h-11 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand-700"
          :class="mode === 'register' ? 'bg-white text-brand-700 shadow-sm' : 'text-stone-600'"
          @click="setMode('register')"
        >
          Создать аккаунт
        </button>
      </div>

      <form v-if="mode === 'login'" class="grid gap-5" novalidate @submit.prevent="submitLogin">
        <UFormField label="Email" required :error="loginErrors.email">
          <UInput
            v-model="loginState.email"
            type="email"
            autocomplete="email"
            inputmode="email"
            icon="i-lucide-mail"
            placeholder="name@example.ru"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Пароль" required :error="loginErrors.password">
          <UInput
            v-model="loginState.password"
            :type="showLoginPassword ? 'text' : 'password'"
            autocomplete="current-password"
            icon="i-lucide-lock-keyhole"
            placeholder="Не менее 8 символов"
            size="xl"
            class="w-full"
          >
            <template #trailing>
              <UButton
                type="button"
                color="neutral"
                variant="ghost"
                size="sm"
                :icon="showLoginPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="showLoginPassword ? 'Скрыть пароль' : 'Показать пароль'"
                @click="showLoginPassword = !showLoginPassword"
              />
            </template>
          </UInput>
        </UFormField>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <UCheckbox v-model="loginState.remember" label="Запомнить меня" />
          <UButton type="button" variant="link" size="sm" class="min-h-10 px-0">
            Забыли пароль?
          </UButton>
        </div>

        <UButton type="submit" size="xl" block icon="i-lucide-log-in">Войти</UButton>
        <UButton
          type="button"
          size="xl"
          block
          color="neutral"
          variant="outline"
          icon="i-lucide-user-plus"
          @click="setMode('register')"
        >
          Создать аккаунт
        </UButton>
      </form>

      <form v-else class="grid gap-5" novalidate @submit.prevent="submitRegistration">
        <UFormField label="Имя" required :error="registrationErrors.name">
          <UInput
            v-model="registrationState.name"
            autocomplete="name"
            icon="i-lucide-user-round"
            placeholder="Как к вам обращаться"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Email" required :error="registrationErrors.email">
          <UInput
            v-model="registrationState.email"
            type="email"
            autocomplete="email"
            inputmode="email"
            icon="i-lucide-mail"
            placeholder="name@example.ru"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Пароль" required :error="registrationErrors.password">
          <UInput
            v-model="registrationState.password"
            :type="showRegistrationPassword ? 'text' : 'password'"
            autocomplete="new-password"
            icon="i-lucide-lock-keyhole"
            placeholder="Не менее 8 символов"
            size="xl"
            class="w-full"
          >
            <template #trailing>
              <UButton
                type="button"
                color="neutral"
                variant="ghost"
                size="sm"
                :icon="showRegistrationPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="showRegistrationPassword ? 'Скрыть пароль' : 'Показать пароль'"
                @click="showRegistrationPassword = !showRegistrationPassword"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField
          label="Подтвердите пароль"
          required
          :error="registrationErrors.passwordConfirmation"
        >
          <UInput
            v-model="registrationState.passwordConfirmation"
            :type="showRegistrationPassword ? 'text' : 'password'"
            autocomplete="new-password"
            icon="i-lucide-shield-check"
            placeholder="Повторите пароль"
            size="xl"
            class="w-full"
          />
        </UFormField>

        <div class="grid gap-4">
          <UFormField :error="registrationErrors.privacyConsent">
            <UCheckbox v-model="registrationState.privacyConsent">
              <template #label>
                Я принимаю
                <NuxtLink to="/?view=privacy" class="font-semibold text-brand-700 underline">
                  политику конфиденциальности
                </NuxtLink>
              </template>
            </UCheckbox>
          </UFormField>
        </div>

        <UButton type="submit" size="xl" block icon="i-lucide-user-plus">
          Зарегистрироваться
        </UButton>
        <p class="text-center text-xs leading-5 text-stone-500">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </form>
    </template>
  </component>
</template>
