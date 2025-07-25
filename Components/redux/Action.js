import { ADD_TO_CART } from "./Constants";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
    // payload: item
  }
}