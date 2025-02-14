import Banner from '../../components/Banner'
import logo from '../../assets/images/logo.png'
import vector from '../../assets/images/Vector.png'
import { Container, HeaderContainer } from '../../components/Banner/styles'
import Botao from '../../components/BotaoCarrinho'

const Perfil = () => {
  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${vector})` }}>
        <Container className="container">
          <h2>Restaurantes</h2>
          <img src={logo} alt="" />
          <p>
            <span>0 </span>
            produto(s) no carrinho
          </p>
        </Container>
      </HeaderContainer>
      <Banner />
      <Botao />
    </>
  )
}

export default Perfil
