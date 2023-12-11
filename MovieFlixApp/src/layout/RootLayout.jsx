import { Outlet } from "react-router-dom";

function RootLayout(){
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"2rem",padding:"1rem"}}>
            <h1 style={{color:"#3d2a80"}}>Movie Search</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default RootLayout