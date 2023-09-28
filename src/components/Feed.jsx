import React from "react";
// import { Pip } from "../entities/pip";
import PipItem from "../components/PipItem";


export default function Feed ({pips}){
  
    return (
        <main>
            <div className="list">
                {pips.slice().reverse().map(pip => {
                    return  <PipItem key={pip.content} pipItem={pip}/>
                })}
            </div>
        </main>
    )
}  

// slice() laver et overfladisk kopi
// reverse() laver array i omvendt rækkefølge