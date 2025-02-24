import { ImgBanner, Type } from './styles'

type Props = {
  id: string
  name: string
  type: string
  image: string
}

const Banner = ({ name, type, image }: Props) => {
  return (
    <>
      <ImgBanner style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <Type>{type}</Type>
          <p>{name}</p>
        </div>
      </ImgBanner>
    </>
  )
}

export default Banner
