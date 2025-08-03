<script setup lang="ts">
import type { Product } from '~/types/product'

interface Props {
  product: Product
  isFavorite: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'toggle-favorite': [product: Product]
  'add-to-cart': [product: Product]
}>()

function handleToggleFavorite() {
  emit('toggle-favorite', props.product)
}

function handleAddToCart() {
  emit('add-to-cart', props.product)
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden hover:scale-105 hover:cursor-pointer">
    <div class="relative aspect-square bg-gray-100">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-contain p-4"
        loading="lazy"
      />
      
      <button
        @click="handleToggleFavorite"
        class="absolute top-2 right-2 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-sm transition-all duration-200"
        :class="{ 'text-red-500': props.isFavorite }"
      >
        <svg
          class="h-5 w-5"
          :class="{ 'fill-current': props.isFavorite, 'stroke-current fill-none': !props.isFavorite }"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>

    <div class="p-4">
      <h3 class="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">
        {{ product.title }}
      </h3>

      <p class="text-xs text-gray-500 mb-2 capitalize">
        {{ product.category }}
      </p>

      <div class="mb-3">
        <span class="text-lg font-bold text-gray-900">
          R$ {{ formatPrice(product.price) }}
        </span>
      </div>

      <button
        @click="handleAddToCart"
        class="w-full btn-primary text-sm py-2"
      >
        Adicionar
      </button>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 