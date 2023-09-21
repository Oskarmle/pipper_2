

export default function Nav(){
    return (
        <nav>

      <div className="links">
        <img src="img/home.svg" alt="" />
        <button> Home </button>
        <button> Explore </button>
        <button> Notifications </button>
        <button> Messages </button>
        <button> Profiles </button>
      </div>

      <div className="pip-button">
        <button id="pip" className="hej">
          <p>Pip</p>
        </button>
      </div>
    </nav>
    )
}