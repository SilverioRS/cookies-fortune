import CardFortune from './components/CardFortune'
import CardAuthorFortune from './components/CardAuthorFortune'
import phrasesData from './assets/db/phrases.json'
import {useState} from 'react'
import fondo1 from './assets/img/fondo1.jpg'
import fondo2 from './assets/img/fondo2.jpg'
import fondo3 from './assets/img/fondo3.jpg'
import fondo4 from './assets/img/fondo4.jpg'


function App() {
  
  

  const [ fortune, setFortune] = useState({
    author: '',
    phrase: '',
  })

  const [ cookie, setCookie] = useState(false)
  
  const imgBg = [fondo1, fondo2, fondo3, fondo4]

  const getRandomNumber = (i) => Math.floor(Math.random() * i)  

  const theFortune = () => {
    setCookie(true)
    setTimeout(() => {
      setFortune(phrasesData[getRandomNumber(phrasesData.length)])
      document.body.style.backgroundImage = `url(${
        imgBg[getRandomNumber(imgBg.length)]
      })`
      setCookie(false);
    }, 2000);
  }


  return (
    
    <>
      <div className = 'container'>
        <h1 className = 'container-title'>¡¡Galletas de la Fortuna!!</h1>
        <div className = 'container-btn'>
          <button 
            type='button'
            className={cookie ? 'btn-no-drop' : ''}
            disabled={cookie}
            onClick={theFortune}
          >
            <box-icon 
              type='solid'
              animation='tada'
              name='magic-wand'
              pull='rigth'
              size='20px'
            ></box-icon>
          Quiero saber mi suerte!
          </button>
        </div>
        {cookie && (
          <div className='cookie-animation'>
            <img src='/cookie-favicon.png' alt='img_cookie'/>
          </div>  
        )}
        {!cookie && fortune.phrase && (
          <CardFortune phrase={fortune.phrase} />
        )}
      </div>
      {!cookie && fortune.author && <CardAuthorFortune author={fortune.author} />}
    </>
  )
}

export default App
