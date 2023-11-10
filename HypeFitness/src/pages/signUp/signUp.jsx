import './signUp.css'
import imgSignIn from '../../assets/imgSignIn.png'

function SignUp() {

    return (
        <>
            <div id='signUp'>
                <img src={imgSignIn} alt="" id='imgSignIn' height={'100%'} width={'39.59%'} />
                <div id='leftSignUp'>
                    <img src='/HypeFitnessLogo.png' alt="" width={'150px'} className='logo' />
                    <div className='divData'>
                        <select name="" id="registerType" className='inputData'>
                            <option value="UserRegister">Cadastro de Usuário/Profissional</option>
                            <option value="GymRegister">Cadastro de Academia</option>
                        </select>
                    </div>
                    <div id='UserRegister'>
                        <div className='divData'>
                            <label htmlFor="">Email</label>
                            <br />
                            <input type='text' id='txtEmail' className='inputData' />
                        </div>
                        <div className='divData'>
                            <label htmlFor="">CPF</label>
                            <br />
                            <input type='text' id='txtCPF' className='inputData' />
                        </div>
                        <div className='divData'>
                            <label htmlFor="">Data de nascimento</label>
                            <br />
                            <input type="date" name="" id="txtBirthDay" className='inputData' />
                        </div>
                        <div className='divData'>
                            <label htmlFor="">Senha</label>
                            <br />
                            <input type="password" name="" id="txtPassword" className='inputData' />
                        </div>
                        <div className='divData'>
                            <label htmlFor="">Confirmar senha</label>
                            <br />
                            <input type='password' id='txtConfirmPassword' className='inputData' />
                        </div>
                    </div>
                    <div id='GymRegister'>
                    
                    </div>
                    <input type="submit" value="Cadastrar" className='button' id='btnSignUp-SignUpPage' />      
                </div>
            </div>
        </>
    )
}

export default SignUp