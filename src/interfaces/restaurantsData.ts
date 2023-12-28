export interface ILocation {
  lat: number;
  lng: number;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  location: ILocation;
}

export interface IContact {
  site: string;
  email: string;
  phone: string;
}

export interface IRestaurantDataResponse {
  id: string;
  rating: number;
  name: string;
  contact: IContact;
  address: IAddress;
}
