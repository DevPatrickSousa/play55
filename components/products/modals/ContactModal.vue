<script setup lang="ts">
interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { form, errors, loading, submitForm, handlePhoneInput, resetForm } = useContactForm()

function closeModal() {
  emit('close')
  resetForm()
}

async function handleSubmit() {
  const result = await submitForm()
  
  if (result.success) {
    alert(result.message)
    closeModal()
  } else {
    alert(result.message)
  }
}


watch(() => props.isOpen, (isOpen) => {
  if (!isOpen) {
    resetForm()
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-900">Fale Conosco</h2>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              Seu nome
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="input-field"
              :class="{ 'border-red-500': errors.name }"
              placeholder="Digite seu nome completo"
            />
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">
              {{ errors.name }}
            </p>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Seu e-mail
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="input-field"
              :class="{ 'border-red-500': errors.email }"
              placeholder="seu@email.com"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
              Seu telefone
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="input-field"
              :class="{ 'border-red-500': errors.phone }"
              placeholder="(11) 99999-9999"
              @input="handlePhoneInput"
            />
            <p v-if="errors.phone" class="mt-1 text-sm text-red-600">
              {{ errors.phone }}
            </p>
          </div>

          <div>
            <label for="birthDate" class="block text-sm font-medium text-gray-700 mb-1">
              Sua data de nascimento
            </label>
                         <input
               id="birthDate"
               v-model="form.birthDate"
               type="date"
               class="input-field"
               :class="{ 'border-red-500': errors.birthDate }"
               placeholder="Sua data de nascimento"
             />
            <p v-if="errors.birthDate" class="mt-1 text-sm text-red-600">
              {{ errors.birthDate }}
            </p>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Sua mensagem
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="input-field resize-none"
              :class="{ 'border-red-500': errors.message }"
              placeholder="Digite sua mensagem..."
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-600">
              {{ errors.message }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
            <span v-else>Enviar Mensagem</span>
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>