<script setup lang="ts">
import type { CartItem } from '~/stores/cart'

interface Props {
  isOpen: boolean
  items: CartItem[]
  totalPrice: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'close': []
  'update-quantity': [itemId: number, quantity: number]
  'confirm-purchase': []
}>()

function handleClose() {
  emit('close')
}

function handleUpdateQuantity(itemId: number, quantity: number) {
  emit('update-quantity', itemId, quantity)
}

function handleConfirmPurchase() {
  emit('confirm-purchase')
}
</script> 

<template>
    <Teleport to="body">
    <div v-if="props.isOpen" class="modal-overlay" @click="handleClose">
      <div class="modal-content" @click.stop>
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-900">Meu carrinho</h2>
          <button
            @click="handleClose"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="props.items.length === 0" class="text-center py-8">
            <svg class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <p class="text-gray-600 mb-2">Seu carrinho está vazio</p>
            <p class="text-sm text-gray-500">Adicione produtos para começar suas compras</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in props.items"
              :key="item.id"
              class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div class="flex-shrink-0">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-16 h-16 object-contain bg-white rounded"
                />
              </div>

              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-medium text-gray-900 truncate">
                  {{ item.title }}
                </h3>
                <p class="text-sm font-bold text-purple-700">
                  R$ {{ formatPrice(item.price) }}
                </p>
              </div>

              <div class="flex items-center space-x-2">
                <button
                  @click="handleUpdateQuantity(item.id, item.quantity - 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                >
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                  </svg>
                </button>
                
                <span class="w-8 text-center text-sm font-medium">
                  {{ item.quantity }}
                </span>
                
                <button
                  @click="handleUpdateQuantity(item.id, item.quantity + 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                >
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="props.items.length > 0" class="border-t border-gray-200 p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold text-gray-900">Total</span>
            <span class="text-xl font-bold text-purple-700">
              R$ {{ formatPrice(props.totalPrice) }}
            </span>
          </div>

          <button
            @click="handleConfirmPurchase"
            class="w-full btn-primary"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>