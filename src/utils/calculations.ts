export function calculatePriceAfterDiscount(price: number, discount: number) {
  return price - price * (discount / 100);
}
