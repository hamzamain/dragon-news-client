import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Form, useNavigate } from "react-router-dom";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = (provider) => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={() => handleSignIn(google)}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button
          onClick={() => handleSignIn(github)}
          className="mb-2"
          variant="outline-dark"
        >
          <FaGithub /> Login with Github
        </Button>
        <p className="text-danger">{error}</p>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch />
            Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaDiscord /> Discord
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="d-lg-block d-none">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
