import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'
import { useState } from 'react';

const users = [
  {
    userName: 'danielZuluaga',
    name: 'Daniel Zuluaga',
    isFollowing: true
  },
  {
    userName: 'bancolombia',
    name: 'Bancolombia',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'TmChein',
    name: 'Tomas',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false
  }
]

function App() {
  const formatUserName = (userName) => `@${userName}`;

  const [name, setName] = useState('midudev')

  console.log('render with name: ', name) // Se ejecuta cada vez que cambia el estado

  /// Esta forma no es recomendable, ya que puede llegar hacer renderizados innecesarios y no es optimo
  // const danielZuluaga = {
  //   userName: 'danielzuluaga',
  //   isFollowing: true,
  //   formatUserName: formatUserName,
  // }

  /// Esta forma no es recomendable, ya que puede llegar hacer renderizados innecesarios y no es optimo
  // const midudev = {
  //   userName: 'midudev',
  //   isFollowing: false,
  //   formatUserName: formatUserName,
  // }
  
  
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user

          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
              formatUserName={formatUserName}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }

      <button onClick={()=> {
        setName('pedromichel')
      }}>
        Cambio Nombre
      </button>
    </section>
  )
}

export { App }