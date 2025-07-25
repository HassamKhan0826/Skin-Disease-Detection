import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Doctor() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/Doctor', { withCredentials: true });
        if (response.data.Status === 'Success') {
          setAuth(true);
          setName(response.data.name);
        } else {
          setAuth(false);
          setMessage(response.data.Error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:8081/Logout')
      .then(() => {
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-50">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
        {auth ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Welcome, Admin <span className='text-indigo-500'>{name}</span>
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <Link
                to="/UploadXray"
                className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
              >
                Upload Image
              </Link>
              <Link
                to="/ViewDetail"
                className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
              >
                View Details
              </Link>
             {/* <Link
                to="/ViewImage"
                className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
              >
                View Image
              </Link>  */}
              <Link
                to="/UserFeedback"
                className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
              >
                User Feedback
              </Link>
              <button
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">{message}</h3>
            <h3 className="text-3xl mb-4 text-indigo-600 font-bold">Login Now</h3>
            <Link
              to="/Login"
              className="btn bg-indigo-200 hover:bg-indigo-400 text-indigo-900 text-center px-4 py-3 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-lg block"
            >
              Login
            </Link>
          </div>
        )}
        <div className="mt-4 text-center">
          <Link to="/Login" className="text-sm text-indigo-300 hover:text-indigo-500 transition duration-300">
            Want to use another account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Doctor;