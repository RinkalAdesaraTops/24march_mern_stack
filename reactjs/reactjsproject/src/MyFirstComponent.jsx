const MyFirstComponent = ({myname,myage})=>{
    return (
        <div>
            <h3>My First Component Created...</h3>
            {/* <h4>My Name is -- {props.myname}</h4> */}
            <h4>My Name is -- {myname}</h4>
            {/* <h4>My Age is -- {props.myage}</h4> */}
            <h4>My Age is -- {myage}</h4>
        </div>
    )
}
export default MyFirstComponent