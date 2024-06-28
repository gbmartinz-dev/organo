import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [funcao, setFuncao] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoJogadorCadastrado({
      nome,
      funcao,
      imagem,
      time
    })
    setNome('')
    setFuncao('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar seu card de Jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome do Jogador"
          placeholder="Digite o nome do Jogador"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Função"
          placeholder="Digite a função do Jogador"
          valor={funcao}
          aoAlterado={valor => setFuncao(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem do Jogador"
          placeholder="Digite o endereço da imagem do Jogador"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Equipes"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario