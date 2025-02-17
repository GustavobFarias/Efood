import estrela from '../../assets/images/estrela.png'
import {
  Card,
  Comidas,
  Container,
  Descrition,
  Destaque,
  Infos,
  Nota,
  Tipos,
  TituloCard,
  RestaurantImage,
  BotaoSaibaMais
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  rating: number
}

const Restaurantes = ({
  id,
  title,
  description,
  image,
  rating,
  infos
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <Container>
      <Card>
        <RestaurantImage>
          <img src={image} alt={title} />
        </RestaurantImage>
        <Infos>
          <TituloCard>
            <h3>{title}</h3>
            <Nota>
              <span>{rating.toFixed(1)}</span>
              <img src={estrela} alt="estrela" />
            </Nota>
          </TituloCard>
          <Descrition>{getDescricao(description)}</Descrition>
          <BotaoSaibaMais as={Link} to={`/restaurante/${id}`}>
            Saiba mais
          </BotaoSaibaMais>
        </Infos>
        <Tipos>
          <Destaque>Destaque da semana</Destaque>
          <Comidas>{infos[0]}</Comidas>
        </Tipos>
      </Card>
    </Container>
  )
}

export default Restaurantes
