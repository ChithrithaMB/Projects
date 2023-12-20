import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../pages/AxiosConfig";
import '../assets/css/viewUser.css';

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    place:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axiosInstance.get(`http://localhost:8080/api/v1/medical/getDoctor/${id}`);
    setUser(result.data);
  };

  return (
    <>
   
    <div className="divt">
    <div className="container2">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              <div className="text1">
               <b className="text15">Details of user id :
              {user.id}</b>
              <ul className="list-group list-group-flush"><br/>
                <li className="list-group-item"><p className="text1">
                  <b className="text1">Name:</b>
                  {user.name}</p>
                </li>
                <li className="list-group-item"><p className="text1">
                  <b className="text1">Phone Number:</b>
                  {user.phone}</p>
                </li>
                <li className="list-group-item"><p className="text1">
                  <b className="text1">Email:</b>
                  {user.email}</p>
                </li>
                <li className="list-group-item"><p className="text1">
                  <b className="text1">Place:</b>
                  {user.place}</p>
                </li>
              </ul>
            </div>
          </div>
          <button><Link className="btn12" to={"/"}>Back to Home</Link></button>
            
          
      
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}