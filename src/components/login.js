import React, { useState } from "react";

function Login() {
    const [emaillog, setEmail] = useState(" ");
    const [passwordlog, setPassword] = useState(" ");

    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
        } else {
            setHome(!home);
        }
    }
    return (
        <div>
            {home ? (
                <form onSubmit={handleLogin}>
                    <h2>Login </h2>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="d-grid">
                        <button type="submit"  className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot to <a href="/sign-up"> Register?</a>
                    </p>
                </form>
            ) : (
                <a href="/table"><h2>Click here to view to data</h2></a>
            )}
        </div>
    );
}

export default Login;
