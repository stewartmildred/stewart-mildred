import "./header.css"
import { Link } from "react-router-dom"

function Header () {
    return(
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="./"><a class="navbar-brand" href="#">Stewart.co</a>
            </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="./"><a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#aboutus">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">Pricing</a>
      </li>
    </ul>
  <Link to=".cd/apply"><span class="navbar-text">
      We are hiring!!!
    </span></Link>
  </div>
</nav>
        </div>
    )
}

export default Header