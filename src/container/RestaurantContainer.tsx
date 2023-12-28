import React, { useState } from "react";
import RestaurantCard from "@/components/Card";
import { IRestaurantsContainerProps } from "@/interfaces/restaurantsContainerProps";
import { Pagination } from "antd";
import TitlePage from "@/components/titlePage";

const RestaurantContainer = ({
  dataRestaurants,
}: IRestaurantsContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Número de tarjetas por página

  // Calcula el índice de inicio y fin para las tarjetas de la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentRestaurantCard = dataRestaurants
    ?.slice(startIndex, endIndex)
    ?.map((restaurant) => (
      <RestaurantCard
        key={restaurant?.id}
        id={restaurant?.id}
        name={restaurant?.name}
        rating={restaurant?.rating}
        contact={restaurant?.contact}
        address={restaurant?.address}
      />
    ));

  // Calcula la cantidad total de páginas
  const totalItems = dataRestaurants?.length || 0;
  const calculatePageSizeOptions = (totalItems: number): string[] => {
    const options = [2, 5, 10].map((divisor) =>
      Math.ceil(totalItems / divisor)
    );
    return options.map(String);
  };

  const pageSizeOptions = calculatePageSizeOptions(totalItems);

  // Manejador de cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Manejador de cambio de elementos por página
  const handlePageSizeChange = (current: number, size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1); // Reinicia la página al cambiar la cantidad de elementos por página
  };

  return (
    <div>
      <TitlePage />
      <div className={"card-container mt-5"}>{currentRestaurantCard}</div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={totalItems}
        onChange={handlePageChange}
        onShowSizeChange={handlePageSizeChange}
        showSizeChanger
        pageSizeOptions={calculatePageSizeOptions(totalItems)} // Puedes personalizar las opciones según tus necesidades
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default RestaurantContainer;
