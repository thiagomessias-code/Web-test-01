import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login/login'



export default function MainRoutes() {
    return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
   
</Routes>
    )
}