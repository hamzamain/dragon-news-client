import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(null);
  const { user, Login, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user?.emailVerified) {
          navigate(from, { replace: true });
          toast.success("login successfull");
        } else {
          toast.error(
            "your email is not verified. please verified your email address"
          );
        }
      })
      .catch((error) => {
        const errrorMessage = error.message;
        setError(errrorMessage);
        console.error(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Form className="shadow p-5 rounded" onSubmit={handleLogin}>
      <h4 className="mb-3 text-primary">Please Login !!</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>

      <p className="mt-3 border rounded py-1 text-center border-success">
        New to Dragon News? Please{" "}
        <Link className="text-success" to={"/register"}>
          Register
        </Link>
      </p>
    </Form>
  );
};

export default Login;
