import{ useState , useRef } from 'react';
import { toPng } from 'html-to-image';
import SignaturePad from './Sign';



export default function Order() {

  const [orders, setOrders] = useState({});
  const elementRef = useRef(null);
  
  const wines = [

 
    { id: 1, name: 'Long Island Tea', ingredient:'gin, vodka, taquila, rum, orange liqueur, lemon, coke', price:15},
    { id: 2, name: 'Cuba Libre', ingredient:'rum, coke, lemon', price:15},
    { id: 3, name: 'Whisky Sour', ingredient:'whisky, lemon, simple syrup', price:15},
    { id: 4, name: 'Mojito', ingredient:'  mint, rum, lemon, simple syrup', price:15},
    { id: 5, name: 'Gin tonic', ingredient:'tonic, gin, lemon', price:15},
    { id: 6, name: 'Daiquiri', ingredient:'rum, lemon, simple syrup', price:15},
    { id: 7, name: 'Margarita', ingredient:'taquila, lemon, orange liqueur, simple syrup', price:15},
    { id: 8, name: 'Gimlet', ingredient:'Gin, lemon, simple syrup ', price:15},
    { id: 9, name: 'White Lady', ingredient:'gin, orange liqueur, lemon', price:15},
    { id: 10, name: 'Pink Lady', ingredient:'gin, lemon, pomegranate, egg-white', price:15},
    { id: 11, name: 'Tequila Sunrise', ingredient:'tequila, pomegranate, orange liqueur ', price:15},
    { id: 12, name: 'BACADI', ingredient:'rum, lemon, pomegranate, simple syrup', price:15},
    { id: 13, name: 'XYZ', ingredient:'rum, orange wine, lemon', price:15},
    { id: 14, name: 'New York Sour', ingredient:'whisky, lemon, simple syrup', price:15},
    { id: 15, name: 'B52(shot)', ingredient:'Kahlua, Cream liqueur, orange liqueur', price:15},
    { id: 16, name: 'Mr.Tea', ingredient:'tea-gin, lemon, honey', price:15},
    { id: 17, name: 'Tiramisu', ingredient:'Kahlua, vodka, milk, cream', price:15},
    { id: 18, name: 'Choco Cake', ingredient:'rum, chocolate, Kahlua, milk, cream liqueur', price:15},
    { id: 19, name: 'Mr. Sanders', ingredient:'whisky, honey, milk', price:15},
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

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const totalCups = Object.values(orders).reduce((total, cups) => total + cups, 0);

  const [tips, setTips] = useState('');
  const [total, setTotal] = useState('');

  const handleTipsChange = (event) => {
    const newTips = event.target.value;
    setTips(newTips);
    setTotal(newTips);
  };

  const handleTotalChange = (event) => {
    const newTotal = event.target.value;
    setTips(newTotal);
    setTotal(newTotal);
  };


  

  
  return (
    <>
        <div style={{ fontSize: "2rem", width: "70%", margin: "auto" }}>
            <br />
            <h2>Let's Order!</h2>
            <br /><br/>
            
            <div style={{ display: "flex", fontSize: "2rem", fontWeight:"300", flexDirection: "row", justifyContent: "space-between" }}>
                {/* Left column */}
                <div style={{ width: "48%" }}>
                    {wines.slice(0, 10).map((wine) => (
                        <div key={wine.id} style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "1.3rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                                <div>
                                    {wine.id}. &nbsp;
                                    {wine.name}. — ${wine.price}
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <button className="hover" style={{ width: "2rem", height: "2rem",border: "1rem", borderRadius: "1rem" }} onClick={() => handleOrderChange(wine.id, -1)}>
                                        －
                                    </button>
                                    <div style={{ width: "2rem", fontSize: "1.6rem" }}>
                                        {orders[wine.id] || 0}
                                    </div>
                                    <button className="hover" style={{ width: "2rem", height: "2rem",border: "1rem", borderRadius: "1rem" }} onClick={() => handleOrderChange(wine.id, 1)}>
                                        ＋
                                    </button>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", alignItems: "left", textAlign:"left", fontSize: "0.8rem", paddingLeft: "2rem", paddingRight: "2rem",fontWeight:"200", }}>
                            {wine.ingredient}
                            </div>
                            <hr style={{ width:"100%",borderColor:"rgb(255,255,255,0.3)"}}  />
                        </div>
                    ))}
                </div>
                {/* Right column */}
                <div style={{ width: "48%" }}>
                    {wines.slice(10).map((wine) => (
                        <div key={wine.id} style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", fontWeight:"300",flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "1.3rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                                <div>
                                    {wine.id}. &nbsp;
                                    {wine.name}. — ${wine.price}
                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <button className="hover" style={{ width: "2rem", height: "2rem", border: "1rem", borderRadius: "1rem" }} onClick={() => handleOrderChange(wine.id, -1)}>
                                        －
                                    </button>
                                    <div style={{ width: "2rem", fontSize: "1.6rem" }}>
                                        {orders[wine.id] || 0}
                                    </div>
                                    <button className="hover" style={{ width: "2rem",height: "2rem", border: "1rem", borderRadius: "1rem" }} onClick={() => handleOrderChange(wine.id, 1)}>
                                        ＋
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "left", textAlign:"left", fontSize: "0.8rem", paddingLeft: "2rem", paddingRight: "2rem",fontWeight:"200", }}>
                            {wine.ingredient}
                            </div>
                            <hr style={{ width:"100%",borderColor:"rgb(255,255,255,0.3)"}}  />
                        </div>
                    ))}
                </div>
            </div>

        
    












        <br/>
        <br/>
        <br/>
        <button onClick={handleButtonClick}
                className='hover'
                style={{
                fontSize:"1.5rem",
                
                padding: "1rem 2rem",
                border: "1px solid #ffffff",
                borderRadius: "2rem"
                }}>
                    CHECK OUT
        </button>
        <br/><br/><br/>



   {/* ======== Receipt ======= */}

   <div ref={elementRef} style={{     
                    
                    fontSize:"1.5rem",
                    fontFamily:"VT323",
                    color:"black", 
                    paddingTop:"0.2rem",
                    paddingLeft:"1.3rem",
                    paddingRight:"1.3rem",
                    textAlign:"left",
                    alignItems:"left",
                  }} >

      <div style={{     
                    display: divVisible ? 'block' : 'none',
                    // fontSize:"1.5rem",
                    fontFamily:"VT323",
                    color:"black", 
                    backgroundColor:"white" ,
                    width:"40%",
                    margin:"auto",
                    paddingTop:"0.2rem",
                    paddingLeft:"1.3rem",
                    paddingRight:"1.3rem",
                    textAlign:"left",
                    alignItems:"left",
                  }}>
      
      <h2 style={{ fontFamily:"VT323", fontSize:"1.5em", fontWeight:"900" ,  }}> SALE TRANSACTION</h2>
    
      <div style={{background:"black", fontSize:"0.8em",color:"white",width:"95%",paddingLeft:"1%",paddingBottom:"1%",}}>
      <h4>Server: Lan</h4>
      </div>

      <br />
      
        {Object.keys(orders).map((wineId) => {

        const quantity = orders[wineId];
        if (quantity > 0) {
          return (
        <div style={{
            display: "flex", 
            flexDirection:"row",
            alignItems:"flex", 
            justifyContent:"space-between",
            paddingRight:"1.3rem",
            width:"95%"}}>
          <span style={{
            fontSize:"0.9em",
            width:"100%",
            paddingBottom:"0.3em"}} key={wineId}  >
            
            {wines.find((wine) => wine.id === parseInt(wineId)).name}{'. '} 
            <span>{' '}  x  {orders[wineId]}</span>
          </span>
          
          <span style={{
            display: "flex",
            fontSize:"0.9em", }}>
          ${orders[wineId]*15}
          </span>

        </div>


      );
        } else {
          return null; 
        }
      })}
        
      <hr style={{  marginLeft:"0",border: "1px solid", width:"95%",}}/>
      
      <span style={{ fontSize:"0.9em",
            width:"100%",lineHeight:"1rem"}}>
      Items in Transaction: {totalCups}
      </span>
      <br/>
      <span style={{ fontSize:"0.9em",
            width:"100%",}}>
      Balance to pay: ${totalCups *15}
      </span>
      <br/>
   
      <br/>
     
      <div style={{background:"black",color:"white",width:"95%",paddingLeft:"1%",lineHeight:"1.4rem"}}>
      <br/>
      <span style={{ fontSize:"0.9em",
            width:"100%",}}>
      LAN'S FRIEND DISCOUNT: -${totalCups *15}
      </span>
      <br/>
      <span style={{ fontSize:"0.9em",
            width:"100%",}}>
      PAYMENT AMOUNT:   $0
      <br/>
      </span>

      <br/>
      </div >
  
      <br/>
      <div style={{ fontSize:"0.9em", textAlign:"right", width:"95%"}}>
      <span style={{ fontSize:"0.9em",
                       width:"100%",
                       paddingBottom:"0.3em"}}>  
      TIPS:&nbsp; 
      <input type="text" 
              value={tips} 
              onChange={handleTipsChange} 
      style={{ fontFamily:"VT323", 
                fontSize:"1em",
                textAlign:"center", 
                width:"20%", 
                borderBottom: "2px solid black", 
                borderTop: "none", 
                borderLeft: "none",
                borderRight: "none",
                background: "none", 
                padding: "0.2rem"}}  />
                 </span>
      
      <br/><br/>


       <span style={{ fontSize:"0.9em",
                       width:"100%",
                       paddingBottom:"0.3em"}}>  
      TOTAL:      
       <input type="text" 
              value={total} 
              onChange={handleTotalChange} 

      style={{ fontFamily:"VT323", 
                fontSize:"1em",
                textAlign:"center", 
                width:"20%", 
                borderBottom: "2px solid black", 
                borderTop: "none", 
                borderLeft: "none",
                borderRight: "none",
                background: "none", 
                padding: "0.2rem"}}  />
                </span>
                
      <br/><br/>
      </div>
    
      
     <SignaturePad  style={{ fontSize:"0.9em",
            width:"100%",}} />

      <hr style={{marginLeft:"0",border: "1px solid",width:"95%"}}/>
     

      <div style={{ textAlign:"center", 
                    width:"100%", 
                    height:"100%", 
                    fontSize:"0.9em", 
                    paddingBottom:"2rem"}}>
      <div style={{ fontSize:"0.9em",
                       width:"100%",
                       height:"100%",
                       paddingBottom:"2rem"}}>  
        THANK YOU FOR  <br/>
        DRINKING WITH LAN
        ♥
        <br/><br/>
        </div>
      </div>
      </div>
  </div>
      <br/>
     
      <br/><br/>
    </div>


    <div style={{     
                        display: divVisible ?   'none' : 'block',
                        fontSize:"1.5rem",
                        fontFamily:"VT323",
                        color:"black", 
                        backgroundColor:"white" ,
                        width:"40%",
                        margin:"auto",
                        paddingTop:"5rem",
                        paddingLeft:"1.3rem",
                        paddingBottom:"5rem",
                        textAlign:"center",
                        
                     }}>
                      Remember to Checkout!<br/><br/>
                      THANK YOU
    </div>

    <div style={{     
                        display: divVisible ?   'none' : 'block',
                        fontSize:"1rem",
                        fontFamily:"VT323",
                        color:"white", 
                        // backgroundColor:"white" ,

                        width:"100%",
                        margin:"auto",
                        paddingTop:"25rem",
                        textAlign:"center",
                        bottom:"2rem",
                        
                     }}>
                      ❤ website made by Lan ❤<br/><br/>
                     
    </div>


    <div style={{     
                        display: divVisible ?  'block':'none' ,
                        fontSize:"1rem",
                        fontFamily:"VT323",
                        color:"white", 
                        // backgroundColor:"white" ,

                        width:"100%",
                        margin:"auto",
                       
                        textAlign:"center",
                        bottom:"2rem",
                        
                     }}>
      <button onClick={htmlToImageConvert}
      className='hover'
      style={{  fontSize:"1rem",
                padding: "1rem 2rem",
                border: "1px solid #ffffff",
                borderRadius: "2rem"}}>
                  Download Receipt</button>
                  <br/><br/>
                      ❤ website made by Lan ❤<br/><br/>
                     
    </div>


    
    </>
  );
};


