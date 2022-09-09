import './App.css';
import CountdownTimer from './countdownTimer';
import PersonData from './personsData';
import {useState} from 'react'
function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    submitted: false
})
 
  
  return (
    <div className="app">
      {!data.submitted ?<PersonData data={data} setData={setData} /> : null}
      
      
      {data.submitted?<CountdownTimer data={data} />:null}
      
 
   </div>
  );
}

export default App;
