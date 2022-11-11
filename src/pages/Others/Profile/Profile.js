import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoUrlRef = useRef(user?.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photoUrlRef.current);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form className="p-5 shadow" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          defaultValue={user?.email}
          readOnly
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          onChange={handleNameChange}
          defaultValue={name}
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          ref={photoUrlRef}
          type="text"
          defaultValue={user?.photoURL}
          placeholder="PhotoUrl"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
