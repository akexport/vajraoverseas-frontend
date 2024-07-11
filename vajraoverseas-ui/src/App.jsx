import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import CustomerListComponent from './components/CustomerListComponent'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CustomerComponent from './components/CustomerComponent'
import HomeComponent from './components/HomeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          //http://localhost:3000
          <Route path='/' element={<HomeComponent />}></Route>
          //http://localhost:3000/customers
          <Route path='/customers' element={<CustomerListComponent />}></Route>
          //http://localhost:3000/add-customer
          <Route path='/add-customer' element={<CustomerComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
