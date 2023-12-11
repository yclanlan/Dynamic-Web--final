import React, { useState } from 'react';
import "../App.css";
import LanCalendar from "../LanCalendar";


function PrivateEvent() {


    return (
    <>


    <div style={{ width:"70%", 
                  height:"100vh",
                  margin:"auto", 
                  paddingTop:"20rem", 
                  textAlign:"center"
    }}>

    <h1>BOOK AN EVENT</h1>
    <p>For all inquiries, please fill out the form below and we will be in touch soon.</p>

    <LanCalendar />

    </div>




    </>

    );
  };
  
  export default PrivateEvent;