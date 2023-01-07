import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const { id, name, email } = props.books;
  return (
    <div className="item">
      <div className="content">
        <Link
          to={{ pathname: `/books/${id}`, state: { books: props.books } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { books: props.books } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default BookCard;
