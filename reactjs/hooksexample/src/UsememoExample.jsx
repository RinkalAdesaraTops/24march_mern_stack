import { useMemo, useState } from "react"

const UsememoExample = () => {
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)
    const addCalcData = (n)=>{
        //calc func called..
        console.log('addcalc called..');
        
        for(let i=0;i<100;i++){
            n = n+i
        }
        return n
    }
    let calc = useMemo(()=>{
       return addCalcData(count)
    },[count])
    const addNum = ()=>{
        console.log('addnum called.');    
        setNum(num+10)
    }
    const addCount = ()=>{
        console.log('addcount called.');
        setCount(count+1)
    }
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={addCount}>Add</button>
      <h3>Number is -- {num}</h3>
      <button onClick={addNum}>Add</button>
        <h3>Calc - is -- {calc}</h3>
    </div>
  )
}
// use callback hook - function freeze, returns memoized function,prevent unnecessary render
// use memo hook - value freeze, returns memoized value,prevent unnecessary rendervalue
export default UsememoExample
