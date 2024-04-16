import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate, Link } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/patients",
          { withCredentials: true }
        );
        setPatients(data.patients);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchPatients();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page patients">
      <h1>Patients</h1>
      <div className="patient-list">
        {patients && patients.length > 0 ? (
          patients.map((patient) => {
            return (
              <div className="patient-card" key={patient._id}>
                <div className="patient-details">
                  <p>
                    <span className="label">First Name:</span>{" "}
                    <span className="value">{patient.firstName}</span>
                  </p>
                  <p>
                    <span className="label">Last Name:</span>{" "}
                    <span className="value">{patient.lastName}</span>
                  </p>
                  <p>
                    <span className="label">Email:</span>{" "}
                    <span className="value">{patient.email}</span>
                  </p>
                  <p>
                    <span className="label">Phone:</span>{" "}
                    <span className="value">{patient.phone}</span>
                  </p>
                  <p>
                    <span className="label">NIC:</span>{" "}
                    <span className="value">{patient.nic}</span>
                  </p>
                  <p>
                    <span className="label">DOB:</span>{" "}
                    <span className="value">{patient.dob}</span>
                  </p>
                  <p>
                    <span className="label">Gender:</span>{" "}
                    <span className="value">{patient.gender}</span>
                  </p>
                  <p>
                    <span className="label">Address:</span>{" "}
                    <span className="value">{patient.address}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Patients!</h2>
        )}
      </div>
      <Link to="/patient/addnew">
        <button className="add-button">Add Patient</button>
      </Link>
    </section>
  );
};

export default Patients;
