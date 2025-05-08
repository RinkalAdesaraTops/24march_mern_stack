import { Component } from "react";

class LifecycleClass extends Component{
    
    constructor(props){
        console.log('constructor called...');
        super()
        this.state={
            count:0
            // name:props.name
        }
    }
    componentDidMount(){
        console.log('componentDidMount called...');
        setTimeout(()=>{
            this.setState({
                count:11
            })
        },2000)
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps called...');
        console.log("state is ");        
        console.log(state.count);
        console.log("props is ");
        console.log(props.name);
        return null
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called...');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate called...');
        console.log("prevState is ");       
        console.log(prevState);
        
        return null
    }
    componentDidUpdate(){
        console.log("finally component updated");
        
    }
    render(){
        console.log('render called...');
        
        return (
            <>
            <div>Class Component called...</div>
            <h3>Count is -- {this.state.count}</h3>
            <h3>Name is -- {this.props.name}</h3>
            </>
        )
    }
    
}
export default LifecycleClass;