import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProdutoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0;
  justify-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Prato = styled.div`
  background-color: ${colors.rosy};
  color: ${colors.white};
  padding: 8px;
  position: relative;
  width: 320px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    max-width: 320px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 167px;
  margin-bottom: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const NomePrato = styled.h4`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  padding: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`

export const Carrinho = styled.a`
  display: block;
  text-align: center;
  width: 218px;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
  margin-top: 16px;
  background-color: ${colors.white};
  color: ${colors.rosy};
  cursor: pointer;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

export const Items = styled.div`
  display: flex;
  padding-right: 32px;
`

export const Container = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.rosy};
  color: #fff;
  padding: 0 0 32px 32px;

  .img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .prato {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 96%;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-bottom: 16px;
`

export const Descrition = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 18px;
`

export const Botao = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  padding: 4px 6px;
  background-color: ${colors.white};
  color: ${colors.rosy};
  border: none;
  cursor: pointer;
`
