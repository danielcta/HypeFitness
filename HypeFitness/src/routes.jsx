import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Services from './pages/services/services'
import SignUp from './pages/signUp/signUp'

function AppRoutes()
{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/Services' element={<Services />}></Route>
                <Route path='/SignUp' element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes