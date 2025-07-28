import {BrowserRouter as  Router , Route,Routes,Navigate } from 'react-router'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expenses from './pages/Dashboard/Expenses'
import Error from './pages/Error/Error'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Root />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/dashboard' element={<Home/>} />
            <Route path='/income' element={<Income/>} />
            <Route path='/expenses' element={<Expenses/>} />

            <Route path='*' element={<Error />} />
        </Routes>

      </Router>
    </>
  )
}

export default App


const Root = () =>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to={'/dashboard'}/> ): (<Navigate to={'/login'}/>)
}