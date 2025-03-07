import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'

import Checkout from '../../pages/Checkout'

import bin from '../../assets/images/lixeira.png'

import * as S from './styles'
import Payment from '../../pages/Payment'
import Finished from '../../pages/Filnalizado'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items, activeView } = useSelector(
    (state: RootState) => state.cart
  )

  const formataPreco = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  if (activeView === 'checkout') {
    return <Checkout />
  }

  if (activeView === 'payment') {
    return <Payment />
  }

  if (activeView === 'finished') {
    return <Finished />
  }
  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={() => dispatch(close())} />
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
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
              </ul>
              <S.ValorTotal>
                <p>Valor total</p>
                <span>
                  {formataPreco(
                    items.reduce((total, item) => total + item.preco, 0)
                  )}
                </span>
              </S.ValorTotal>
              <S.Botao type="button" onClick={() => dispatch(openCheckout())}>
                Continuar com a entrega
              </S.Botao>
            </>
          ) : (
            <p>
              O carrinho está vazio, adicione pelo menos um prato para continuar
              com a compra!
            </p>
          )}
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
