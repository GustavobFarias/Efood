import styled from 'styled-components'
import { colors } from '../../styles'

export const Forms = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Form = styled.div`
  label {
    display: block;
    color: ${colors.beige};
    margin: 8px 0;
  }

  input {
    background-color: ${colors.beige};
    border: none;
    padding: 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const Botao = styled.button`
  background-color: ${colors.beige};
  color: ${colors.rosy};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 8px;
  padding: 4px 0;
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
`
