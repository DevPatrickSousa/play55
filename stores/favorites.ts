import { defineStore } from 'pinia'

export interface FavoriteItem {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export const useFavoritesStore = defineStore('favorites', () => {
  const items = ref<FavoriteItem[]>([])
  const showOnlyFavorites = ref(false)

  const favoritesCount = computed(() => items.value.length)

  function addToFavorites(product: FavoriteItem) {
    if (!items.value.find(item => item.id === product.id)) {
      items.value.push(product)
    }
  }

  function removeFromFavorites(productId: number) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function isFavorite(productId: number): boolean {
    return items.value.some(item => item.id === productId)
  }

  function toggleFavorite(product: FavoriteItem) {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  function toggleShowOnlyFavorites() {
    showOnlyFavorites.value = !showOnlyFavorites.value
  }

  return {
    items: readonly(items),
    showOnlyFavorites: readonly(showOnlyFavorites),
    favoritesCount,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    toggleShowOnlyFavorites
  }
}) 