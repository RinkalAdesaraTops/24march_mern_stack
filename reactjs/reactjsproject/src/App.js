import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import StateExample from './StateExample';
import BootstrapExample from './BootstrapExample';
import MaterialUIExample from './MaterialUIExample';
import FirebaseExample from './FirebaseExample';

function App() {
  let a=10
  const name="Rinkal"
  let age =25
  return (
    <div className="App">
      {/* <h3>My First React Project</h3>
      <h4>A is -- {a}</h4>
      <h4>Name is -- {name}</h4>
      <h4>Addition is -- {2+4}</h4>*/}
      {/* <MyFirstComponent myname={name} myage={age} />  */}
      {/* <StateExample /> */}
      {/* <BootstrapExample /> */}
      {/* <MaterialUIExample /> */}
      <FirebaseExample />
    </div>
  );
}
export default App;
