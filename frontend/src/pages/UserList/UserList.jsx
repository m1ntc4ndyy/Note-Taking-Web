import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState("");

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);
  let temp = currentUsers;
  let tempLength = temp.length;
  const handleSearch = (event) => {
    if (event.key==="Enter" && searchValue !== "") {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())

      );
      temp = filteredUsers.slice(firstUserIndex, lastUserIndex);
      tempLength = filteredUsers.length;
      // setCurrentPage(1);
    }
  };
  return (
    <>
      <NavBar/>
      <div className="flex justify-center z-10 absolute top-2 right-0 left-0">
        <SearchBar
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-3 w-[75%]">
          {temp.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      </div>
      <Pagination
        totalUsers={searchValue === "" ? users.length : tempLength}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UserList;
