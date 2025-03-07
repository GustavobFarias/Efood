import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 32px 8px;
  z-index: 1000;
  display: none;

  &.is-open {
    display: flex;
    justify-content: flex-end;
  }
`

export const SideBar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.rosy};
  z-index: 1000;
  padding: 32px 8px;
  max-width: 400px;
  width: 100%;
  height: 100vh;

  .botoes {
    margin-top: 24px;
  }

  > h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.beige};
  }

  p {
    color: ${colors.beige};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`

export const CartItem = styled.div`
  display: flex;
  padding: 12px;
  background-color: ${colors.white};
  margin-bottom: 16px;
  position: relative;
  color: ${colors.rosy};

  > div {
    width: calc(100% - 112px);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    padding-right: 12px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    padding-bottom: 16px;
    word-break: break-word;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  span > img {
    width: 24px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  padding-top: 40px;
  padding-bottom: 16px;

  p,
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
`

export const Botao = styled.button`
  width: 100%;
  background-color: ${colors.white};
  color: ${colors.rosy};
  padding: 4px 0;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`
