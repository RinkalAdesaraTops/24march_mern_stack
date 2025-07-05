import React, { useState,useEffect } from 'react'
import {db} from './firebase'
import { addDoc, collection, deleteDoc, onSnapshot, query,doc, getDoc, updateDoc } from 'firebase/firestore'
const FirebaseExample = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [alldata,setAlldata] = useState([])
    const [id,setId] = useState('')
    useEffect(()=>{
        const q = query(collection(db,"users"))
        const unsub = onSnapshot(q,(i)=>{
            const arr = []
            i.forEach((j)=>{
                arr.push({
                    ...j.data(),
                    id:j.id
                })
            })
            setAlldata(arr)
        })
        return ()=>unsub()
    },[])
    /*
    {
        name:name,
        age:jfdgb,
        salary:sdjfgdsf,
    }

    */
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        if(id!=''){
            await updateDoc(doc(db,"users",id),data)
        } else {
            await addDoc(collection(db,"users"),data)
        }
        setData({
            name:"",
            age:"",
            salary:""
        })
        setId('')
    }
    const delData = async(id)=>{
        await deleteDoc(doc(db,"users",id))
    }  
    const editData = async(id)=>{
        let res = await getDoc(doc(db,"users",id))
        console.log(res.data());
        setData(res.data())
        setId(id)
    }  
  return (
    <div>
      <h3>CRUD Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" value={data.salary} onChange={handleChange} />
        <br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" value={data.age} onChange={handleChange} />
        <br /><br />
        <input type="submit"  value="Save Data" />
        <br /><br />
      </form>
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
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>
                                <button onClick={()=>editData(i.id)}>Edit</button>
                                <button onClick={()=>delData(i.id)}>Delete</button>
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

export default FirebaseExample
