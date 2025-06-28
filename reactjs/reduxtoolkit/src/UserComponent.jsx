import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add, del, upd } from './CrudRTK/UserReducer'

const UserComponent = () => {
    const [data,setData] = useState({
      name:'',
      age:'',
      salary:''
    })
    const [id,setId] = useState('')
    const alldata =  useSelector((i)=>i.user.data)
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
          ...data,
          [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!='')
          dispatch(upd({id,data}))
        else 
          dispatch(add(data))
    }
    const editData = (id)=>{
      let res = alldata.find((i,index)=> index == id)
      setData(res)
      setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/> <br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age}/> <br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="salary" onChange={handleChange} value={data.salary}/> <br />
        <input type="submit" value="SaveData" />
      </form>
      <br /><br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
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
                        <button onClick={()=>editData(index)}>Edit</button>
                        <button onClick={()=>dispatch(del(index))}>Delete</button>
                      </td>
                    </tr>
                  )
              })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UserComponent
