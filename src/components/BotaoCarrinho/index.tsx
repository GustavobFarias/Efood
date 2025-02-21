import { useState } from 'react'
import {
  Container,
  Descricao,
  Descrition,
  Header,
  Imagem,
  ModalContainer,
  NomePrato,
  Prato,
  Titulo,
  Items as StyledItems,
  Carrinho
} from './styles'
import { BotaoDetalhes } from '../Restaurantes/styles'
import fechar from '../../assets/images/x.png'
import { ProdutoContainer } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Prato as PratoType } from '../../pages/Retaurant'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  name: string
  description: string
  image: string
  serve: string
  infos: string
  prato: PratoType
}

const Items = ({
  type = 'button',
  title,
  name,
  description,
  image,
  infos,
  serve,
  prato
}: Props) => {
  const [modalVisivel, setModalVisivel] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  const handleClick = (event: React.MouseEvent) => {
    if (type === 'button') {
      event.preventDefault()
      setModalVisivel(true)
    }
  }

  return (
    <Prato>
      <Imagem>
        <img src={image} alt={name} />
      </Imagem>
      <NomePrato>{name}</NomePrato>
      <Descricao>{getDescricao(description)}</Descricao>
      <BotaoDetalhes onClick={handleClick}>{title}</BotaoDetalhes>

      {modalVisivel && (
        <ModalContainer onClick={() => setModalVisivel(false)}>
          <Container>
            <Header>
              <a onClick={() => setModalVisivel(false)}>
                <img className="img" src={fechar} alt="Fechar" />
              </a>
            </Header>
            <StyledItems>
              <div>
                <img className="prato" src={image} alt={name} />
              </div>
              <div>
                <Titulo>{name}</Titulo>
                <Descrition>{description}</Descrition>
                <Descricao>{serve}</Descricao>
                <Carrinho onClick={addToCart}>
                  Adicionar ao carrinho - {infos}
                </Carrinho>
              </div>
            </StyledItems>
          </Container>
        </ModalContainer>
      )}
    </Prato>
  )
}

export { ProdutoContainer }
export default Items
