import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  height: 186px;
  display: flex;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2,
  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    color: ${cores.rosado};
  }
`

export const ImgBanner = styled.div`
  height: 280px;
  background-size: cover;
  font-size: 32px;
  line-height: 37px;
  color: #fff;

  p {
    font-weight: 900;
  }
`

export const Titulo = styled.p`
  font-weight: 100;
  padding-top: 24px;
  margin-bottom: 156px;
`
