import './partnerGyms.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import HypeCharacterDefault from '../../assets/HypeCharacterDefault.png'

function PartnerGyms()
{
    return(
        <>
        <Header />
        <div className='main'>
            <label className='title' id="lblPartnerGyms">Academia Parceiras</label>
            <div className='container'>        
              <label id='GymName'>GymPro</label>
              <label id='GymAdress'>Rua Major Fulano, 587 - Sagrada Família</label>
              <img src={HypeCharacterDefault} alt="" id='gymDrawing' className='images' width={'150px'}/>
            </div>
            <hr className='hrOurServices'/>
        </div>
        <Footer />
        </>
    )
}

export default PartnerGyms