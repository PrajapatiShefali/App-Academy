import { useState,useContext,useEffect } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
function Match(){
    const [match,setMatch]=useState(false);
    const {sign} =useContext(HoroscopeContext)

    console.log(sign)
    return (
        <>
        <button onClick={()=>setMatch(!match)}>Match</button>
        <div>
            {match && sign.match}
        </div>
        </>
    )
}
export default Match;