let userdata = []
//insert display 
const savedata = ()=>{
    let a = document.getElementById("name").value
    let b = document.frm.age.value
    let obj = {
        id:1,
        name:a,
        age:b
    }
    userdata.push(obj)
    console.log(userdata);
    localStorage.setItem('userdata',JSON.stringify(userdata))
}
// [{}]