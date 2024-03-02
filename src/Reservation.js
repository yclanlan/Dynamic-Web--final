import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import  { database } from "./firebase";
import { set, ref } from "firebase/database";



export default function Reservation() {


      // Push Function
      function Push() {
        set(ref(database,'/post' + name),{
          name: name,          
          phoneNumber: phoneNumber,
          message: message,
          date: dateString,
          time: time,
        });
    }
  

  const [divVisible, setDivVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateString,setDateString] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  
  
  const handleButtonClick = () => {
    if (validateName(name) && validatePhoneNumber(phoneNumber)) {
      setDivVisible(!divVisible); 
      console.log(
          dateString +
          time +
          name +
          phoneNumber +
          message)

      Push();
    } else { 
      alert('Type the correct name and phone number.');
    }
    };

    const validateName = (inputName) => {
      return inputName.trim() !== ''; 
    };

    const validatePhoneNumber = (inputPhoneNumber) => {
      return inputPhoneNumber.trim() !== '' && /^\d{10}$/.test(inputPhoneNumber);
    };

  
     const handleDateChange = (newDate) => {
      setDate(newDate);
      // console.log(newDate);
      setDateString(newDate.toDateString());
      
      console.log(dateString);
      
    };
    
  
  


  return (
    <>

  <div className="calendar-App">
          <div className="calendar-Panel">
          <div className="calendar-container">
            <Calendar 
            height={"100%"}
            value={date} 
            onChange={handleDateChange} />

          </div>
          <br/>
          </div>


          <div className="adding-event">
                  <h2>Select Time :</h2>
                  <hr/>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <h2 style={{fontSize:"2.125rem"}}>{date.toDateString()}</h2>
                  

                  <select name="time" id="time" onChange={(e) => setTime(e.target.value)}
                  style={{fontSize:'1.2rem', width:'50%', height:"1.5rem"}}>
                    <option value="600">6:00 PM</option>
                    <option value="630">6:30 PM</option>
                    <option value="700">7:00 PM</option>
                    <option value="730">7:30 PM</option>
                    <option value="800">8:00 PM</option>
                    <option value="830">8:30 PM</option>
                    <option value="900">9:00 PM</option>
                    </select>
                  </div>
                 
                    <h2>Name :&nbsp;</h2>
                    <input
                      type="text"
                      style={{width: '100%', height: '1.4rem',fontSize:'1.1rem',}}
                      placeholder="" 
                      onChange={(e) => setName(e.target.value)}
                    />
                    <br/>

                    <h2>Phone Number</h2>
                    <input
                      type="tel"
                      style={{width: '100%', height: '1.4rem',fontSize:'1.2rem',}}
                      placeholder=" " 
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <br/>

                    <h2>Leave a Message</h2>
                    <input
                    style={{width: '100%', height: '1.4rem',fontSize:'1.2rem',}}
                      placeholder=" " 
                      onChange={(e) => setMessage(e.target.value)}
                      />
                   

                    <br/><br/>
                
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                </div>
 
          </div>
                

  </div>
              <button onClick={handleButtonClick}
                 className='hover'
                 style={{
                 fontSize:"1.5rem",
                 padding: "0.5rem 1rem",
                 border: "1px solid #ffffff",
                 borderRadius: "2rem"
                 }}>
                     BOOK
               </button>

               <br/>

               <div style={{     
                     display: divVisible ? 'block' : 'none'}}>
                     ❤ Received your booking!  Talk to you soon!  ❤
                 </div>


                 </>

                 
  );
}

 
