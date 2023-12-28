import { ICardComponentProps } from "@/interfaces/cardComponent";
import { Card, Rate } from "antd";
import React from "react";

const RestaurantCard = ({
  name,
  rating,
  contact,
  address,
}: ICardComponentProps) => {
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={<img alt="restaurant" src="/Hamburguesa.jpg" />}
    >
      <Rate disabled defaultValue={rating} />
      <p>{name}</p>
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
