import banner from '../../assets/images/imagem_de_fundo.png'

import { ImgBanner } from './styles'

const Banner = () => {
  return (
    <>
      <ImgBanner style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <h3>Italiana</h3>
          <p>La Dolce Vita Trattoria</p>
        </div>
      </ImgBanner>
    </>
  )
}

export default Banner
