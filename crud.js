let userdata = []
//insert display 
const savedata = ()=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    let len = alldata!=null ? alldata.length+1 : 1
    let a = document.getElementById("name").value
    let b = document.frm.age.value
    let id = document.frm.userid.value
    if(id!=''){
        //update
        let res = alldata.map((i)=>{
            if(i.id == id){
                i.name = a
                i.age = b
            }
            return i
        })
        userdata = res
    } else {
        //insert
        let obj = {
            id:len,
            name:a,
            age:b
        }
        userdata.push(obj)
    }
   
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
                <td>
                    <button onclick="editData(${i.id})">Edit</button>
                    <button onclick="delData(${i.id})">Delete</button>
                </td>
                </tr>`
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    // delete a[2]
    //1 2  4 5 - id - 3
    let res = alldata.filter((i)=>{
            return i.id != id
    })
    localStorage.setItem('userdata',JSON.stringify(res))
    dispData()
}
const editData = (id)=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    //1 2  4 5 - id - 3
    let res = alldata.find((i)=>{
            return i.id == id
    })
    document.frm.name.value = res.name
    document.frm.age.value = res.age
    document.frm.userid.value = res.id
}
dispData()
// [{}]