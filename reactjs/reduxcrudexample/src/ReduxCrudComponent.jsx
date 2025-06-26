import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFunc, delFunc, updFunc } from './crudredux/UserAction'

const ReduxCrudComponent = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const alldata = useSelector((i)=>i.data)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            dispatch(updFunc(id,data))
        } else {
            dispatch(addFunc(data))
        }

        setId('')
        setData({
            name:"",
            age:"",
            salary:""
        })
    }
    const editFunc = (id)=>{
        let res = alldata.find((i,index)=> index == id)
        setData(res)
        setId(id)
    }

  return (
    <div>
      <form action="#" method='post' name='frm' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name} />
        <br/>
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age} />
        <br/>
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="salary" onChange={handleChange} value={data.salary} />
        <br/>
        <button type='submit'>Save</button>
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    
                                    <button onClick={()=>editFunc(index)}>Edit</button>
                                    <button onClick={()=>dispatch(delFunc(index))}>Delete</button></td>
                            </tr>
                        )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default ReduxCrudComponent
