import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'G2 Esports',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Team Liquid',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Natus Vincere (NaVi)',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'FaZe Clan',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Team Empire',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Ninjas in Pyjamas (NiP)',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'TSM FTX',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'BDS Esport',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Rogue',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Spacestation Gaming',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Team oNe eSports',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'MIBR',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'INTZ eSports',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Black Dragons',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'FURIA Esports',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'W7M Gaming',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    },
    {
      nome: 'Santos e-Sports',
      corPrimaria: '#FFC800',
      corSecundaria: '#252525'
    }
  ]

  const [jogadores, setJogadores] = useState([])
  debugger
  const aoNovoJogadorAdicionado = (jogador) => {

    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
