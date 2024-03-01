import { Outlet, Link } from "react-router-dom";


const Navigation = () => {
  return (
    <>
        <div>
            <nav style={{   width:"100vw", position:"fixed" , 
            backdropFilter: "blur(5px)",
            zIndex:"200",
            paddingBottom:"1rem",
             }}>

            <div style={{   display: "flex", 
                            flexDirection:"row", 
                            alignItems:"flex", 
                            justifyContent:"space-between",
                            fontSize:"1.4rem",

                            paddingTop: "1rem",
                            paddingLeft: "2rem",
                            paddingRight: "2rem",
                        }}
                            > 
                        <div>
                        <Link to="/">
                          <img src="logo.png" style={{ height:"4rem"}} alt="Lan's bar logo"></img>
                        </Link>
                        </div>
                        <div style={{   display: "flex", 
                                        width:"30%",
                                        flexDirection:"row", 
                                        alignItems:"flex", 
                                        justifyContent:"space-between",
                                        fontSize:"1.4rem",

                                        paddingTop: "1rem",
                                        paddingLeft: "2rem",
                                        paddingRight: "2rem",}}>

                            <div>
                            <Link to="/privateEvent"> Reservation </Link>
                            </div>

                            <div>
                            <Link to="/about">About</Link>
                            </div>


                          </div>

            </div>
            {/* <hr style={{  border: "0.5px solid", borderColor: "rgba(255,255,255,0.5)",
           marginTop:"0.5rem" ,
            marginBottom:"0" }}/> */}
            </nav>
        </div>

 

      <Outlet />
    </>
  )
};

export default Navigation;


