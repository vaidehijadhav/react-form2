import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData]= useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "", 
    comments: false, candidates: false, offers: false,
    pushNotifications: ""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;

    setFormData(prev => ({
      ...prev, 
      [name]: type === "checkbox" ? checked : value,
  }));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of form data");
    console.log(formData);
  };

  return (
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input type='text' placeholder='vaidehi'
        name='firstName' id='firstName' value={formData.firstName}
        onChange={changeHandler}
        className='outline'/>

        <br/>

        <label htmlFor='lastName'>Last Name</label>
        <br/>
        <input type='text' placeholder='Jadhav'
        name='lastName' id='lastName' value={formData.lastName}
        onChange={changeHandler}
        className='outline'/>

        <br/>

        <label htmlFor='email'>Email Address</label>
        <br/>
        <input type='text' placeholder='vaidehi@gmail.com'
        name='email' id='email' value={formData.email}
        onChange={changeHandler}
        className='outline'/>

        <br/>
        <label htmlFor='country'>Country</label>
        <br/>
        <select id='country'
        name='country' value={formData.country}
        onChange={changeHandler}
        className='outline'>

            <option>India</option>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
        </select>

        <br/>

        <label htmlFor='streetAddress'>Street Address</label>
        <br/>
        <input type='text' placeholder='B-2c'
        name='streetAddress' id='streetAddress' value={formData.streetAddress}
        onChange={changeHandler}
        className='outline'/>

        <br/>

        <label htmlFor='city'>City</label>
        <br/>
        <input type='text' placeholder='Pune'
        name='city' id='city' value={formData.city}
        onChange={changeHandler}
        className='outline'/>

        <br/>

        <label htmlFor='state'>State / Province</label>
        <br/>
        <input type='text' placeholder='Maharashtra'
        name='state' id='state' value={formData.state}
        onChange={changeHandler}
        className='outline'/>

        <br/>

    
        <label htmlFor='postalCode'>ZIP / Postal Code</label>
        <br/>
        <input type='text' placeholder='415002'
        name='postalCode' id='postalCode' value={formData.postalCode}
        onChange={changeHandler}
        className='outline'/>

        <br/>

        {/* fieldset is used to group so many elements together */}
        <fieldset>                            
          <legend>By Email</legend>
          <div className='flex'>
            <input id='comments' name='comments' type='checkbox' 
            checked={formData.comments} onChange={changeHandler} />

            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someonces posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex'>
            <input id='candidates' name='candidates' type='checkbox' 
            checked={formData.candidates} onChange={changeHandler} />

            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a  candidate applies for a job.</p>
            </div>
          </div>

          <div className='flex'>
            <input id='offers' name='offers' type='checkbox' 
            checked={formData.offers} onChange={changeHandler} />

            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a  candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <br/>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
          type='radio'
          id='pushEverything' name='pushNotifications'
          value='Everything'
          onChange={changeHandler}/>

          <label htmlFor='pushEverything'>Everything</label>

          <br/>

          <input
          type='radio'
          id='pushEmail' name='pushNotifications'
          value='Same as email'
          onChange={changeHandler}/>

          <label htmlFor='pushEmail'>Same as email</label>

          <br/>
          <input
          type='radio'
          id='pushNothing' name='pushNotifications'
          value='No push notifications'
          onChange={changeHandler}/>

          <label htmlFor='pushNothing'>No push notification</label>
        </fieldset>

        <button
        className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
      </form>
    </div>
  );
}

export default App;
