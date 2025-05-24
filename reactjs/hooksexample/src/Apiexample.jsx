import { useEffect, useState } from "react";
import axios from "axios";
const Apiexample = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((rs) =>setData(rs))
  }, []);
  return (
    <div>
      <h3>Api Example</h3>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td><img src={i.image} height={'50px'} width={"50px"}/></td>
                            <td>{i.title}</td>
                            <td>{i.category}</td>
                            <td>{i.price}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Apiexample;
