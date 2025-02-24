import { useGetRestaurantesQuery } from '../../services/api'

import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'

import { Restaurante } from '../../types'

import { Container } from './styles'

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
