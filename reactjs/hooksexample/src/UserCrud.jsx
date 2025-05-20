import React, { useState } from "react";

const UserCrud = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      let res = data.map((i,index)=>{
        if(index==id){
            i.name = name
            i.age = age
            i.salary = salary
        }
        return i
      })
      setData(res);
    } else {
      //insert
      let obj = {
        name: name,
        age: age,
        salary: salary,
      };
      setData([...data, obj]);
    }

    setName("");
    setAge("");
    setSalary("");
    setId("");
  };
  const delData = (id) => {
    //1 2  4 5
    let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);
  };
  const editData = (id) => {
    let res = data.find((i, index) => {
      return index == id;
    });
    console.log(res);
    setName(res.name);
    setAge(res.age);
    setSalary(res.salary);
    setId(id);
  };
  return (
    <div>
      <h3>User Information</h3>
      <form action="#" name="frm" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={handleChange}
        />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input type="submit" value="Save Data" />
      </form>
      <br />
      <br />
      <table border={"2"} cellPadding={"10px"} cellSpacing={"0px"}>
        <caption>User Data</caption>
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
          {data.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserCrud;
