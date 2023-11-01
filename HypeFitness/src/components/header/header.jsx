import './header.css'
import '../../../public/HypeFitness-logo.png'

function Header()
{
    return(
        <>
        <header>
            <img src="/HypeFitness-logo.png" alt="" className='logo' width={'auto'} height={'50px'}/>
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
        </>
    )
}

export default Header