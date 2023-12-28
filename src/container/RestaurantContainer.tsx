import React, { useState } from "react";
import RestaurantCard from "@/components/Card";
import { IRestaurantsContainerProps } from "@/interfaces/restaurantsContainerProps";
import { Flex, Pagination, Select } from "antd";
import TitlePage from "@/components/titlePage";
import SearchFilter from "@/components/searchComponent";

const { Option } = Select;

const RestaurantContainer = ({
  dataRestaurants,
}: IRestaurantsContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedFilter, setSelectedFilter] = useState("name");
  const [filterValue, setFilterValue] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const sortedRestaurants = [...(dataRestaurants ?? [])].sort((a, b) => {
    switch (sortOrder) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const currentRestaurantCard = sortedRestaurants
    ?.filter((restaurant) => {
      switch (selectedFilter) {
        case "name":
          return restaurant?.name.includes(filterValue);
        case "rating":
          return String(restaurant?.rating).includes(filterValue);
        case "address":
          return (
            restaurant?.address.city.includes(filterValue) ||
            restaurant?.address.state.includes(filterValue) ||
            restaurant?.address.street.includes(filterValue)
          );
        default:
          return "";
      }
    })
    ?.slice(startIndex, endIndex)
    ?.map((restaurant) => (
      <RestaurantCard
        key={restaurant?.id}
        name={restaurant?.name}
        rating={restaurant?.rating}
        contact={restaurant?.contact}
        address={restaurant?.address}
      />
    ));
  const totalItems = dataRestaurants?.length || 0;

  const calculatePageSizeOptions = (totalItems: number): string[] => {
    const options = [2, 5, 10].map((divisor) =>
      Math.ceil(totalItems / divisor)
    );
    return options.map(String);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1);
  };
  return (
    <div>
      <TitlePage />
      <div className="m-4">
        <h2 className="text-title"> Busca tu restaurante favorito </h2>
        <Flex className="filters">
          <p>Ordenar por:</p>

          <Select
            defaultValue="name"
            style={{ width: 220 }}
            onChange={setSortOrder}
          >
            <Option value="name">Alfabéticamente</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </Flex>

        <SearchFilter
          searchFilter={filterValue}
          setSearchFilter={setFilterValue}
          setSelectedFilter={setSelectedFilter}
        />

        <div className={"card-container mt-5"}>{currentRestaurantCard}</div>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalItems}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
          showSizeChanger
          pageSizeOptions={calculatePageSizeOptions(totalItems)}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default RestaurantContainer;
