import React, { useState } from 'react'
import { createCustomer } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom' 

const CustomerComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    contact: '',
    email: ''
  })
  const navigator = useNavigate();

  // const handleFirstName = (e) => setFirstName(e.target.value);
  // const handleMiddleName = (e) => setMiddleName(e.target.value);
  // const handleLastName = (e) => setLastName(e.target.value);
  // const handleContact = (e) => setContact(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);

  function saveCustomer(e){
    e.preventDefault();

    if(validateForm()){
      const customer = {firstName, middleName, lastName, contact, email}
      console.log(customer);

      createCustomer(customer).then((response) => {
        console.log(response.data);
        navigator('/customers');
      })
    }
  }

  function validateForm(){
    let valid = true;
    const errorsCopy = {...errors}
    
    if(firstName.trim){
      errorsCopy.firstName = ''
    }else{
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    }

    if(lastName.trim){
      errorsCopy.lastName = ''
    }else{
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if(email.trim){
      errorsCopy.email = ''
    }else{
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
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
                      className={`form-control ${errors.firstName ? 'is-valid':''}`}
                      onChange={(e) => setFirstName(e.target.value)}></input>
                      {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
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
                      className={`form-control ${errors.lastName ? 'is-valid':''}`}
                      onChange={(e) => setLastName(e.target.value)}></input>
                      {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
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
                      className={`form-control ${errors.email ? 'is-valid':''}`}
                      onChange={(e) => setEmail(e.target.value)}></input>
                      {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
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