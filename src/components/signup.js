import React, { useState } from "react";
import Login from "./login";




function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [lastname, setLastName] = useState("");
    
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();
        localStorage.setItem("Name", JSON.stringify(name));
        localStorage.setItem("Lastname", JSON.stringify(lastname));
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));
        alert("Saved in Local Storage");
        setLogin(!login);
    }
    function handleClick() {
        setLogin(!login);
    }
    return (
        <div>
            {" "}
            {login ? (
                <form onSubmit={handleFormSubmit}>
                    <h2>Sign Up</h2>
                    <div className="mb-3">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" onChange={(event) => setLastName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right" onClick={handleClick}>
                        Already registered <a href="/login-in">sign in?</a>
                    </p>
                </form>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default SignUp;
