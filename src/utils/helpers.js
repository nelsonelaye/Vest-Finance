// any function used in this application that is small
// categorically, it doesn't belong anywhere else

export function formatCurrency(value) {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
