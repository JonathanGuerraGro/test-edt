import { ICardComponentProps } from "@/interfaces/cardComponent";
import { Card } from "antd";
import React from "react";

const RestaurantCard = ({
  id,
  name,
  rating,
  contact,
  address,
}: ICardComponentProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="restaurant" src="/Hamburguesa.jpg" />}
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{rating}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.site}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      <p>{address.street}</p>
    </Card>
  );
};

export default RestaurantCard;
