import './Search.css'
import img2 from "../assets/User profile avatar.svg"
import img3 from "../assets/Container.svg"
const Search = () => {
  return (
    <>
    <div className="search">
      <div className="search-box">
        <img src={img3} alt="" />
        <input type="text"placeholder='Search transactions, assets, or users...' />
      </div>
      <div className="search-admin">
        <h2>Alexander Vance</h2>
        <p>Admin Access</p>
      </div>
      <img className='img2' src={img2} alt="" />
    </div>
    </>
  )
}

export default Search