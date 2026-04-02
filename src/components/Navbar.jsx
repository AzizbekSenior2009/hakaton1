import "./Navbar.css"
import img from "../assets/Background.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <div className="box">
        <div className="navbar-img">
<img src={img} alt="" />
        </div>
        <div className="navbar-title">
        <h1>Fiscal Atelier</h1>
        <h3>Wealth Management</h3>
        </div>
        </div>
        <nav>
          <ul className='cardlist'>
              <Link to={"/"}>
              Dashboard
              </Link>
              <Link to={"/about"}>
              Transactions
              </Link>  
              <Link to={"/contact"}>
              User List
              </Link>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar