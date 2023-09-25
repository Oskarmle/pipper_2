import { Pip } from "../entities/pip";
import PipItem from "../components/PipItem"


export default function Feed (){
    const pips = [
        new Pip('et flot pip', new Date(), 'Oskar'),
        new Pip('et flot pip til', new Date(), 'Emilie'),
        new Pip('et flot pip til til', new Date(), 'Ida'),
    ];

    return (
        <main>
            <div className="list">
                {pips.map(Pip => {
                    return <PipItem pipItem={Pip}/>
                })}
            </div>
        </main>
    )
}