import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewDetail = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getUserData', { withCredentials: true })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-50">
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="flex items-center mb-4">
          <Link
            to="/Prescription"
            className="btn bg-indigo-200 text-indigo-900 px-4 py-2 rounded-md hover:bg-indigo-400 transition duration-300 mr-4"
          >
            Write Prescription
          </Link>
          <h2 className="text-3xl text-indigo-600 font-bold text-center">User Records</h2>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-indigo-200 text-indigo-900">
              <th className="p-3 border border-gray-300">ID</th>
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">Result</th>
              <th className="p-3 border border-gray-300">Prescription</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user.id} className="border border-gray-300 text-indigo-900">
                <td className="p-3 border border-gray-300">{user.id}</td>
                <td className="p-3 border border-gray-300">{user.name}</td>
                <td className="p-3 border border-gray-300">{user.email}</td>
                <td className="p-3 border border-gray-300">{user.result}</td>
                <td className="p-3 border border-gray-300">{user.prescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDetail;
