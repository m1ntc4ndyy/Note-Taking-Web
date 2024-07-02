import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUserPerPage] = useState(12);
  const [isSearch, setIsSearch] = useState(false);
  const [setSearch, setSetSearch] = useState("");
  const [querry, setQuerry] = useState("");
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const onSearch = (searchValue) => {
    if (searchValue.length >= 0) {
      // console.log(searchValue ,typeof searchValue);
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue)
      );
      setIsSearch(true);
      setSetSearch(filteredUsers);
    }
    else {
      console.log("empty");
      setIsSearch(false);
    }
    // setQuerry(searchValue);
    // if (searchValue.length > 0) {
    //   console.log(searchValue ,typeof searchValue);

    //   const filteredUsers = users.filter((user) =>
    //     user.name.toLowerCase().includes(searchValue)
    //   );
    //   setIsSearch(true);
    //   setSetSearch(filteredUsers);
    // } else {
    //   setIsSearch(false);
    // }
  };
  const temp = isSearch ? setSearch : currentUsers;
  return (
    <>
      <NavBar onSearch={onSearch} />
      <div className="flex items-center justify-center mt-20">
        <div className="grid grid-cols-3 w-[75%]">
          {temp.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      </div>
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UserList;
