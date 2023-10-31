import { useState } from 'react'
import '../public/HypeFitness-character.png'
import '../public/HypeFitness-logo.png'
import './App.css'

function App() {
  

  return (
    <>
      <header>
        <img src="/HypeFitness-logo.png" alt="" className='logo' width='90px' height='60px'/>
        <div id='leftHeader'>
          <ul>
            <li>Sobre Nós</li>
            <li>Nossos Serviços</li>        
            <li>Academias Parceiras</li>          
            <li>Consultoria</li>
            <li>Nutrição</li>
            <li>Personal</li>
            <li>Exercícios</li>
          </ul>
          <div id='buttons'>
            <input type="submit" value="Login" className='button' id='btnLogin'/>
            <input type="submit" value="Cadastrar" className='button' id='btnSignUp'/>
          </div>
        </div>
      </header>
      <main>
        <img src="" alt="imgLandingPage" width={'100%'} height={'800px'}/>
        <div className='AboutUs'>
          <div id='rightMain'>
            <label className='titles'>Sobre Nós</label>
            <div className='hrDiv'>
              <hr />
              <hr />
            </div>
            <label id='lblAboutUs'>Somos uma iniciativa independente dedicada a impulsionar o sucesso profissional de profissionais da área fitness e academias que não possuem aplicativo próprio. Além disso, visamos orientar nossos usuários que estão iniciando sua jornada no mundo fitness, proporcionando um maior conhecimento sobre o assunto e auxiliando-os a atingir seu potencial estético máximo.</label>
          </div>
          <img src="/HypeFitness-character.png" alt="character" id='imgCharacter-default' />
        </div>
      </main>
    </>
  )
}

export default App
