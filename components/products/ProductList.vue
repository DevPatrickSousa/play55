<script setup lang="ts">
import type { Product } from '~/types/product'

interface Props {
  products: Product[]
  loading: boolean
  error: string | null
  displayedProducts: Product[]
  showOnlyFavorites: boolean
  favoriteProductIds: number[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'retry-fetch': []
  'toggle-favorite': [product: Product]
  'add-to-cart': [product: Product]
}>()


function handleRetryFetch() {
  emit('retry-fetch')
}
</script> 

<template>
  <section class="max-w-7xl mx-auto py-8">
    <div class="text-center mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Nossos Produtos
      </h2>
      
      <p v-if="props.showOnlyFavorites" class="text-gray-600">
        Seus produtos favoritos
      </p>
    </div>

    <div v-if="props.loading" class="flex justify-center items-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
    </div>

    <div v-else-if="props.error" class="text-center py-12">
      <div class="text-red-600 mb-4">
        <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <p class="text-gray-600 mb-4">{{ props.error }}</p>
      <button @click="handleRetryFetch" class="btn-primary">
        Tentar Novamente
      </button>
    </div>

    <div v-else-if="props.displayedProducts.length === 0" class="text-center py-12">
      <div class="text-gray-400 mb-4">
        <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <p class="text-gray-600 mb-2">
        {{ props.showOnlyFavorites ? 'Nenhum produto favorito encontrado' : 'Nenhum produto encontrado' }}
      </p>
      <p class="text-sm text-gray-500">
        {{ props.showOnlyFavorites ? 'Adicione produtos aos seus favoritos para vê-los aqui' : 'Tente ajustar sua busca' }}
      </p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      <ProductsProductCard
        v-for="product in props.displayedProducts"
        :key="product.id"
        :product="product"
        :is-favorite="props.favoriteProductIds.includes(product.id)"
        @toggle-favorite="$emit('toggle-favorite', $event)"
        @add-to-cart="$emit('add-to-cart', $event)"
      />
    </div>
  </section>
</template>