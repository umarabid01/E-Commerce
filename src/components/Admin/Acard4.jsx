import React, { useEffect, useState } from 'react';

function Acard4() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/auser")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setusers(data.users);
        } else {
          alert("Failed to load users");
        }
        setLoading(false);
      })
      .catch((err) => {
        alert("Error: " + err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="m-4 text-white">Loading users...</div>;
  }

  return (
    <div className="m-4">
      <h3 className="mb-4">All users Detail</h3>
      
     
      <ul className="list-group list-group-horizontal fw-bold bg-dark text-white mb-2">
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-1">ID</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-2">First_Name</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-2">Last_Name</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-1">email</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-1">password</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-2">address</li>
        <li className="list-group-item flex-fill bg-dark text-white border-0 col-2">city</li>
      </ul>

   
      {users.length > 0 ? (
        users.map((users) => (
          <ul key={users.pf_id} className="list-group list-group-horizontal mb-2">
            <li className="list-group-item flex-fill col-1">{users.pf_id}</li>
            <li className="list-group-item flex-fill col-2">{users.first_name}</li>
            <li className="list-group-item flex-fill col-2">{users.last_name}</li>
            <li className="list-group-item flex-fill col-1">{users.email}</li>
            <li className="list-group-item flex-fill col-1">{users.password}</li>
            <li className="list-group-item flex-fill col-2">{users.address}</li>
            <li className="list-group-item flex-fill col-2">{users.city}</li>
          </ul>
        ))
      ) : (
        <div className="text-white">No users found</div>
      )}
    </div>
  );
}

export default Acard4;