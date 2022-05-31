import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'

import { useCallback, useContext, useEffect, useState } from 'react'
import { Button } from '../components/layout/Button'

import { ProgressContext } from '../context/progress'
import { questions } from '../config'

import { useNavigate } from 'react-router-dom'



import imgdir from '../assets/popup amarelo dir.png'
import imgesq from '../assets/popup amarelo esq.png'
import fundo from '../assets/fundo seta.png'
import seta from '../assets/seta.png'
import roleta from '../assets/roleta.png'

const style = {
    main: {
      width: 824,
      maxWidth: '100%',
      background: '#F6D55C',
      minHeight: 440,
      borderRadius: 26,
      display: 'flex',
      alignItems: 'flex-start',
      position: 'relative',
      justifyContent: 'space-between',
      overflow: 'hidden'
    },
    bkg: {
      height: 440
    },
    content: {
        padding: '26px 8px 30px 8px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}

export const Roleta = () => {
  const [items, setItems] = useState([])
  const navigate = useNavigate()
  const { handleState } = useContext(ProgressContext)

  const itemsDone = JSON.parse(localStorage.getItem('progress'))

  let random = Math.floor(Math.random() * (8 - 1)) + 1;

  if (itemsDone) {
    if (itemsDone.length >= 7) {
      random = 0;
    }else{
      while (itemsDone.includes(random)) {
        random = Math.floor(Math.random() * (8 - 1)) + 1;
      }
    }
  }

  const grau = -45*random;

  function rodaRoleta() {
    document.querySelector('.button').classList.add('active');
    document.querySelector('.roda').style.transform = 'rotate('+grau+'deg)';
  }

  const handleStep = async (step) => {
    await handleState(step)
    navigate('/main')
  }

  return (
    <>
      <Header></Header>
      <Container>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)'}}>
              <div className="popup" style={style.main}>
                  <div className="bkgesq" style={style.bkg}>
                      <img src={imgesq} alt="" style={style.bkg}/>
                  </div>
                  <div className="content" style={style.content}>
                      <div className="roleta" style={{paddingTop: 22.5}}>
                        <div className="seta" style={{position: 'relative'}}>
                          <img src={seta} alt="" style={{position: 'absolute', top: '-20px', left: "50%", transform: 'translateX(-50%)', zIndex: '3'}}/>
                          <img src={fundo} alt="" style={{position: 'absolute', top: '-20px', left: "50%", transform: 'translateX(-50%)', zIndex: "1"}}/>
                        </div>
                        <img src={roleta} className="roda" alt="" style={{position: 'relative', zIndex: '2', transition: "all 2s ease-out"}} />
                      </div>
                      <Button
                      onClick={() => {
                        handleStep(random)
                      }}
                      label="AVANÇAR"
                      url="/main"
                      style={{ width: 170, background: '#3DC2EA', color: '#FFF', maxWidth: '100%', position: 'absolute', bottom: 30, right: 114, opacity: 0, visibility: 'hidden', transition: 'all .3s' }}
                      >
                      </Button>
                  </div>
                  <div className="bkgdir" style={style.bkg} onLoad={() => {rodaRoleta()}}>
                      <img src={imgdir} alt="" style={style.bkg}/>
                  </div>
              </div>
          </div>
      </Container>
    </>
  )
}