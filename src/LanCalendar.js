import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';


export default function LanCalendar() {

  const [divVisible, setDivVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(new Date());
  
  const handleButtonClick = () => {
    if (validateName(name) && validatePhoneNumber(phoneNumber)) {
      setDivVisible(!divVisible); 
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
  };
  
  
  


  return (

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
                  

                  <select name="time" id="time" style={{fontSize:'1.2rem', width:'50%', height:"1.5rem"}}>
                    <option >6:00 PM</option>
                    <option >6:30 PM</option>
                    <option >7:00 PM</option>
                    <option >7:30 PM</option>
                    <option >8:00 PM</option>
                    <option >8:30 PM</option>
                    <option >9:00 PM</option>
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
                   

                    <br/><br/>
                
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                  <button onClick={handleButtonClick}
                    className='hover'
                    style={{
                    fontSize:"1.2rem",
                    fontFamily: "Cormorant Garamond, cursive",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ffffff",
                    borderRadius: "2rem"
                    }}>
                        BOOK
                  </button>

                  <div style={{     
                        display: divVisible ? 'block' : 'none'}}>
                        ❤ Received your booking!  Talk to you soon!  ❤
                    </div>
                </div>
                    
            </div>
                

  </div>
  );
}

 
