import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prescription = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [prescriptionText, setPrescriptionText] = useState('');

  useEffect(() => {
    // Fetch the list of patients from the server
    axios.get('http://localhost:8081/getAllUsers', { withCredentials: true })
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const handlePrescriptionChange = (event) => {
    setPrescriptionText(event.target.value);
  };

  const handleAddPrescription = () => {
    // Add the prescription to the selected patient in the database
    axios.post('http://localhost:8081/addPrescription', {
      userName: selectedPatient,
      prescription: prescriptionText,
    }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        // Optionally, you can reset the selected patient and prescription text
        setSelectedPatient('');
        setPrescriptionText('');
      })
      .catch(error => {
        console.error('Error adding prescription:', error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-50">
      <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-indigo-600 font-bold mb-4">Add Prescription</h2>
        <div className="mb-4">
          <label htmlFor="patientSelect" className="block text-sm font-semibold text-indigo-600 mb-1">
            Select Patient:
          </label>
          <select
            id="patientSelect"
            className="w-full p-2 border text-indigo-600 border-gray-300 rounded"
            value={selectedPatient}
            onChange={handlePatientChange}
          >
            <option value="" disabled>Select a Patient</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.name}>{patient.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="prescriptionText" className="block text-sm font-semibold text-indigo-600 mb-1">
            Prescription:
          </label>
          <textarea
            id="prescriptionText"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={prescriptionText}
            onChange={handlePrescriptionChange}
          ></textarea>
        </div>
        <button
          className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
          onClick={handleAddPrescription}
        >
          Add Prescription
        </button>
      </div>
    </div>
  );
};

export default Prescription;
