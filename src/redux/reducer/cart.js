import { ADD_PRODUCT_CART, PLUS_CART_ITEM, MINUS_CART_ITEM, REMOVE_CART_ITEM } from "../action"

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".")
  return keys.reduce((val, key) => {
    return val[key]
  }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path)
    return sum + value
  }, 0)
}

export const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_CART: {
      const currentItems = !state.items[payload._id]
        ? [payload]
        : [...state.items[payload._id].items, payload]

      const newItems = {
        ...state.items,
        [payload._id]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems)
        }
      }
      const totalCount = getTotalSum(newItems, "items.length")
      const totalPrice = getTotalSum(newItems, "totalPrice")

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }
    case PLUS_CART_ITEM: {
      const newObjItems = [...state.items[payload].items, state.items[payload].items[0]]
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = getTotalSum(newItems, "items.length")
      const totalPrice = getTotalSum(newItems, "totalPrice")

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }
    case MINUS_CART_ITEM: {
      const oldItems = state.items[payload].items
      const newObjItems = oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems
      const newItems = {
        ...state.items,
        [payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = getTotalSum(newItems, "items.length")
      const totalPrice = getTotalSum(newItems, "totalPrice")

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items
      }
      const currentTotalPrice = newItems[payload].totalPrice
      const currentTotalCount = newItems[payload].items.length
      delete newItems[payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    }
    default:
      return state
  }
}
