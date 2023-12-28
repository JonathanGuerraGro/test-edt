import RestaurantContainer from "@/container/RestaurantContainer";
import serviceGetRestaurantsMelp from "@/services/front/serviceGetRestaurantsMelp";
import { Inter } from "next/font/google";
import { useQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: dataRestaurants } = useQuery(["getRestaurantsData"], () =>
    serviceGetRestaurantsMelp()
  );
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <div>
        <RestaurantContainer dataRestaurants={dataRestaurants} />
      </div>
    </main>
  );
}
