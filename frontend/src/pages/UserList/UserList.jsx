import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState("");
  
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);
  let temp = currentUsers;

  const handleSearch = () => {
    if (searchValue !== "") {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()));
      temp = filteredUsers;
    }
  };
  return (
    <>
      <NavBar />
      <div className="flex justify-center z-10">
        <SearchBar
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={handleSearch()}
        />
      </div>
      <div className="flex items-center justify-center mt-0">
        <div className="grid grid-cols-3 w-[75%]">
          {
          temp.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      </div>
      <Pagination
        totalUsers={searchValue === "" ? users.length : temp.length}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UserList;
