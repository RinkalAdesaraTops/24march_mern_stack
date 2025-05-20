import { useState } from "react";

const EmpCrud = () => {
    const [data, setData] = useState({
        name: "",
        age: ""
    });
    const [id,setId] = useState('')
    const[alldata,setAllData] = useState([])
    const handleChange = (e) => {
        const {name,value} = e.target
        // let n = e.target.name; //name age
        // let val = e.target.value; //uerit 47
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            let res = alldata.map((i,index)=>{
                if(index == id){
                    i = data
                }
                return i
            })
            setAllData(res)
        } else {
        setAllData([
            ...alldata,
            data
        ])
        }
        
        setId('')
        setData({
            name:'',
            age:''
        })
    }
    const delData = (id)=>{
        let res = alldata.filter((i,index)=>{
                return index != id
        })
        setAllData(res)
    }
    const editData = (id)=>{
    let res = alldata.find((i,index)=>{
                return index == id
        })
        setData(res)
        setId(id)
    }
  return (
    <div>
      <h3>Employee Crud Example</h3>

        <form action="#" method="post" onSubmit={saveData}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={data.name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={data.age} onChange={handleChange}/>
            </div>
            <button type="submit">Save</button>
        </form>
        <br /><br />
        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
            {
                alldata.map((i,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default EmpCrud
