import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const { user, Login, Register, update, varifyEmail } =
    useContext(AuthContext);
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    Register(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(name, photo);
        varify();
        form.reset();
        setError("");
        // navigate("/");
        toast.success("Please varify your email address");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(error);
      });
  };

  const varify = () => {
    varifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const updateProfile = (name, photo) => {
    update(name, photo)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleChecked = (e) => {
    console.log(e.target.checked);
    setAccepted(e.target.checked);
  };
  console.log(accepted);
  return (
    <Form className="shadow p-5 rounded" onSubmit={handleLogin}>
      <h4 className="mb-3 text-success">Please Register !!</h4>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          name="photo"
          placeholder="Enter Photo URL"
          required
        />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleChecked}
          label={
            <>
              Accept <Link to={"/terms"}>Terms and Conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button variant="success" type="submit" disabled={!accepted}>
        Register
      </Button>
      <p className="mt-3 border rounded py-1 text-center border-primary">
        Already have an Account? Please{" "}
        <Link className="text-primary" to={"/login"}>
          Login
        </Link>
      </p>
    </Form>
  );
};

export default Register;
