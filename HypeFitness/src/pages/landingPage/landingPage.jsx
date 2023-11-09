import './landingPage.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import imglandingpage from '../../assets/imgLandingPage.png'
import HypeCharacterDefault from '../../assets/HypeCharacterDefault.png'
import { Link } from 'react-router-dom';

function LandingPage()
{
    return(
        <>
        <Header />
        <div id='landingPage'>
            <img src={imglandingpage} alt="" width='100%' id='imgLandingPage'/>
            <div id='about'>
                <div id='textAboutUs'>
                    <label className='title'>Sobre Nós</label>
                    <hr />
                    <hr />
                    <label className='text'>Somos uma iniciativa independente comprometida em potencializar o sucesso profissional de profissionais da área fitness e academias que, atualmente, não dispõem de seus próprios aplicativos. Além disso, nosso objetivo principal é guiar nossos usuários que estão no início de sua jornada no mundo fitness, oferecendo-lhes um conhecimento abrangente sobre o assunto e fornecendo assistência para alcançar seu potencial estético máximo.</label>
                </div>
                <img src={HypeCharacterDefault} alt="" id='HypeCharacterDefault' className='images' width={'250px'} height={'auto'}/>  
            </div>
        </div>
        <Footer />
        </>
    )
}

export default LandingPage