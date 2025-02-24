import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import bin from '../../assets/images/lixeira.png'

import * as S from './styles'

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart)
  const { items = [], isOpen = false } = cartState || {}
  const dispatch = useDispatch()

  if (!isOpen) return null

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={() => dispatch(close())} />
        <S.SideBar>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
              </div>
              <span>
                <img
                  src={bin}
                  alt="Remover item"
                  onClick={() => dispatch(remove(item.id))}
                />
              </span>
            </S.CartItem>
          ))}
          <S.ValorTotal>
            <p>Valor total</p>
            <span>
              R${' '}
              {items
                .reduce((total, item) => total + item.preco, 0)
                .toFixed(2)
                .replace('.', ',')}
            </span>
          </S.ValorTotal>
          <S.Botao>Continuar com a entrega</S.Botao>
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
