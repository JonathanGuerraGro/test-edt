import { IAddress, IContact } from "./restaurantsData";
export interface ICardComponentProps {
  id: string;
  rating: number;
  name: string;
  contact: IContact;
  address: IAddress;
}
