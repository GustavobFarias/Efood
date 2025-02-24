import styled from 'styled-components'
import { colors } from '../../styles'

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
    color: ${colors.rosy};
  }
`

export const ImgBanner = styled.div`
  height: 280px;
  background-size: cover;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);

  p {
    font-weight: 900;
  }
`

export const Type = styled.h3`
  font-weight: 100;
  padding-top: 24px;
  margin-bottom: 156px;
`
