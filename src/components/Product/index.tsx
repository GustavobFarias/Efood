import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { BotaoDetalhes } from '../Restaurantes/styles'
import close from '../../assets/images/x.png'
import { ProdutoContainer } from './styles'

import { add, open } from '../../store/reducers/cart'

import { Prato as PratoType } from '../../types'

import * as S from './styles'

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

const Product = ({
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
    <S.Prato>
      <S.Imagem>
        <img src={image} alt={name} />
      </S.Imagem>
      <S.NomePrato>{name}</S.NomePrato>
      <S.Descricao>{getDescricao(description)}</S.Descricao>
      <BotaoDetalhes onClick={handleClick}>{title}</BotaoDetalhes>

      {modalVisivel && (
        <S.ModalContainer onClick={() => setModalVisivel(false)}>
          <S.Container>
            <S.Header>
              <a onClick={() => setModalVisivel(false)}>
                <img className="img" src={close} alt="Fechar" />
              </a>
            </S.Header>
            <S.Items>
              <div>
                <img className="prato" src={image} alt={name} />
              </div>
              <div>
                <S.Titulo>{name}</S.Titulo>
                <S.Descrition>{description}</S.Descrition>
                <S.Descricao>{serve}</S.Descricao>
                <S.Carrinho onClick={addToCart}>
                  Adicionar ao carrinho - {infos}
                </S.Carrinho>
              </div>
            </S.Items>
          </S.Container>
        </S.ModalContainer>
      )}
    </S.Prato>
  )
}

export { ProdutoContainer }
export default Product
