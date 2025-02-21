import {
  Botao,
  CartContainer,
  CartItem,
  Overlay,
  SideBar,
  ValorTotal
} from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart)
  const { items = [], isOpen = false } = cartState || {}
  const dispatch = useDispatch()

  if (!isOpen) return null

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(close())} />
        <SideBar>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
              </div>
              <span>
                <img
                  src={lixeira}
                  alt="Remover item"
                  onClick={() => dispatch(remove(item.id))}
                />
              </span>
            </CartItem>
          ))}
          <ValorTotal>
            <p>Valor total</p>
            <span>
              R${' '}
              {items
                .reduce((total, item) => total + item.preco, 0)
                .toFixed(2)
                .replace('.', ',')}
            </span>
          </ValorTotal>
          <Botao>Continuar com a entrega</Botao>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
