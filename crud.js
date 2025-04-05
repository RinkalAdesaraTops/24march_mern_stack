let userdata = []
//insert display 
const savedata = ()=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    let len = alldata!=null ? alldata.length+1 : 1
    let a = document.getElementById("name").value
    let b = document.frm.age.value
    let obj = {
        id:len,
        name:a,
        age:b
    }
    userdata.push(obj)
    console.log(userdata);
    localStorage.setItem('userdata',JSON.stringify(userdata))
    dispData()
    // document.frm.age.value = ''
    // document.frm.name.value = ''
    document.frm.reset()
}
const dispData = ()=>{
    // let data = localStorage.getItem('userdata')
    // let alldata = JSON.parse(data)
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    let tr = ''
    alldata.map((i)=>{
        //template literal
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>Delete</td>
                </tr>`
    })
    document.getElementById('alldata').innerHTML = tr
}
dispData()
// [{}]