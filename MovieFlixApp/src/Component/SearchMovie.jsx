import { Form, useSearchParams } from "react-router-dom";
import "./SearchMovie.css"

function SearchMovie(){
    const [searchParam]=useSearchParams()
    return(
        <div style={{width:"82%",position:"relative"}}>
        <Form style={{display:"flex",alignItems:"center"}}>
            <input type="text" defaultValue={searchParam.get("searchedMovie") || ""} name="searchedMovie" style={{width:"100%",padding:"10px",borderRadius:"4px",border:"none"}} />
            <input type="submit" value={"Search"} className="search-movie-button"/>
        </Form>
        </div>
    )
}

export default SearchMovie