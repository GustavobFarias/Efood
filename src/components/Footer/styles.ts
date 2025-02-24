import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerFooter = styled.div`
  background-color: ${colors.beige};
  margin-top: 120px;
`

export const Titulo = styled.h4`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 32px;
`

export const RedeSociais = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  a {
    margin-right: 8px;
  }
`

export const Descrition = styled.p`
  padding-bottom: 24px;
  font-size: 10px;
  font-weight: 400;
  line-height: 11px;
  color: ${colors.rosy};
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 99%;
  }
`
