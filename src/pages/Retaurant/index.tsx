import Banner from '../../components/Banner'
import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'
import { Container, HeaderContainer } from '../../components/Banner/styles'
import { useEffect, useState } from 'react'
import Items, { ProdutoContainer } from '../../components/BotaoCarrinho'
import { useParams } from 'react-router-dom'

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type RestauranteDetalhe = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Prato[]
}

const Restaurant = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<Prato[]>([])
  const [restaurante, setRestaurante] = useState<RestauranteDetalhe>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurante(res)
        setPratos(res.cardapio || [])
      })
  }, [id])

  if (!restaurante) return null

  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${vector})` }}>
        <Container className="container">
          <h2>Restaurantes</h2>
          <img src={logo} alt="Logo do restaurante" />
          <p>
            <span>0 </span>
            produto(s) no carrinho
          </p>
        </Container>
      </HeaderContainer>
      <Banner
        id={id || ''}
        name={restaurante.titulo}
        tipo={restaurante.tipo}
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
            />
          ))}
        </ProdutoContainer>
      </div>
    </>
  )
}

export default Restaurant
