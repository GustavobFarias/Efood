export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
}

export interface DeliveryData {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: string
    complement?: string
  }
}
export interface CartData {
  payment: {
    card: {
      name: string
      number: string
      cvv: number
      expires: {
        month: number
        year: number
      }
    }
    installments: number
  }
}

export interface PurchasePayload {
  products: {
    id: number
    price: number
  }[]
  delivery: DeliveryData
}
