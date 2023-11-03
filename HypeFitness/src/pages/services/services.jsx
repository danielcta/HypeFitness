import './services.css'
import HypeFitnessCharacter from '../../images/HypeFitnessCharacter.png'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

function Services()
{
  return(
    <>
      <Header />
      <main>
        <label className='titles'>Sobre Nós</label>
        <div id='AboutUs'>
          <div id={'lblAboutUs'}><label id='text'>Somos uma iniciativa independente comprometida em potencializar o sucesso profissional de profissionais da área fitness e academias que, atualmente, não dispõem de seus próprios aplicativos. Além disso, nosso objetivo principal é guiar nossos usuários que estão no início de sua jornada no mundo fitness, oferecendo-lhes um conhecimento abrangente sobre o assunto e fornecendo assistência para alcançar seu potencial estético máximo.</label>
          <img src={HypeFitnessCharacter} alt="character" id='imgCharacter-default' />
          </div>
          <ul>
            Nossa missão abrange diversos aspectos:
            <label>Apoio às Academias e Profissionais de Fitness:</label>
            <li> Oferecemos soluções tecnológicas para academias e profissionais do fitness que ainda não possuem seus próprios aplicativos. Isso permite que eles alcancem uma presença online mais eficaz, gerenciem seus serviços e se conectem de forma mais próxima com seus clientes.</li>
            <label>Orientação para Iniciantes:</label>
            <li>Reconhecemos que iniciar uma jornada no mundo fitness pode ser desafiador. Portanto, disponibilizamos informações valiosas, dicas práticas e orientação especializada para aqueles que estão começando, ajudando-os a criar um plano de treinamento, nutrição e saúde personalizado.</li>
            <label>Maximização do Potencial Estético:</label>
            <li>Compreendemos que a estética é um dos principais motivadores para muitas pessoas que entram no mundo do fitness. Oferecemos orientação especializada e programas de treinamento focados em ajudar nossos usuários a atingir seu potencial estético máximo de maneira saudável e sustentável.</li>
            <div>Nossa paixão é promover um ambiente fitness inclusivo, informado e bem-sucedido, onde tanto os profissionais quanto os entusiastas do fitness podem prosperar. Junte-se a nós nessa jornada para alcançar o sucesso profissional e pessoal no mundo do fitness.</div>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Services