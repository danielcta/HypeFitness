import './signUp.css'
import imgLogin from '../../assets/imgLogin.jpg'

function SignUp()
{

    return(
        <>
            <div id='signUp'>
                    <img src={imgLogin} alt="" id='imgLogin' width={'40%'}/>
                <div id='leftSignUp'  height={'100%'} width={'50%'}>
                    <img src="/HypeFitnessLogo.png" alt="" width={'100px'} height={'auto'}/>
                    <div>
                        <label htmlFor="">Email ou número de telefone</label>
                        <br />
                        <input type='text'/>
                    </div>
                    <div>
                        <label htmlFor="">CPF</label>
                        <br />
                        <input type='text'/>
                    </div>
                    <div>
                        <label htmlFor="">Data de nascimento</label>
                        <br />
                        <input type="date" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Senha</label>
                        <br />
                        <input type='text'/>
                    </div>
                    <div>
                        <label htmlFor="">Confirmar senha</label>
                        <br />
                        <input type='text'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp