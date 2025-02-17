import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const RestaurantImage = styled.div`
  width: 100%;
  height: 217px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Card = styled.div`
  width: 472px;
  margin-top: 80px;
  border: 1px solid ${cores.rosado};
  color: ${cores.rosado};
  position: relative;
`

export const Infos = styled.div`
  padding: 8px;
`

export const TituloCard = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Nota = styled.div`
  display: flex;

  span {
    padding-right: 8px;
  }
`

export const Descrition = styled.p`
  width: 400px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 16px;
`

export const BotaoSaibaMais = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 4px 6px;
  background-color: ${cores.rosado};
  border: none;
  font-size: 14px;
  color: ${cores.branca};
  cursor: pointer;
`

export const BotaoDetalhes = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 4px 6px;
  background-color: ${cores.branca};
  border: none;
  font-size: 14px;
  color: ${cores.rosado};
  cursor: pointer;
`

export const Tipos = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  display: flex;
  align-items: center;
  margin-top: 22px;
  margin-right: 16px;
`

export const Destaque = styled.div`
  padding: 6px;
  color: ${cores.branca};
  background-color: ${cores.rosado};
  margin-right: 8px;
`

export const Comidas = styled.div`
  padding: 6px;
  color: ${cores.branca};
  background-color: ${cores.rosado};
`
