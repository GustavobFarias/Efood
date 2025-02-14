import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'
import { Container, ContainerHeader, SubTitulo, Titulo } from './styles'

const Header = () => {
  return (
    <ContainerHeader style={{ backgroundImage: `url(${vector})` }}>
      <Titulo>
        <img src={logo} alt="Logo Efood" />
      </Titulo>
      <Container>
        <SubTitulo>
          Viva experiências gastronômicas no conforto da sua casa
        </SubTitulo>
      </Container>
    </ContainerHeader>
  )
}

export default Header
