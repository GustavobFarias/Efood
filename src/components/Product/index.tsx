import hioki from '../../assets/images/hioki.png'
import {
  Button,
  Card,
  Comidas,
  Container,
  Descrition,
  Destaque,
  Infos,
  Nota,
  Tipos,
  TituloCard
} from './styles'
import estrela from '../../assets/images/estrela.png'

const Product = () => {
  return (
    <>
      <Container>
        <Card>
          <div>
            <img src={hioki} alt="Hioki Sushi" />
          </div>
          <Infos>
            <TituloCard>
              <h3>Hioki Sushi</h3>
              <Nota>
                <span>4.9</span>
                <img src={estrela} alt="estrela" />
              </Nota>
            </TituloCard>
            <Descrition>
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. <br /> Experimente o Japão sem sair do lar com nosso
              delivery!
            </Descrition>
            <Button>Saiba mais</Button>
          </Infos>
          <Tipos>
            <Destaque>Destaque da semana</Destaque>
            <Comidas>Japonesa</Comidas>
          </Tipos>
        </Card>
        <Card>
          <div>
            <img src={hioki} alt="Hioki Sushi" />
          </div>
          <Infos>
            <TituloCard>
              <h3>Hioki Sushi</h3>
              <Nota>
                <span>4.9</span>
                <img src={estrela} alt="estrela" />
              </Nota>
            </TituloCard>
            <Descrition>
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. <br /> Experimente o Japão sem sair do lar com nosso
              delivery!
            </Descrition>
            <Button>Saiba mais</Button>
          </Infos>
          <Tipos>
            <Destaque>Destaque da semana</Destaque>
            <Comidas>Japonesa</Comidas>
          </Tipos>
        </Card>
        <Card>
          <div>
            <img src={hioki} alt="Hioki Sushi" />
          </div>
          <Infos>
            <TituloCard>
              <h3>Hioki Sushi</h3>
              <Nota>
                <span>4.9</span>
                <img src={estrela} alt="estrela" />
              </Nota>
            </TituloCard>
            <Descrition>
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. <br /> Experimente o Japão sem sair do lar com nosso
              delivery!
            </Descrition>
            <Button>Saiba mais</Button>
          </Infos>
          <Tipos>
            <Destaque>Destaque da semana</Destaque>
            <Comidas>Japonesa</Comidas>
          </Tipos>
        </Card>
      </Container>
    </>
  )
}

export default Product
