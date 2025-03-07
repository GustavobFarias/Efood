import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.div`
  height: 186px;
  display: flex;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: 0 auto;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 22px 0;
    }
  }

  .Link,
  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    color: ${colors.rosy};
    cursor: pointer;
    text-decoration: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      text-align: center;
      margin-top: 18px;
    }
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

  @media (max-width: ${breakpoints.tablet}) {
  }
`

export const Type = styled.h3`
  font-weight: 100;
  padding-top: 24px;
  margin-bottom: 156px;
`

export const CartIcon = styled.img`
  color: ${colors.rosy};
  filter: invert(40%) sepia(80%) saturate(300%) hue-rotate(180deg);
`
