import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apicrud = () => {
    const [allData, setAllData] = useState([])
    const [data, setData] = useState({
        name:"",
        age:""
    })
    const [id, setId] = useState(null)
const disp = ()=>{
    axios.get("http://localhost:3000/users")
        .then((rs)=>setAllData(rs.data))
  }
    useEffect(()=>{
        disp()
    },[])
    const handleChange = (e) => {
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(id){
            const updateData = allData.map((v) => {
                return id === v.id ? data : v
            })
            setAllData(updateData)
        }else{  
            axios.post("http://localhost:3000/users",data)
            .then(()=>console.log("Inserted..."))
        // const createId = allData.length ? allData[allData.length-1].id+1 : 1
        // setAllData([
        //     ...allData,
        //     {...data, id: createId}
        // ])
        }
        disp()
    }
    const handleEdit = (id) => {
        const getData = allData.find((v) => {
            return id === v.id
        })
        setData(getData)
        setId(id)
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/users/"+id)
            .then(()=>console.log("deleted..."))
            disp()
        // const deleteData = allData.filter((v) => {
        //     return id != v.id
        // })
        // setAllData(deleteData)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' value={data.name} onChange={handleChange}/>
        <br />
        <label htmlFor="age">Age</label>
        <input type="number" id='age' name='age' value={data.age} onChange={handleChange}/>
        <br />
        <button type='submit'>Submit</button>
      </form>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                allData.map((v) => {
                    return <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.age}</td>
                        <td>
                            <button onClick={() => handleEdit(v.id)}>Edit</button>
                            <button onClick={() => handleDelete(v.id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Apicrud
