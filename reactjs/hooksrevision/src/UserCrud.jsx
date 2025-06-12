import React, { useCallback, useState } from "react";
import Display from "./Display";

const UserCrud = () => {
  console.log('user crud called..');
  
  let [alldata, setAlldata] = useState([])
  const [data, setData] = useState({ name: "", age: "" });
  const [id, setId] = useState(null);
  const addData = useCallback((e) => {
    e.preventDefault();
    setAlldata([...alldata, data]);
    setData({ name: "", age: "" })
  },[data])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <form action="#" name="frm" onSubmit={addData} method="post">
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Enter Your Name"
          value={data.name}
        />
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          placeholder="Enter Your Age"
          value={data.age}
        />
        <button type="submit">Add</button>
      </form>
      <Display alldata={alldata}/>
    </div>
  );
};

export default UserCrud;
