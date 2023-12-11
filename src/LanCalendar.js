import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';


export default function LanCalendar() {

  const [divVisible, setDivVisible] = useState(false);
  
  const handleButtonClick = () => {
      setDivVisible(!divVisible);
    };
  
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [inputEvent, setInputEvent] = useState('');
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:30'); 
  const [editingEvent, setEditingEvent] = useState(null); 

  // 日期變更
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // 新增事件
  const handleAddEvent = () => {
     // 創建新事件物件
    if (inputEvent && startTime && endTime) {

      const newEvent = {
        id: new Date().getTime(),
        date: date.toDateString(),
        content: inputEvent,
        startTime,
        endTime,
      };

      // 更新事件狀態
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setInputEvent('');
      setStartTime('00:00');
      setEndTime('00:30');
      console.log('NEW EVENT!')
      console.log(newEvent);

    }
  };

  // 處理編輯事件
  const handleEditEvent = (eventId) => {
    // 找到要編輯的事件
    const eventToEdit = events.find((event) => event.id === eventId);
    if (eventToEdit) {
      setEditingEvent(eventToEdit);
    }
  };

  // 處理刪除事件
  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  // 保存編輯後的事件
  const handleSaveEdit = (editedEvent) => {
    // 更新事件狀態，保存編輯後的事件
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === editedEvent.id ? editedEvent : event))
      
    );
    console.log('Editing saved!');
    console.log(editedEvent);
    setEditingEvent(null); 
  };
  // 取消編輯事件
  const handleCancelEdit = () => {
    setEditingEvent(null); 
  };

  // 自定義日曆tile內容
  const customTileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = date.toDateString();
      const dateEvents = events.filter((event) => event.date === dateKey);
      if (dateEvents.length > 0) {

        return (
          <>
          <br/>
          <ul>
            {dateEvents.map((event) => (
              <li key={event.id}>
                <div className="event-div">
                  <span className="event-title" >{event.content}</span>
                  <br />
                  <span className="event-time" >Start: {event.startTime}</span>
                  <br />
                  <span className="event-time" >End: {event.endTime}</span>
                  <br />

                    <div className="eventButtonDiv">
                    <button className="eventButton" 
                    onClick={() => handleEditEvent(event.id)}>Edit </button>
                    &nbsp;
                    <button className="eventButton" 
                    onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </div>
                  <hr/>
                </div>
              </li>
            ))}
          </ul>

          </>
        );
      }
    }
    return null;
  };

  return (

  <div className="App">

          <div className="Right-Panel">
          {/* calendar  */}
          <div className="calendar-container">
            <Calendar 
            value={date} 
            onChange={handleDateChange} 
            tileContent={customTileContent} />
          </div>
          <br/>
          </div>





         
            
              
                  <div className="adding-event">
 
                  <h1>{date.toDateString()}</h1>
                  <hr/>
                    <h2>Name :&nbsp;</h2>
                    <input
                      type="text"
                      style={{width: '100%', height: '1.4rem',fontSize:'1.2rem',}}
                      placeholder="Name Plz!" 
                      value={inputEvent}
                      onChange={(e) => setInputEvent(e.target.value)}
                    />
                    <br/>
                   

                    <h2>Time :&nbsp;</h2>
                    
                    
                    <select name="time" id="time" style={{fontSize:'1.2rem', width:'100%'}}>
                    <option >6:00 PM</option>
                    <option >6:30 PM</option>
                    <option >7:00 PM</option>
                    <option >7:30 PM</option>
                    <option >8:00 PM</option>
                    <option >8:30 PM</option>
                    <option >9:00 PM</option>
                    </select>
                  
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
                          We received your booking!  Talk to you soon!  ❤
                    </div>
                </div>
                    
                  </div>
                
            
        







  </div>
  );
}

 
