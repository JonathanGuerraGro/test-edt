import { IRestaurantDataResponse } from "@/interfaces/restaurantsData";
import axiosInstance from "@/utils/axiosInstance";

const serviceGetRestaurantsMelp = (): Promise<IRestaurantDataResponse[]> =>
  axiosInstance.get("/api/getRestaurantsMelp").then((res) => res.data);

export default serviceGetRestaurantsMelp;
