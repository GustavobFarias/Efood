import soon from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import Face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.ContainerFooter>
      <S.Titulo>
        <img src={soon} alt="" />
      </S.Titulo>
      <S.RedeSociais>
        <a href="#">
          <img src={insta} alt="instagram" />
        </a>
        <a href="#">
          <img src={Face} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </S.RedeSociais>
      <div>
        <S.Descrition>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </S.Descrition>
      </div>
    </S.ContainerFooter>
  )
}

export default Footer
