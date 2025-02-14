import pizza from '../../assets/images/pizza.png'
import { Button, Descricao, Imagem, NomePrato, Prato, Produto } from './styles'

const Botao = () => {
  return (
    <>
      <Produto className="container">
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
        <Prato>
          <Imagem>
            <img src={pizza} alt="" />
          </Imagem>
          <div>
            <NomePrato>Pizza Marguerita</NomePrato>
            <Descricao>
              A clássica Marguerita: molho de tomate suculento, mussarela
              derretida, manjericão fresco e um toque de azeite. Sabor e
              simplicidade!
            </Descricao>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </Prato>
      </Produto>
    </>
  )
}

export default Botao
