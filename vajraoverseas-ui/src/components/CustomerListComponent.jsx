import React, {useEffect, useState} from 'react'
import { listCustomers } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom'

const CustomerListComponent = () => {

    const [customers, setCustomers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listCustomers().then((response) =>{
            setCustomers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewCustomer(){
        navigator('/add-customer')
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Customers</h2>
        <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th> Customer Id</th>
                    <th> Customer FirstName</th>
                    <th> Customer MiddleName</th>
                    <th> Customer LastName</th>
                    <th> Customer Contact</th>
                    <th> Customer EmailId</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.middleName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.contact}</td>
                            <td>{customer.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default CustomerListComponent