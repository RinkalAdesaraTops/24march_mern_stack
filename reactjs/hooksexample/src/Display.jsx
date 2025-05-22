import { memo } from "react";

const Display = ({alldata}) => {
    console.log("display component called..");
    
  return (
    <div>
      <h3>Display Emp</h3>
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

export default memo(Display)
