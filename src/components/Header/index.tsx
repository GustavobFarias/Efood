import soon from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.ContainerHeader style={{ backgroundImage: `url(${vector})` }}>
      <S.Titulo>
        <img src={soon} alt="Logo Efood" />
      </S.Titulo>
      <S.Container>
        <S.SubTitulo>
          Viva experiências gastronômicas no conforto da sua casa
        </S.SubTitulo>
      </S.Container>
    </S.ContainerHeader>
  )
}

export default Header
