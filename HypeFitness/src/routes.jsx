import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Services from './pages/services/services'

function AppRoutes()
{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/Services' element={<Services />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes