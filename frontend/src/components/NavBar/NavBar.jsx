import ProfileInfo from "../Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { useState,useEffect } from "react"
const NavBar = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = () => {
    if (searchValue) {
      onSearch(searchValue)
    }
  };

  useEffect(() => {handleSearch()}, [searchValue]);
  return (
    <div className="bg-white flex item-center justify-between px-6 py-2 drop-shadow"> 
        <h2 className="text-xl font-medium text-black py-2 select-none"> Notes </h2>
        <SearchBar 
          value={searchValue} 
          onChange={({target})=>setSearchValue(target.value)}
          handleSearch={onSearch}
        />
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default NavBar