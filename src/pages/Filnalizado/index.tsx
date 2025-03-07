import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, SideBar } from '../../components/Cart/styles'
import { Botao } from '../Checkout/styles'
import { RootState } from '../../store'
import { close, resetCart } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Finished = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const [purchase, { data }] = usePurchaseMutation()

  const cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    if (cart.items.length > 0) {
      purchase({
        products: cart.items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: cart.deliveryData ?? {
          receiver: '',
          address: {
            description: '',
            city: '',
            zipCode: '',
            number: '',
            complement: ''
          }
        },
        payment: {
          card: {
            name: '',
            number: '',
            code: 0,
            expires: {
              month: 0,
              year: 0
            }
          }
        }
      })
    }
  }, [cart.items, cart.deliveryData])

  const handleConclude = () => {
    dispatch(resetCart())
    dispatch(close())
    navigate('/')
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(close())} />
        <SideBar>
          <h3>Pedido realizado - &#123; {data?.orderId} &#125;</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <div className="botoes">
            <Botao onClick={handleConclude}>Concluir</Botao>
          </div>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Finished
