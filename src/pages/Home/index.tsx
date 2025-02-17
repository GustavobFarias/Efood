import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Container } from './styles'
import Restaurantes from '../../components/Restaurantes'

type Restaurante = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
}

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <Container className="container">
        {restaurantes.map((restaurante) => (
          <Restaurantes
            key={restaurante.id}
            id={restaurante.id}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={[restaurante.tipo]}
            rating={restaurante.avaliacao}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
