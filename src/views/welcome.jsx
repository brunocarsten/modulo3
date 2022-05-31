import '../styles/welcome.scoped.scss'

import { useState } from 'react'

import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { NavButton } from '../components/layout/NavButton'

export const Welcome = () => {
  const [step, setStep] = useState(1)

  const handleContent = () => {
    const Component = () => {
        return (
          <>
            <div className="info">
              <h1 className="title">BOAS-VINDAS!</h1>
              <p>
                Seja bem-vindo ao quiz do Módulo 3 do Comunidades e Povos Tradicionais! 
              </p>
              <p>
              Sua tarefa, agora, será avaliar cada questão apresentada e escolher a opção correta sobre a infância nos povos e nas comunidades tradicionais. O objetivo é testar seus conhecimentos sobre o tema e descobrir se você conhece um pouco da realidade dessas populações. Boa sorte!
              </p>
            </div>
            <NavButton
              url="/roleta"
              label="COMEÇAR"
              style={{width: 300, marginTop: 66, background: '#3DC2EA', color: '#FFF' }}
            />
          </>
        )
    }

    return <Component />
  }

  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%' }}>
          <div style={style.content}>{handleContent()}</div>
        </Container>
      </div>
    </>
  )
}
