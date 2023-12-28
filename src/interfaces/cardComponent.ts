import { IAddress, IContact } from "./restaurantsData";
export interface ICardComponentProps {
  rating: number;
  name: string;
  contact: IContact;
  address: IAddress;
}
