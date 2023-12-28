import { Flex, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

interface SearchFilterProps {
  searchFilter: string;
  setSearchFilter: (filter: string) => void;
  setSelectedFilter: (filter: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchFilter,
  setSearchFilter,
  setSelectedFilter,
}) => {
  return (
    <>
      <Flex className="filters">
        <p>Filtrar por:</p>
        <Select
          defaultValue="name"
          style={{ width: 238, paddingLeft: 18 }}
          onChange={setSelectedFilter}
        >
          <Option value="name">Nombre</Option>
          <Option value="rating">Rating</Option>
          <Option value="address">Dirección</Option>
        </Select>
      </Flex>
      <Input
        type="text"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Search restaurants"
        className="mt-3"
      />
    </>
  );
};

export default SearchFilter;
