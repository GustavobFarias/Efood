import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, SideBar } from '../../components/Cart/styles'
import { Botao, Form, Forms } from './styles'
import { RootState } from '../../store'
import {
  openCart,
  openPayment,
  setDeliveryData
} from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { DeliveryData } from '../../types'
import InputMask from 'react-input-mask'
import { useEffect } from 'react'

const Checkout = () => {
  const dispatch = useDispatch()
  const { isOpen, deliveryData } = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    if (deliveryData) {
      form.setValues({
        fullName: deliveryData.receiver,
        address: deliveryData.address.description,
        city: deliveryData.address.city,
        zipCode: deliveryData.address.zipCode,
        number: deliveryData.address.number,
        complement: deliveryData.address.complement || ''
      })
    }
  }, [deliveryData])

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(4, 'A cidade precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa de mais números')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values, { setSubmitting }) => {
      const deliveryData: DeliveryData = {
        receiver: values.fullName,
        address: {
          description: values.address,
          city: values.city,
          zipCode: values.zipCode,
          number: values.number,
          complement: values.complement || ''
        }
      }

      dispatch(setDeliveryData(deliveryData))

      setTimeout(() => {
        dispatch(openPayment())
        setSubmitting(false)
      }, 500)
    }
  })

  const handleSubmit = async () => {
    form.setTouched({
      fullName: true,
      address: true,
      city: true,
      zipCode: true,
      number: true,
      complement: true
    })

    await form.validateForm()

    if (form.isValid) {
      form.handleSubmit()
    }
  }

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(openCart())} />
      <SideBar>
        <h3>Entrega</h3>
        <form onSubmit={form.handleSubmit}>
          <Form>
            <label htmlFor="fullName">Nome completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputError('fullName') ? 'error' : ''}
            />
          </Form>
          <Form>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputError('address') ? 'error' : ''}
            />
          </Form>
          <Form>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputError('city') ? 'error' : ''}
            />
          </Form>
          <Forms>
            <Form>
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={(e) => form.setFieldValue('zipCode', e.target.value)}
                onBlur={form.handleBlur}
                className={checkInputError('zipCode') ? 'error' : ''}
                mask="99999-999"
              />
            </Form>
            <Form>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('number') ? 'error' : ''}
              />
            </Form>
          </Forms>
          <Form>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </Form>
          <div className="botoes">
            <Botao type="submit" onClick={handleSubmit}>
              Continuar com o pagamento
            </Botao>
            <Botao type="button" onClick={() => dispatch(openCart())}>
              Voltar para o carrinho
            </Botao>
          </div>
        </form>
      </SideBar>
    </CartContainer>
  )
}

export default Checkout
