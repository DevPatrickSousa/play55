<script setup lang="ts">
const { form, errors, loading, submitForm, handlePhoneInput, resetForm } = useContactForm()

const handleSubmit = async () => {
  const result = await submitForm()
  
  if (result.success) {
    alert(result.message)
    resetForm()
  } else {
    alert(result.message)
  }
}
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white">MinhaLoja</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Sua loja online de confiança para encontrar os melhores produtos com os melhores preços. 
            Qualidade e segurança em cada compra.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">
                Sobre Nos
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors text-sm">
                Politica de Privacidade
              </a>
            </li>
          </ul>
        </div>

        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Fale Conosco</h3>
          <form @submit.prevent="handleSubmit" class="space-y-3">
                           <input
                v-model="form.name"
                type="text"
                placeholder="Seu nome"
                class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                :class="{ 'border-red-500': errors.name }"
              />
             <p v-if="errors.name" class="text-red-400 text-xs">{{ errors.name }}</p>

              <input
                v-model="form.email"
                type="email"
                placeholder="Seu e-mail"
                class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                :class="{ 'border-red-500': errors.email }"
              />
             <p v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</p>

              <input
                v-model="form.phone"
                @input="handlePhoneInput"
                type="tel"
                placeholder="Seu telefone"
                class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                :class="{ 'border-red-500': errors.phone }"
              />
             <p v-if="errors.phone" class="text-red-400 text-xs">{{ errors.phone }}</p>

                             <input
                 v-model="form.birthDate"
                 type="date"
                 placeholder="Sua data de nascimento"
                 class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                 :class="{ 'border-red-500': errors.birthDate }"
               />
             <p v-if="errors.birthDate" class="text-red-400 text-xs">{{ errors.birthDate }}</p>

              <textarea
                v-model="form.message"
                placeholder="Sua mensagem"
                rows="4"
                class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
             <p v-if="errors.message" class="text-red-400 text-xs">{{ errors.message }}</p>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
               {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
             </button>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © 2024 MinhaLoja. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template> 