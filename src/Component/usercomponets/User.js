import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation , Link } from "react-router-dom";

const User = () => {
  const locations = useLocation();
  const user = locations.state.userdata;
  const [showForm, setShowForm] = useState(false);
  const [oldname, updateoldname] = useState(user.username);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const Data = new FormData();
    Data.append("email", user.email);
    Data.append("username", username);
    Data.append("password", password);
    Data.append("picture", profilePicture);
    console.log(Data);
    console.log(profilePicture)
    const options = {
      method: "POST",
      mode: "cors",
      body: Data,
    };

    try {
      const response = await fetch("http://localhost:3010/user", options);
      
      const data = await response.json();
      if (data.success) {
        setUsername("");
        setPassword("");
        updateoldname(data.user.username);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
    }
  };

  return (
    <div >
      <ToastContainer />
      <div className="flex flex-col mt-4">
      <Link to={"/"} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 absolute top-5 right-10">
        Logout
        </Link>
      <h1 className="text-2xl font-bold text-center">{`Welcome ${oldname}`} </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36 mx-auto mt-4 "
        onClick={() => setShowForm(!showForm)}
      >
        Update Profile
      </button>
      </div>
      {showForm && (
        <form
          className="mt-7 "
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="flex flex-col items-center">
            <label className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
              upload picture
              <input
                type="file"
                name="picture"
                className=""
                onChange={(event) => setProfilePicture(event.target.files[0])}
              />
            </label>
          </div>
          <div className="mt-5 flex flex-col w-2/4 mx-auto">
            <label className="block text-gray-700 font-bold mb-2 " >
              New username
            </label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="bg-gray-200 p-2 border border-gray-400"
            />
          </div>
          <div className="mt-5 flex flex-col w-2/4 mx-auto">
            <label className="block text-gray-700 font-bold mb-2">
              New password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="bg-gray-200 p-2 border border-gray-400"
            />
          </div>
          <div className="flex">
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
            type="submit"
          >
            Update
          </button>
          </div>
          
        </form>
      )}
    </div>
  );
};

export default User;
