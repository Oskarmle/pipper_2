// Importere SVG fil
import Bird from "../img/bird-logo-white.svg"

export default function Header(){
    return (
        <header>
            <div>
            <img src={Bird} alt=""/>
            </div>   
        </header>
    )
}