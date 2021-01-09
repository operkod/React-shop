import axios from "axios"

export const SET_PRODUCT = "SET_PRODUCT"
export const SET_SORT_BY = "SET_SORT_BY"
export const SET_NAV_BAR = "SET_NAV_BAR"
export const SET_LOADED = "SET_LOADED"
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART"
export const PLUS_CART_ITEM = "PLUS_CART_ITEM"
export const MINUS_CART_ITEM = "MINUS_CART_ITEM"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

export const setSortBy = (payload) => ({
  type: SET_SORT_BY,
  payload
})
export const setNavBar = (payload) => ({
  type: SET_NAV_BAR,
  payload
})
export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
})
export const fetchProducts = (navBar, sortBy, limitItem) => (dispatch) => {
  dispatch(setLoaded(false))
  axios
    .get(`http://localhost:3001/${navBar}?_sort=${sortBy}&_page=1&_limit=${limitItem}`)
    .then(({ data }) => {
      dispatch(setProduct(data))
      dispatch(setLoaded(true))
    })
}
export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload
})
export const addProductToCart = (obj) => ({
  type: ADD_PRODUCT_CART,
  payload: obj
})
export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id
})
export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id
})
export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
})
