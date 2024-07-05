import React, { useState } from 'react'
import { createCustomer } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom' 

const CustomerComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  const navigator = useNavigate();

  // const handleFirstName = (e) => setFirstName(e.target.value);
  // const handleMiddleName = (e) => setMiddleName(e.target.value);
  // const handleLastName = (e) => setLastName(e.target.value);
  // const handleContact = (e) => setContact(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);

  function saveCustomer(e){
    e.preventDefault();

    const customer = {firstName, middleName, lastName, contact, email}
    console.log(customer)

    createCustomer(customer).then((response) => {
      console.log(response.data);
      navigator('/customers')
    })
  }
  return (
    <div className='container'>
      <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Customer</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input type='text'
                      placeholder='Enter Customer First Name'
                      name='firstName'
                      value={firstName}
                      className='form-control'
                      onChange={(e) => setFirstName(e.target.value)}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Middle Name</label>
                <input type='text'
                      placeholder='Enter Customer Middle Name'
                      name='middleName'
                      value={middleName}
                      className='form-control'
                      onChange={(e) => setMiddleName(e.target.value)}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input type='text'
                      placeholder='Enter Customer Last Name'
                      name='lastName'
                      value={lastName}
                      className='form-control'
                      onChange={(e) => setLastName(e.target.value)}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Contact</label>
                <input type='text'
                      placeholder='Enter Customer Contact'
                      name='contact'
                      value={contact}
                      className='form-control'
                      onChange={(e) => setContact(e.target.value)}></input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>email</label>
                <input type='password'
                      placeholder='Enter Customer Email'
                      name='email'
                      value={email}
                      className='form-control'
                      onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <button className='btn btn-success' onClick={saveCustomer}>Submit</button>
            </form>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CustomerComponent