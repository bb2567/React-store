  export const formatPrice = (thousand) => {
    return thousand.toLocaleString('zh',{
      style:'currency',
      currency: 'NTD'
    })
  };