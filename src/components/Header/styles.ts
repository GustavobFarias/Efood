import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerHeader = styled.div`
  height: 384px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 324px;
  }
`

export const Titulo = styled.h1`
  padding-top: 64px;
  padding-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 62px;
  }
`

export const Container = styled.div`
  width: 538px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 350px;
  }
`

export const SubTitulo = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${colors.rosy};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`
