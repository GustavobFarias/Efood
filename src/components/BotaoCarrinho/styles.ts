import styled from 'styled-components'
import { cores } from '../../styles'

export const Produto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Prato = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosado};
  color: ${cores.branca};
  padding: 8px;
  margin-top: 56px;
`

export const Imagem = styled.div`
  width: 304px;
  height: 168px;
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

export const Button = styled.a`
  display: block;
  text-align: center;
  width: 100%;
  padding: 4px;
  background-color: ${cores.branca};
  color: ${cores.rosado};
  cursor: pointer;
`
