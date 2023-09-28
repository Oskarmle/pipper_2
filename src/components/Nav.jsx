// Importere svg fil
import Home from "../img/home.svg";
import Search from "../img/search.svg"
import Notifications from "../img/bell.svg"
import User from "../img/user.svg"
import Message from "../img/mail.svg"

export default function Nav({setIsModalOpen}){

    function handleOpenModal (){
        setIsModalOpen(true)
    }

    return (
    <nav>
        <div className="links">
            <div>
                <img src={Home} alt="home" />
                <button> Home </button>
            </div>
            <div>
                <img src={Search} alt="" />
                <button> Explore </button>
            </div>
            <div>
                <img src={Notifications} alt="" />
                <button> Notifications </button>    
            </div>
            <div>
                <img src={Message} alt="" />
                <button> Messages </button>
            </div>
            <div>
                <img src={User} alt="" />
                <button> Profiles </button>
            </div>
        </div>

        <button id="pip" className="pip_knap" onClick={handleOpenModal}>pip</button>
    </nav>
    )
}