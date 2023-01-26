export const translatePaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'money':
      return 'Dinheiro'
    case 'credit-card':
      return 'Cartão de Crédito'
    case 'debit-card':
      return 'Cartão de débito'
    default:
      return ''
  }
}
