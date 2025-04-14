let alldata = []
const savedata = ()=>{
    let a = document.getElementById('name').value
    let id = document.getElementById('userid').value
    let b= document.getElementById('age').value
    let tbldata = localStorage.getItem('userinfo')
    let data = JSON.parse(tbldata)
    let len = data!=null ? data.length+1 : 1
    if(id != ''){
        //update 
        let res=alldata.map((i)=>{
            if(i.id == id){
                i.name = a
                i.age = b
            }
            return i
        })
        alldata = res
    } else {
        let obj = {
            id:len,
            name:a,
            age:b
        }
        alldata.push(obj)
    }
    
    localStorage.setItem('userinfo',JSON.stringify(alldata))
    document.frm.reset()
    dispData()
}
const dispData = ()=>{
    let tbldata = localStorage.getItem('userinfo')
    let a = JSON.parse(tbldata)
    // tableData
    let tr = ''
    a.map((i)=>{
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>
                <button onclick="editData(${i.id})">Edit</button>
                <button onclick="delData(${i.id})">Delete</button>
                </td>              
        </tr>
        `
    })
    document.getElementById('tableData').innerHTML = tr
}
const delData = (id)=>{
    let tbldata = localStorage.getItem('userinfo')
    let a = JSON.parse(tbldata)
    let res = a.filter((i)=>{
            return i.id != id
    })
    localStorage.setItem("userinfo",JSON.stringify(res))
    dispData()
}
const editData = (id)=>{
    let tbldata = localStorage.getItem('userinfo')
    let a = JSON.parse(tbldata)
    let res = a.find((i)=>{
            return i.id == id
    })
    document.getElementById('name').value = res.name
    document.getElementById('age').value = res.age
    document.getElementById('userid').value = res.id
}
dispData()