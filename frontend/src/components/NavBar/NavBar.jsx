import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { useState } from "react"
const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = () => {};
  return (
    <div className="bg-white flex item-center justify-between px-6 py-2 drop-shadow"> 
        <h2 className="text-xl font-medium text-black py-2 select-none"> Notes </h2>
        <SearchBar 
          value={searchValue} 
          onChange={({target})=>setSearchValue(target.value)}
          handleSearch={handleSearch}
        />
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default NavBar