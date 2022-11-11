import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, author, category_id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        {/* <Card.Header>{author.name}</Card.Header> */}
        <Card.Title className="mb-3">{title}</Card.Title>
        <div className="d-flex justify-content-between">
          <p>
            <span className="fw-semibold">Author: </span>
            {author?.name}
          </p>
          <p>
            <span className="fw-semibold">Published Date: </span>
            {author?.published_date}
          </p>
          <div>
            <FaStar /> <span>{author?.rating?.number}</span>
          </div>
        </div>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Link to={`/category/${category_id}`}>
        <button
          className="btn btn-outline-primary w-100"
          style={{ borderRadius: "5px 5px 5px" }}
        >
          Go to Category
        </button>
      </Link>
    </Card>
  );
};

export default News;
