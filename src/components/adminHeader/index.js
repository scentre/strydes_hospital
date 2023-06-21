import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../searchBar";

const AdminHeader = () => {
  return (
    <Box display={"flex"}>
      <Text>STRYDES HOSPITAL</Text>
      <SearchBar />
    </Box>
  );
};

export default AdminHeader;
