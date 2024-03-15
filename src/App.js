import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState({
    firstName: ""
  })

  function changeHandler(event){
    const [name, value, checked, type]= event.target;

    setFormData((prev)=>({...prev, [name]: value}));
  }
  return (
    <div className='flex flex-col items-center mt-2'>
      <form>
        <input type='text' placeholder='vaidehi'
        name='firstName' id='firstName' value={formData.firstName}
        onChange={changeHandler}/>
      </form>
    </div>
  );
}

export default App;
