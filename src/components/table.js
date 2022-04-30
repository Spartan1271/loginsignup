import React, { useState } from "react";

function Home() {
  const [ name,lastname, password, email ] = useState("");
 
  const data = [
    { name: localStorage.getItem("Name",JSON.stringify(name)),
      lastname: localStorage.getItem("Lastname", JSON.stringify(lastname)),
      email: localStorage.getItem("Email", JSON.stringify(email)),
      password: localStorage.getItem("Password", JSON.stringify(password)) }
  ]


  
  return (
    <>
    
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>

  <tbody>
  {data.map((val, key) => {
          return (
            <tr key={key}>
              <th scope="row">1</th>
              <td>{val.name}</td>
              <td>{val.lastname}</td>
              <td>{val.email}</td>
              <td>{val.password}</td>
            </tr>
          )
        })}

  </tbody>
</table>


    </>
  );
}

export default Home;
