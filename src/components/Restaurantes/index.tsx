import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'

import { Container } from '../../pages/Home/styles'
import * as S from './styles'

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
      <S.Card>
        <S.RestaurantImage>
          <img src={image} alt={title} />
        </S.RestaurantImage>
        <S.Infos>
          <S.TituloCard>
            <h3>{title}</h3>
            <S.Nota>
              <span>{rating.toFixed(1)}</span>
              <img src={estrela} alt="estrela" />
            </S.Nota>
          </S.TituloCard>
          <S.Descrition>{getDescricao(description)}</S.Descrition>
          <S.BotaoSaibaMais as={Link} to={`/restaurante/${id}`}>
            Saiba mais
          </S.BotaoSaibaMais>
        </S.Infos>
        <S.Tipos>
          <S.Destaque>Destaque da semana</S.Destaque>
          <S.Comidas>{infos[0]}</S.Comidas>
        </S.Tipos>
      </S.Card>
    </Container>
  )
}

export default Restaurantes
