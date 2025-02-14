import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import Face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { ContainerFooter, Descrition, RedeSociais, Titulo } from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <Titulo>
        <img src={logo} alt="" />
      </Titulo>
      <RedeSociais>
        <a href="#">
          <img src={insta} alt="instagram" />
        </a>
        <a href="#">
          <img src={Face} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </RedeSociais>
      <div>
        <Descrition>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </Descrition>
      </div>
    </ContainerFooter>
  )
}

export default Footer
