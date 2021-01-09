import { SET_PRODUCT, SET_NAV_BAR, SET_SORT_BY, SET_LOADED } from "../action"
const initialState = {
  items: [],
  sortBy: "name",
  navBar: "pizzas",
  isLoaded: false
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, items: action.payload }
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload }
    case SET_NAV_BAR:
      return { ...state, navBar: action.payload }
    case SET_LOADED:
      return { ...state, isLoaded: action.payload }
    default:
      return state
  }
}
