<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import type { Product } from '~/types/product'

const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()
const { products, loading, error, filteredProducts, fetchProducts, searchQuery } = useProducts()

const itemsPerPage = ref(8)
const currentPage = ref(1)

const displayedProducts = computed(() => {
  let productsToShow = products.value

  if (searchQuery.value.trim()) {
    productsToShow = filteredProducts.value
  }

  if (favoritesStore.showOnlyFavorites) {
    productsToShow = productsToShow.filter(product => favoritesStore.isFavorite(product.id))
  }

  return productsToShow.slice(0, currentPage.value * itemsPerPage.value)
})

const favoriteProductIds = computed(() => {
  return favoritesStore.items.map(fav => fav.id)
})

function handleLoadMore() {
  currentPage.value++
}

function handleRetryFetch() {
  fetchProducts()
}

function handleToggleFavorite(product: Product) {
  favoritesStore.toggleFavorite({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category
  })
}

function handleAddToCart(product: Product) {
  cartStore.addItem({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image
  })
}

function handleCartClose() {
  cartStore.closeCart()
}

function handleUpdateQuantity(itemId: number, quantity: number) {
  cartStore.updateQuantity(itemId, quantity)
}

function handleConfirmPurchase() {
  alert('Compra confirmada! Total: R$ ' + formatPrice(cartStore.totalPrice))
  cartStore.clearCart()
  cartStore.closeCart()
}

watch(() => favoritesStore.showOnlyFavorites, () => {
  currentPage.value = 1
})

watch(() => searchQuery.value, () => {
  currentPage.value = 1
})

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="pt-5">
      <PromotionalBanner />
    </div>

    <ProductsProductList
      :products="products as Product[]"
      :loading="loading"
      :error="error"
      :displayed-products="displayedProducts"
      :show-only-favorites="favoritesStore.showOnlyFavorites"
      :favorite-product-ids="favoriteProductIds"
      @load-more="handleLoadMore"
      @retry-fetch="handleRetryFetch"
      @toggle-favorite="handleToggleFavorite"
      @add-to-cart="handleAddToCart"
    />

    <ProductsModalsCartModal
      :is-open="cartStore.isOpen"
      :items="cartStore.items as CartItem[]"
      :total-price="cartStore.totalPrice"
      @close="handleCartClose"
      @update-quantity="handleUpdateQuantity"
      @confirm-purchase="handleConfirmPurchase"
    />
  </div>
</template>
