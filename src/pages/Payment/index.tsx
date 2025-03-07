import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, SideBar } from '../../components/Cart/styles'
import { Botao, Form, Forms } from '../Checkout/styles'
import { RootState } from '../../store'
import {
  close,
  openCheckout,
  openFinished,
  setCartData
} from '../../store/reducers/cart'
import InputMask from 'react-input-mask'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { PurchasePayload, usePurchaseMutation } from '../../services/api'

const Payment = () => {
  const dispatch = useDispatch()
  const [purchase, { isLoading, error }] = usePurchaseMutation()
  const { isOpen, cartData, items } = useSelector(
    (state: RootState) => state.cart
  )

  useEffect(() => {
    if (cartData) {
      form.setValues({
        cardName: cartData.payment.card.name,
        cardNumber: cartData.payment.card.number,
        cvv: String(cartData.payment.card.cvv),
        month: String(cartData.payment.card.expires.month),
        year: String(cartData.payment.card.expires.year),
        installments: cartData.payment.installments
      })
    }
  }, [cartData])

  const handleClose = () => {
    dispatch(close())
  }

  const handleSubmit = async () => {
    form.setTouched({
      cardName: true,
      cardNumber: true,
      cvv: true,
      month: true,
      year: true,
      installments: true
    })

    await form.validateForm()

    if (form.isValid) {
      form.handleSubmit()
    }
  }

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: '',
      installments: 1
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome do cartão precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      const cartData: PurchasePayload = {
        products: [
          { id: 1, price: 100 },
          { id: 2, price: 90 }
        ],
        delivery: {
          receiver: 'João Silva',
          address: {
            description: 'Rua Exemplo, 123',
            city: 'São Paulo',
            zipCode: '01234-567',
            number: '123',
            complement: 'Apto 101'
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      }

      purchase(cartData)
        .then(() => {
          dispatch(openFinished())
        })
        .catch((err) => {
          console.error('Erro ao processar a compra:', err)
        })
    }
  })

  const formataPreco = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  function formatPreco(reduce: any): import('react').ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleClose} />
      <SideBar>
        <h3>
          Pagamento - Valor a pagar{' '}
          <span>
            {formataPreco(items.reduce((total, item) => total + item.preco, 0))}
          </span>
        </h3>
        <form onSubmit={form.handleSubmit}>
          <Form>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              name="cardName"
              type="text"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputError('cardName') ? 'error' : ''}
            />
          </Form>
          <Forms>
            <Form>
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                id="cardNumber"
                name="cardNumber"
                type="text"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 99"
              />
            </Form>
            <Form>
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                id="cvv"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('cvv') ? 'error' : ''}
                mask="999"
              />
            </Form>
          </Forms>
          <Forms>
            <Form>
              <label htmlFor="month">Mês de vencimento</label>
              <InputMask
                type="text"
                id="month"
                name="month"
                value={form.values.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('month') ? 'error' : ''}
                mask="99"
              />
            </Form>
            <Form>
              <label htmlFor="year">Ano de vencimento</label>
              <InputMask
                type="text"
                id="year"
                name="year"
                value={form.values.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('year') ? 'error' : ''}
                mask="99"
              />
            </Form>
          </Forms>
          <div className="botoes">
            <Botao
              type="submit"
              title="Clique aqui para finalizar a compra"
              onClick={handleSubmit}
            >
              {isLoading ? 'Processando...' : 'Finalizar pagamento'}
            </Botao>
            <Botao onClick={() => dispatch(openCheckout())}>
              Voltar para a edição de endereço
            </Botao>
          </div>
        </form>
      </SideBar>
    </CartContainer>
  )
}

export default Payment
