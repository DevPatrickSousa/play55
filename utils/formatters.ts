export function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',')
}

export function formatCurrency(price: number, currency: string = 'R$'): string {
  return `${currency} ${formatPrice(price)}`
}

export function formatNumber(number: number): string {
  return number.toLocaleString('pt-BR')
}

export function formatDate(date: string | Date | number): string {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('pt-BR')
}

export function formatDateTime(date: string | Date | number): string {
  const dateObj = new Date(date)
  return dateObj.toLocaleString('pt-BR')
}

export function formatPhone(phone: string): string {
  const numbers = phone.replace(/\D/g, '')
  
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  } else if (numbers.length === 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  
  return phone
}

export function formatCPF(cpf: string): string {
  const numbers = cpf.replace(/\D/g, '')
  return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export function formatCEP(cep: string): string {
  const numbers = cep.replace(/\D/g, '')
  return numbers.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function formatRating(rating: number, maxRating: number = 5): string {
  return rating.toFixed(1)
} 