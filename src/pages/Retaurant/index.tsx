import { useParams } from 'react-router-dom'
import { useGetPratosQuery, useGetRestauranteQuery } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../../components/Banner'
import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

import Items, { ProdutoContainer } from '../../components/Product'

import { open } from '../../store/reducers/cart'
import { RootState } from '../../store'

import { Container, HeaderContainer } from '../../components/Banner/styles'

const Restaurant = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id!)
  const { data: pratos = [] } = useGetPratosQuery(id!)

  const dispatch = useDispatch()
  const cartState = useSelector((state: RootState) => state.cart)
  const items = cartState?.items || []

  if (!restaurante || !pratos) return null

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${vector})` }}>
        <Container className="container">
          <h2>Restaurantes</h2>
          <img src={logo} alt="Logo do restaurante" />
          <p onClick={openCart}>
            <span>{items.length} </span>
            produto(s) no carrinho
          </p>
        </Container>
      </HeaderContainer>
      <Banner
        id={id || ''}
        name={restaurante.titulo}
        type={restaurante.tipo}
        image={restaurante.capa}
      />
      <div className="container">
        <ProdutoContainer>
          {pratos.map((prato) => (
            <Items
              key={prato.id}
              type="button"
              title="Mais detalhes"
              name={prato.nome}
              description={prato.descricao}
              image={prato.foto}
              serve={`Serve: ${prato.porcao}`}
              infos={`R$ ${prato.preco.toFixed(2).replace('.', ',')}`}
              prato={prato}
            />
          ))}
        </ProdutoContainer>
      </div>
    </>
  )
}

export default Restaurant
