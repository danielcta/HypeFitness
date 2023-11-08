import './ourServices.css'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import HypeCharacterDefault from '../../assets/HypeCharacterDefault.png'

function OurServices()
{
  return(
    <>
      <Header />
      <div className='main'>
        <label className='title' id="lblOurServices">Nossos Serviços</label>
        <div id='benefits'>
            <div className='container'>
              <ul>          
                <label className='serviceTitle'>Para Academias</label>
                <li className='text'>Presença Online Efetiva - Nossa plataforma permite que academias estabeleçam uma presença online sólida, o que é crucial para atrair e reter clientes em um mundo digital.</li>
                <li className='text'>Gestão Simplificada - Oferecemos ferramentas que simplificam o gerenciamento de planos dos alunos, tornando a administração da academia mais eficiente.</li>
                <li className='text'>Fidelização de Clientes - Aproximamos as academias de seus clientes, promovendo uma comunicação direta que leva a uma maior fidelização e satisfação dos membros.</li>
              </ul>
              <img src={HypeCharacterDefault} alt="" id='gymDrawing' className='images' width={'150px'}/>
            </div>
            <hr className='hrOurServices'/>
            <div className='container'>
            <ul>          
              <label className='serviceTitle'>Para Profissionais</label>
              <li className='text'>Divulgação de Serviços - Nossa plataforma permite que os profissionais de fitness promovam seus serviços e mostrem os resultados alcançados por seus alunos por meio de fotos e informações detalhadas, atraindo novos clientes e demonstrando sua expertise.</li>
              <li className='text'>Gerenciamento Simplificado - Oferecemos ferramentas para simplificar o gerenciamento dos planos e metas dos alunos, permitindo aos profissionais acompanhar o progresso e adaptar as estratégias de acordo com as necessidades individuais.</li>
              <li className='text'>Conexão Direta com Clientes - Facilitamos a comunicação direta entre os profissionais de fitness e seus clientes, permitindo um atendimento mais personalizado, a resposta rápida a dúvidas e a criação de relacionamentos sólidos e de confiança.</li>
            </ul>
            <img src={HypeCharacterDefault} alt="" id='HypeCharacter-FitnessProfessional' className='images' width={'150px'}/>
          </div>
          <hr className='hrOurServices'/>
          <div className='container'>
          <ul>          
              <label className='serviceTitle'>Para Usuários</label>
              <li className='text'>Criação de Planos Personalizados - Nossa plataforma oferece a capacidade de criar planos personalizados de duas maneiras: por meio de Inteligência Artificial para sugestões automatizadas com base em metas e preferências, ou de modo manual, onde o usuário tem controle total e cria sua própria ficha de treino de acordo com suas necessidades.</li>
              <li className='text'>Armazenamento de Planos - Os usuários podem digitalizar e salvar planos que foram recomendados por nutricionistas ou consultores fitness. Isso permite que eles tenham acesso rápido e prático às orientações personalizadas no aplicativo.</li>
              <li className='text'>Acesso Ilimitado a Profissionais da Área Fitness - Os usuários têm acesso ilimitado a uma lista de profissionais fitness permitindo que eles escolham o especialista que melhor se adapte às suas necessidades e metas.</li>
              <li className='text'>Sistema de Monitoramento de Progresso - Oferecemos um sistema abrangente de monitoramento de progresso, que permite aos usuários acompanhar seu desenvolvimento ao longo do tempo. Isso inclui o rastreamento de medidas, desempenho nos treinos, hábitos alimentares e outras métricas relevantes, proporcionando feedback valioso para atingir metas.</li>
            </ul>
            <img src={HypeCharacterDefault} alt="" id='HypeCharacter-User' className='images' width={'150px'}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurServices