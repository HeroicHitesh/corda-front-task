import React from "react";
import { Card, Badge } from "react-bootstrap";
import style from "./recipe.module.css";

const Recipe = ({ id, title, image, category, label, price, description }) => {
  return (
    <div className={style.recipe}>
      <Card style={{ width: "18rem" }} key={id}>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>
            <Badge pill variant="danger" className="badge">
              {category}
            </Badge>
            <Badge pill variant="info" className="badge">
              {label ? label : ""}
            </Badge>
            <Badge pill variant="warning">
              $ {price}
            </Badge>
          </h4>
        </div>
      </Card>
    </div>
  );
};

export default Recipe;
