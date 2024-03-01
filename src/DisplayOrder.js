    import React, { useState } from 'react';

    export default function DisplayOrder({ displayRange, width, alignItems, textAlign , flexDirection , paddingLeft }) {

    const [hoveredItemId, setHoveredItemId] = useState(null); 
    const wines = [
       

    { id: 1, name: 'Long Island Tea', ingredient:'gin 20, vodka20, taquila20, rum20, orange liqueur20, lemon30, coke40', price:15,},
    { id: 2, name: 'Cuba Libre', ingredient:'rum 50, coke 120, lemon 10', price:15},
    { id: 3, name: 'Whisky Sour', ingredient:'whisky 45, lemon 30, simple syrup', price:15},
    { id: 4, name: 'Mojito', ingredient:'  mint, rum 45, lemon 15, sugar 2tsp', price:15},
    { id: 5, name: 'Gin tonic', ingredient:'gin45, tonic180, lemon', price:15},
    { id: 6, name: 'Daiquiri', ingredient:'rum 60, lemon 15, simple syrup 15', price:15},
    { id: 7, name: 'Margarita', ingredient:'taquila 45, lemon 10, orange liqueur 15, simple syrup, salt rim', price:15},
    { id: 8, name: 'Gimlet', ingredient:'Gin 45, lemon 15, simple syrup ', price:15},
    { id: 9, name: 'White Lady', ingredient:'gin 45, orange liqueur 30, lemon 20', price:15},
    { id: 10, name: 'Pink Lady', ingredient:'gin 45, lemon 15, pomegranate 10, egg-white', price:15},
    { id: 11, name: 'Tequila Sunrise', ingredient:'tequila 45, pomegranate 5, whole orange ', price:15},
    { id: 12, name: 'BACADI', ingredient:'rum 45, lemon 15, pomegranate 5, simple syrup', price:15},
    { id: 13, name: 'XYZ', ingredient:'rum 40, orange liqueur 10, lemon 10', price:15},
    { id: 14, name: 'New York Sour', ingredient:'whisky 60, lemon 30, simple syrup 20 redwine 15(float)', price:15},
    { id: 15, name: 'B52(shot)', ingredient:'Kahlua, Cream liqueur, orange liqueur, 1:1or1.2:1', price:15},
    { id: 16, name: 'Mr.Tea', ingredient:'tea-gin 60, lemon 15, honey 15', price:15},
    { id: 17, name: 'Tiramisu', ingredient:'Kahlua 30, vodka 30, milk, cream', price:15},
    { id: 18, name: 'Choco Cake', ingredient:'rum 45, Kahlua 15, chocolate drink, milk, cream liqueur', price:15},
    { id: 19, name: 'Mr. Sanders', ingredient:'whisky 45, honey 45, milk 90', price:15},
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
              <div style={{ fontSize: "1.875rem", 
              width: width || "80%", 
              marginLeft: "auto", 
              marginRight: "auto",
             
            }}
               
              >
                {filteredWines.map((wine) => (
                  <div
                    key={wine.id}
                    style={{
                      display: "flex",
                      width:"100%",
                      textAlign: textAlign || "center",
                      flexDirection: flexDirection || "column",
                      alignItems: alignItems || "left",
                      paddingLeft: paddingLeft || "0",
                      margin:  "0 0 1rem 0",
                      backgroundColor: hoveredItemId === wine.id ? "rgba(0, 0, 0, 0.2)" : "transparent", 
                      boxShadow: hoveredItemId === wine.id ? "0 0 5px 10px rgba(0, 0, 0, 0.2) " : "0 0 0 0 rgba(0, 0, 0, 0)", 
                      transition: "all .1s ease", 
                      borderRadius: "15px", 
                    }}
                    onMouseEnter={() => setHoveredItemId(wine.id)} 
                    onMouseLeave={() => setHoveredItemId(null)} 
                  >
                    
                    <h5 style={{
                      paddingBottom: "0",
                      fontWeight: "500",
                      marginTop: "0.1rem",
                      marginBottom: "0.1rem",
                    }}>
                      {wine.name}
                    </h5>
                    
        
                    <p style={{
                      paddingBottom: "0",
                      fontWeight: "200",
                      marginTop: "0.05rem",
                      marginBottom: "0.25rem",
                    }}>
                      
                      {wine.ingredient}
                      
                    </p>
                  </div>
                ))}

       
 

              </div>
            </>
          );
        };