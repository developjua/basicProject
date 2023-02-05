import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);
  
  async function getData(){
    const response = await fetch('http://localhost:3010/admin/users')
    const data = await response.json();
    setUsers(data.users)
    } 
  useEffect(() => {
      getData()
  }, []);
  
   console.log(users)

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {currentUsers.map(user => (
          <div key={user._id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded shadow-lg p-6">
              
              <h3 className="text-lg font-medium mb-2">{user.username}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <ul className="flex justify-center items-center">
          {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
            <li key={number} className="mr-3">
              <button
                className={`text-sm font-medium py-2 px-4 ${currentPage === number + 1 ? 'bg-indigo-500 text-white' : 'bg-transparent text-indigo-500 hover:bg-indigo-500 mx-auto'}`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
