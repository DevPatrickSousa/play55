export const useAPI = () => {
  const config = useRuntimeConfig()
  
  const baseURL = config.public.apiBaseUrl || 'https://fakestoreapi.com'
  
  const api = {
    async get(endpoint: string) {
      try {
        const response = await $fetch(`${baseURL}${endpoint}`)
        return response
      } catch (error) {
        console.error(`Error fetching from ${endpoint}:`, error)
        throw error
      }
    },
    
    async post(endpoint: string, data: any) {
      try {
        const response = await $fetch(`${baseURL}${endpoint}`, {
          method: 'POST',
          body: data
        })
        return response
      } catch (error) {
        console.error(`Error posting to ${endpoint}:`, error)
        throw error
      }
    },
  }
  
  return {
    api
  }
} 