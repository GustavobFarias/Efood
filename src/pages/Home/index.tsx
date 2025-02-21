import Header from '../../components/Header'
import { Container } from './styles'
import Restaurantes from '../../components/Restaurantes'
import { useGetRestaurantesQuery } from '../../services/api'
import { Restaurante } from '../../types'

type RestauranteCardProps = {
  id: number
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
}

const Home = () => {
  const { data: restaurantes = [] } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <Container className="container">
        {restaurantes.map((restaurante: Restaurante) => (
          <Restaurantes
            key={restaurante.id}
            id={restaurante.id}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={[restaurante.tipo]}
            rating={restaurante.avaliacao}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
