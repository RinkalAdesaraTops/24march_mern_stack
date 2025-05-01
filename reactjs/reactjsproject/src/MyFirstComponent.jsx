import styled from "styled-components"
import mystyle from './Mystyle.module.css'
const MyFirstComponent = ({myname,myage})=>{
    
    const H4 = styled.h4 `
                color:red
                `
    // const Div
    return (
        <>
        <div>
            <h3>My First Component Created...</h3>
            {/* <h4>My Name is -- {props.myname}</h4> */}
            <H4>My Name is -- {myname}</H4>
            {/* <h4>My Age is -- {props.myage}</h4> */}
            <h4>My Age is -- {myage}</h4>
        </div>
        <div className={mystyle.box}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laborum rem sint asperior</div>
        </>
    )
}
export default MyFirstComponent