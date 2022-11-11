import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const NewsSummaryjCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, author, _id } = news;
  return (
    <div className="mb-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image
              src={author?.img}
              className="me-2"
              roundedCircle
              style={{ height: "60px" }}
            ></Image>
            <div>
              <p className="mb-0 fw-semibold">{author?.name}</p>
              <p className="mb-0">{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2" />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2" />
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryjCard;