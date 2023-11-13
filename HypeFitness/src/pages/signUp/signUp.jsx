import './signUp.css'
import imgSignIn from '../../assets/imgSignIn.png'
import imgBronzeSignature from '../../assets/bronzeSignature.png'
import imgSilverSignature from '../../assets/silverSignature.png'
import imgGoldSignature from '../../assets/goldSignature.png'
import imgHypeSignature from '../../assets/hypeSignature.png'
function SignUp() {
    
    function SelectRegisterType() 
    {

        const registerType = document.getElementById('registerType').value;
        const userRegister = document.getElementById('UserRegister');
        const gymSignatures = document.getElementById('GymSignatures');

        if (registerType === "UserRegister") 
        {
            userRegister.style.display = 'block';
            gymSignatures.style.display = 'none';
        } 
        else if (registerType === "GymRegister") 
        {
            userRegister.style.display = 'none';
            gymSignatures.style.display = 'block';
        }
    }


    return (
        <>
            <div id='signUp'>
                <img src={imgSignIn} alt="" id='imgSignIn' height={'100%'} width={'39.59%'} />
                <div id='leftSignUp'>
                    <img src='/HypeFitnessLogo.png' alt="" width={'150px'} className='logo' />
                    <div className='divData'>
                        <select name="" id="registerType" className='inputData' onChange={SelectRegisterType}>
                            <option value="UserRegister">Cadastro de Usuário/Profissional</option>
                            <option value="GymRegister">Cadastro de Academia</option>
                        </select>
                    </div>
                    <div id='UserRegister'>
                        <div className='divData'>
                            <label>Email</label>
                            <br />
                            <input type='text' id='txtEmail' className='inputData' />
                        </div>
                        <div className='divData'>
                            <label>CPF</label>
                            <br />
                            <input type='text' id='txtCPF' className='inputData' />
                        </div>
                        <div className='divData'>
                            <label>Data de nascimento</label>
                            <br />
                            <input type="date" name="" id="txtBirthDay" className='inputData' />
                        </div>
                        <div className='divData'>
                            <label>Senha</label>
                            <br />
                            <input type="password" name="" id="txtPassword" className='inputData' />
                        </div>
                        <div className='divData'>
                            <label>Confirmar senha</label>
                            <br />
                            <input type='password' id='txtConfirmPassword' className='inputData' />
                        </div>
                    </div>
                    <div id='GymSignatures'>
                        <img src={imgBronzeSignature} alt="" width={'250px'} height={'auto'} />
                        <img src={imgSilverSignature} alt="" width={'250px'} height={'auto'} />
                        <img src={imgGoldSignature} alt="" width={'250px'} height={'auto'} />
                        <img src={imgHypeSignature} alt="" width={'250px'} height={'auto'} />
                    </div>
                    <input type="submit" value="Cadastrar" className='button' id='btnSignUp-SignUpPage' />
                </div>
            </div>
        </>
    )
}

export default SignUp