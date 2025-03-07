import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartData, DeliveryData, Prato } from '../../types'

type CartState = {
  items: Prato[]
  isOpen: boolean
  activeView: 'cart' | 'checkout' | 'payment' | 'finished'
  deliveryData?: DeliveryData
  cartData?: CartData
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  activeView: 'cart',
  deliveryData: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
        state.isOpen = true
      } else {
        alert('Esse prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    setDeliveryData: (state, action: PayloadAction<DeliveryData>) => {
      state.deliveryData = action.payload
    },
    setCartData: (state, action: PayloadAction<CartData>) => {
      state.cartData = action.payload
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    resetCart: (state) => {
      state.items = []
      state.deliveryData = undefined
      state.activeView = 'cart'
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    openCart: (state) => {
      state.isOpen = true
      state.activeView = 'cart'
    },
    openCheckout: (state) => {
      state.isOpen = true
      state.activeView = 'checkout'
    },
    openPayment: (state) => {
      state.isOpen = true
      state.activeView = 'payment'
    },
    openFinished: (state) => {
      state.isOpen = true
      state.activeView = 'finished'
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  toggleCart,
  openCheckout,
  openPayment,
  openCart,
  openFinished,
  setDeliveryData,
  setCartData,
  resetCart
} = cartSlice.actions
export default cartSlice.reducer
