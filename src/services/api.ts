import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato, Restaurante } from '../types'

type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    getPratos: builder.query<Prato[], string>({
      query: (id) => `/restaurantes/${id}`,
      transformResponse: (response: { cardapio: Prato[] }) => response.cardapio
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api
