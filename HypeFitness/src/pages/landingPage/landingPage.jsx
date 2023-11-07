import './landingPage.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import imglandingpage from '../../assets/imglandingpage.svg'
import { Link } from 'react-router-dom';

function LandingPage()
{
    return(
        <>
        <Header />
        <div id='landingPage' className='main'>
            <img src={imglandingpage} alt="" id='imgLandingPage'/>
        </div>
        <Footer />
        </>
    )
}

export default LandingPage