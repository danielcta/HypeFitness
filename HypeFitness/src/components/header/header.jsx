import './header.css'
import '../../../public/HypeFitnessLogo.png'
import { Link } from 'react-router-dom'

function Header()
{
    return(
        <>
        <header>            
            <div id='rightHeader'>
                <Link to={'/'}><img src="/HypeFitnessLogo.png" alt="" className='logoHeader' width={'auto'} height={'50px'}/></Link>
                <nav>
                   <Link className={'links'} to='/OurServices'>Nossos Serviços</Link>        
                   <Link className={'links'} to='/PartnerGyms'>Academias Parceiras</Link>         
                   <Link className={'links'} to='/'>Consultoria</Link>
                   <Link className={'links'} to='/'>Nutrição</Link>
                   <Link className={'links'} to='/'>Personal</Link>
                   <Link className={'links'} to='/'>Exercício</Link>
                </nav>
                </div>
                <div id='buttons'>
                    <Link to={'/Login'} className='button' id='btnLogin'>Login</Link>
                    <Link to={'/SignUp'} className='button' id='btnSignUp'>Cadastrar</Link>
                </div>
            
            </header>
        </>
    )
}

export default Header