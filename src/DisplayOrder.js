    import React, { useState } from 'react';

    export default function DisplayOrder({ displayRange, width, alignItems, textAlign , flexDirection , paddingLeft }) {
      const [orders, setOrders] = useState({});
    
      const wines = [
       

    { id: 1, name: 'Long Island Tea', ingredient:'gin, vodka, taquila, rum, orange wine, lemon, coke'},
    { id: 2, name: 'Cuba Libre', ingredient:'rum, coke, lemon'},
    { id: 3, name: 'Whisky Sour', ingredient:'whisky, lemon, simple syrup'},
    { id: 4, name: 'Mojito', ingredient:'  mint, rum, lemon, simple syrup'},
    { id: 5, name: 'Gin tonic', ingredient:'tonic, gin, lemon'},
    { id: 6, name: 'Daiquiri', ingredient:'rum, lemon, simple syrup'},
    { id: 7, name: 'Margarita', ingredient:'taquila, lemon, orange-wine, simple syrup, blue orange syrup'},
    { id: 8, name: 'Gimlet', ingredient:'Gin, lemon, simple syrup '},
    { id: 9, name: 'White Lady', ingredient:'gin, orange wine, lemon'},
    { id: 10, name: 'Pink Lady', ingredient:'gin, lemon, pomegranate, egg-white'},
    { id: 11, name: 'Tequila Sunrise', ingredient:'tequila, pomegranate, Oranges '},
    { id: 12, name: 'BACADI', ingredient:'rum, lemon, pomegranate, simple syrup'},
    { id: 13, name: 'XYZ', ingredient:'rum, orange wine, lemon'},
    { id: 14, name: 'New York Sour', ingredient:'whisky, lemon, simple syrup'},
    { id: 15, name: 'B52(shot)', ingredient:'Kahlua, Cream liqueur, orange wine'},
    { id: 16, name: 'Mr.Tea', ingredient:'tea-gin, lemon, honey'},
    { id: 17, name: 'Tiramisu', ingredient:'Kahlua, vodka, milk, cream'},
    { id: 18, name: 'Choco Cake', ingredient:'rum, chocolate, Kahlua, milk, cream liqueur'},
    { id: 19, name: 'Mr. Sanders', ingredient:'whisky, honey, milk'},
      ];


    
      const filteredWines = 
      displayRange === 1
        ? wines.slice(0, 8)   
        : displayRange === 2
          ? wines.slice(8, 15) 
          : displayRange === 3
          ? wines.slice(15, 19) 
          : [];



    
      return (
        <>
          <div style={{ fontSize: "2rem", width: width || "80%", marginLeft: "auto", marginRight: "auto" }}>
            <br />
            {filteredWines.map((wine) => (
              <div style={{
                display: "flex",
                textAlign: textAlign || "center",
                flexDirection: flexDirection || "column",
                alignItems: alignItems || "left",
                paddingLeft :paddingLeft || "0",
         
              }}>
            
                  <h4 style={{       
                    paddingBottom:"0",
                    marginBottom:"0",}}>
                    {wine.name}
                  </h4>

                  <p style={{       
                    paddingBottom:"0",
                    marginBottom:"2rem",}}>
                    {wine.ingredient}
                    .
                  </p>
                  
            
              </div>
            ))}
          </div>
        </>
      );
    };
    