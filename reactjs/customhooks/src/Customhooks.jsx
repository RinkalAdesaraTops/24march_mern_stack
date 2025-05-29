import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useFetch from './useFetch'
const Customhooks = () => {
    const [data] = useFetch("https://fakestoreapi.com/users")
    const [prdata] = useFetch("https://fakestoreapi.com/products")
    // localstorage 
    // useEffect(()=>{
    //     axios.get("https://fakestoreapi.com/products")
    //         .then((res)=>setPrData(res.data))
    //     axios.get("https://fakestoreapi.com/users")
    //         .then((res)=>setData(res.data))

    // })
    return (
    <div>
      <h3>Product List</h3>
      <table border={'2'}>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
            </tr>
            {
                prdata.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.category}</td>
                            <td>{i.price}</td>
                        </tr>
                    )
                })
            }
      </table>
      <h3>User List</h3>
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Customhooks
