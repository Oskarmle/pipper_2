import React from "react";
import { Pip } from "../entities/pip";
import PipItem from "../components/PipItem";


export default function Feed (){
    const pipsDummyData = [
        new Pip('et flot pip', new Date(), 'Oskar'),
        new Pip('et flot pip til', new Date(), 'Emilie'),
        new Pip('et flot pip til til', new Date(), 'Ida'),
    ];


    return (
        <main>
            <div className="list">
                {pipsDummyData.map(pip => {
                    return  <PipItem key={pip.content} pipItem={Pip}/>
                })}
            </div>
        </main>
    )
}   