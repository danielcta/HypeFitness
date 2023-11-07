import './landingPage.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import imgLandingPage from '../../assets/imgLandingPage.jpg'
import { Link } from 'react-router-dom';

function LandingPage()
{
    return(
        <>
        <Header />
        <div id='landingPage' className='main'>
            <img src={imgLandingPage} alt="" width={'100%'} height={'auto'}/>
        </div>
        <Footer />
        </>
    )
}

export default LandingPage