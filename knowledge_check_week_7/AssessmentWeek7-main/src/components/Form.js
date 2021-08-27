import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PERMISSIONS = ['Yes', 'No'];

const handleSubmit=(e) => {
  e.preventDefault()
  const name=e.target.name.value;
  const email = e.target.email.value;
  const age = e.target.age.value;
  const date = e.target.date.value;
  // const option = e.target.option.value
  console.log("name : " + name, "\n" , "email : " + email, "\n" ,
   "age : " + age, "\n",  "date: " + date, )
}

const RegisterYourApplicationForm = () => {
    const [date, setDate] = useState(new Date());

  return (
    <form onSubmit = {handleSubmit}>
      <h2>Please Register for our next Event</h2>

      <label>Name*:</label>
      <input type="text" required placeholder="Name" name= "name"/>

      <label>Email*:</label>
      <input type="email" required placeholder="Email"name= "email"/>

      <label>Age*:</label>
      <input type="number" required min="0" placeholder="Age" name= "age"/>

      <label>Select a Date*:</label>
      <DatePicker required placeholderText="Select Date" selected={date} onChange={date => setDate(date)} name= "date"/>

      <label>About us*:</label>
      <select required>
        <option value="option" >Do you want to receive Techtonica's Newsletter</option>
        {PERMISSIONS.map(preference => <option key={preference}>{preference}</option>)}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterYourApplicationForm;