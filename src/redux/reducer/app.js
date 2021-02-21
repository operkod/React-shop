import { SET_PRODUCT, SET_NAV_BAR, SET_SORT_BY, SET_LOADED } from "../action"
const initialState = {
  items: [],
  sortBy: "name",
  navBar: "pizzas",
  isLoaded: false
}

export const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return { ...state, items: payload }
    case SET_SORT_BY:
      return { ...state, sortBy: payload }
    case SET_NAV_BAR:
      return { ...state, navBar: payload }
    case SET_LOADED:
      return { ...state, isLoaded: payload }
    default:
      return state
  }
}
