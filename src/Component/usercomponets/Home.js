import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
      <Link to={"/admin/login"} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 absolute top-5 right-10">
        admin
        </Link>
        <h1 className="text-3xl font-bold m-14">Welcome</h1>
        <Link to={"/login"} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Login
        </Link>
        <Link to="/signup" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-4">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
