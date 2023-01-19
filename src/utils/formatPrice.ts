export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).resolvedOptions().maximumFractionDigits

  return price.toFixed(formatter)
}
