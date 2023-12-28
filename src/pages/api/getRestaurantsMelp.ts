import { messageErrorBFF } from "@/interfaces/notifications";
import axios from "axios";
import { IRestaurantDataResponse } from "@/interfaces/restaurantsData";
import { NextApiRequest, NextApiResponse } from "next";
import { API_MELP } from "@/constants/enviorements";

const getRestaurantsMelp = async (
  req: NextApiRequest,
  res: NextApiResponse<IRestaurantDataResponse | messageErrorBFF>
) => {
  try {
    const response = await axios.get(API_MELP);

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: "Error fetching data from Melp" });
  }
};

export default getRestaurantsMelp;
