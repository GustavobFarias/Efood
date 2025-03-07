import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Products'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
  </Routes>
)

export default Rotas
