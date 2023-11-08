import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import OurServices from './pages/ourServices/ourServices'
import PartnerGyms from './pages/partnerGyms/partnerGyms'
import SignUp from './pages/signUp/signUp'

function AppRoutes()
{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/OurServices' element={<OurServices />}></Route>
                <Route path='/PartnerGyms' element={<PartnerGyms />}></Route>
                <Route path='/SignUp' element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes