import React from 'react';
import "../App.css";
import Reservation from "../Reservation";


function PrivateEvent() {



    return (
    <>


    <div style={{ width:"70%", 
                  height:"100vh",
                  margin:"0 auto", 
                  paddingTop:"10vh", 
                  textAlign:"center"
    }}>

    <h1  style={{ margin:"2rem 0 0 0"}}>BOOK AN EVENT</h1>
    <p>For all inquiries, please fill out the form below and we will be in touch soon.</p>
    <hr></hr>
    <Reservation />

    </div>




    </>

    );
  };
  
  export default PrivateEvent;