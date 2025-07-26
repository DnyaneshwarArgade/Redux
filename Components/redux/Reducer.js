
import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constants";

const initialState = [];

export const reducer = (state = initialState, Action) => {

  switch (Action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        Action.data
      ]

      case REMOVE_FROM_CART :
        let result = state.filter(item => {
          return item.name!=Action.data
        })
        return [
          ...result
        ]
    default:
      return state;
  }



}