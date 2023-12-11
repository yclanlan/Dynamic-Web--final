import React, { useState } from 'react';


export default function Order() {

  const [orders, setOrders] = useState({});
  
  const wines = [

    { id: 1, name: 'Long Island Tea', price:15},
    { id: 2, name: 'Cuba Libre', price:15},
    { id: 3, name: 'Whisky Sour', price:15},
    { id: 4, name: 'Mojito', price:15},
    { id: 5, name: 'Gin tonic', price:15},
    { id: 6, name: 'Daiquiri', price:15},
    { id: 7, name: 'Margarita', price:15},
    { id: 8, name: 'Gimlet', price:15},
    { id: 9, name: 'White Lady', price:15},
    { id: 10, name: 'Pink Lady', price:15},
    { id: 11, name: 'Tequila Sunrise', price:15},
    { id: 12, name: 'BACADI', price:15},
    { id: 13, name: 'XYZ', price:15},
    { id: 14, name: 'New York Sour', price:15},
    { id: 15, name: 'B52(shot)', price:15},
    { id: 16, name: 'Mr.Tea', price:15},
    { id: 17, name: 'Tiramisu', price:15},
    { id: 18, name: 'Choco Cake', price:15},
    { id: 19, name: 'Mr. Sanders', price:15},

  ];


  const [divVisible, setDivVisible] = useState(false);
  
  const handleButtonClick = () => {
      setDivVisible(!divVisible);
    };

    const handleOrderChange = (wineId, quantity) => {
      setOrders((prevOrders) => {
        const newQuantity = (prevOrders[wineId] || 0) + quantity;
  
    
        const updatedOrders = {
          ...prevOrders,
          [wineId]: Math.max(newQuantity, 0),
        };
  
        return updatedOrders;
      });
    };

  const totalCups = Object.values(orders).reduce((total, cups) => total + cups, 0);


  return (
    <>
    <div style={{fontSize:"2rem" , width:"50%", margin:"auto" }}>
        <br/>
      <h2>Let's Order!</h2>
      
      {wines.map((wine) => (
      <div style={{   
         display: "flex", 
         flexDirection:"column", }}> 

            <div key={wine.id} style={{  
                display: "flex", 
                flexDirection:"row", 
                alignItems:"flex", 
                justifyContent:"space-between",
                fontSize:"1.4rem",
                
                // paddingTop: "1rem",
                paddingLeft: "2rem",
                paddingRight: "2rem", 
                }}>

                    <div >
                    {wine.name}. — ${wine.price}
                    </div>

                    <div style={{
                        display: "flex", 
                        flexDirection:"row"  }}>

                    <button className="hover"

                    style={{ 
                        width: "2rem",
                   
                        border: "1rem",
                        borderRadius: "1rem",}}

                        onClick={() => handleOrderChange(wine.id, -1)} >
                        －

                    </button>

                        <div style={{ 
                        width: "2rem",
                        fontSize:"1.6rem",}}
                        >
                        {orders[wine.id] || 0}
                        </div>
                   
                    <button  style={{ 
                        width: "2rem",
                 
                        border: "1rem",
                        borderRadius: "1rem",
                      }}

                    className="hover"
                    
                    onClick={() => handleOrderChange(wine.id, 1)}>
                      ＋</button>
                    </div>
              
            </div>
          <div>
          <hr style={{ borderColor:"rgb(255,255,255,0.3)"}} /> 
          </div>               
        
        
        </div>
        ))
        }




        <br/>
        <button onClick={handleButtonClick}
                className='hover'
                style={{
                fontSize:"1.5rem",
                fontFamily: "Cormorant Garamond, cursive",
                padding: "1rem 2rem",
                border: "1px solid #ffffff",
                borderRadius: "2rem"
                }}>
                    CHECK OUT
        </button>
        <br/><br/><br/>





      <div style={{     
                        display: divVisible ? 'block' : 'none',
                        fontSize:"1.5rem",
                        fontFamily:"VT323",
                        color:"black", 
                        backgroundColor:"white" ,
                        width:"50%",
                        margin:"auto",
                        paddingTop:"0.2rem",
                        paddingLeft:"1.3rem",
                        textAlign:"left",
                        alignItems:"left",
                     }}>
      
      <h2 >SALE TRANSACTION</h2>
      ------------------------------
      <h4>Server: Lan</h4>
      <br />
      
        {Object.keys(orders).map((wineId) => (
        <div style={{
            display: "flex", 
            flexDirection:"row",
            alignItems:"flex", 
            justifyContent:"space-between",
            paddingRight:"1.3rem",
            width:"85%"}}>
          <div key={wineId}  >
            {wines.find((wine) => wine.id === parseInt(wineId)).name} x{' '}
            {orders[wineId]}
          </div>
          
          <div>
          ${orders[wineId]*15}
          </div>

        </div>
        ))
        }
        
      ------------------------------
      <br/><br/>
      Items in Transaction: {totalCups}
      <br/>
      Balance to pay: ${totalCups *15}
      <br/><br/>
      ------------------------------
      <br /><br />
      <div style={{background:"black",color:"white",width:"87%",paddingLeft:"3%"}}>
      LAN'S FRIEND DISCOUNT: -${totalCups *15}
      <br/>
      TOTAL PURCHASE:   $0
      <br/>
      ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
      </div >
    
      ------------------------------
      <br/><br/>
      <div style={{ textAlign:"center", width:"90%"}}>
        THANK YOU FOR  <br/>
        DRINKING WITH LAN
        <br/><br/>
        ♥
        <br/>
      </div>
      ------------------------------
      <br/><br/>
      </div>
      <br/><br/><br/>
    </div>
    
    </>
  );
};


