import users from "../../assets/users.json";
import NavBar from "../../components/NavBar/NavBar";
import UserCard from "../../components/UserCard/UserCard";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUserPerPage] = useState(12);

    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex);
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-center mt-20">
                <div className="grid grid-cols-3 w-[75%]">
                    {currentUsers.map((user) => (
                        <UserCard user={user} />
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
