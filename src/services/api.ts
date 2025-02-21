import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato, Restaurante } from '../types'

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
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteQuery,
  useGetPratosQuery
} = api
