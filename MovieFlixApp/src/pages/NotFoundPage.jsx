import { Link } from "react-router-dom"

function NotFoundPage(){
    return <div style={{width:"90vw",height:"90vh",gap:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCj1eDqNU0m9gOLlsXgqh5dSaiYWlG2K96yQ&usqp=CAU" width="500px" alt="error-page"/>
    <p style={{textAlign:"center"}}>
      <Link to="/">Go to Home </Link>
    </p>
  </div>
}

export default NotFoundPage