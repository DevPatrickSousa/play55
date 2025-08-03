import type { Product } from '~/types/product'
// variavel global para search
const searchQuery = ref('')

export const useProducts = () => {
  const { api } = useAPI()
  
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  const filteredProducts = computed(() => {
    let filtered = products.value

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.price.toString().includes(query)
      )
    }

    return filtered
  })

  async function fetchProducts() {
    loading.value = true
    error.value = null
    
    try {
      const response = await api.get('/products')
      products.value = response as Product[]
    } catch (err) {
      error.value = 'Erro ao carregar produtos'
      console.error('Error fetching products:', err)
    } finally {
      loading.value = false
    }
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  return {
    products: readonly(products),
    loading: readonly(loading),
    error: readonly(error),
    searchQuery,
    filteredProducts,
    fetchProducts,
    setSearchQuery
  }
} 