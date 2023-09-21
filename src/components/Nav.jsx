export default function Nav(){
    return (
        <nav>
      {/* <div class="logo">
        <img src="img/bird-logo-white.svg" alt="pipper-logo" />
      </div> */}

      <div className="links">
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