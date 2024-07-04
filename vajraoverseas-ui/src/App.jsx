import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import CustomerListComponent from './components/CustomerListComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          //http://localhost:3000
          <Route path='/' element={<CustomerListComponent />}></Route>
          //http://localhost:3000/customer
          <Route path='/customer' element={<CustomerListComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
