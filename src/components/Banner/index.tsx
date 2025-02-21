import { ImgBanner, Tipo } from './styles'

type Props = {
  id: string
  name: string
  tipo: string
  image: string
}

const Banner = ({ name, tipo, image }: Props) => {
  return (
    <>
      <ImgBanner style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <Tipo>{tipo}</Tipo>
          <p>{name}</p>
        </div>
      </ImgBanner>
    </>
  )
}

export default Banner
