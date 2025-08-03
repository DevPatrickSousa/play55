import { contactFormSchema, type ContactFormData } from '~/utils/validation'

export const useContactForm = () => {
  const config = useRuntimeConfig()
  const siteKey = config.public.siteKey

  const form = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    message: ''
  })

  const errors = ref<Partial<ContactFormData>>({})
  const loading = ref(false)

  const getRecaptchaToken = async (action: string = 'form_submit'): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      if (typeof window === 'undefined' || !(window as any).grecaptcha) {
        reject(new Error('reCAPTCHA não está disponível'))
        return
      }

      const grecaptcha = (window as any).grecaptcha
      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action })
          .then((token: string) => resolve(token))
          .catch((error: any) => reject(error))
      })
    })
  }

  const handlePhoneInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    form.value.phone = formatPhone(input.value)
  }

  const submitForm = async (): Promise<{ success: boolean; message: string }> => {
    try {
      const validatedData = contactFormSchema.parse(form.value)
      errors.value = {}
      
      loading.value = true
      
      const token = await getRecaptchaToken()
      
      const response = await $fetch('/api/validar-recaptcha', {
        method: 'POST',
        body: {
          ...validatedData,
          token
        }
      })
      
      resetForm()
      
      return { success: true, message: 'Mensagem enviada com sucesso!' }
      
    } catch (error: any) {
      if (error.name === 'ZodError') {
        errors.value = {}
        error.errors.forEach((err: any) => {
          errors.value[err.path[0] as keyof ContactFormData] = err.message
        })
        return { success: false, message: 'Por favor, corrija os erros no formulário.' }
      } else {
        console.error('Form submission error:', error)
        return { success: false, message: 'Erro ao enviar mensagem. Tente novamente.' }
      }
    } finally {
      loading.value = false
    }
  }

  const resetForm = () => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      message: ''
    }
    errors.value = {}
  }

  return {
    form,
    errors: readonly(errors),
    loading: readonly(loading),
    submitForm,
    handlePhoneInput,
    resetForm
  }
} 