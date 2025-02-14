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

  h3 {
    padding-top: 24px;
    font-weight: 100;
    margin-bottom: 156px;
  }

  p {
    font-weight: 900;
  }
`
