export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  birthDate: string
  message: string
} 