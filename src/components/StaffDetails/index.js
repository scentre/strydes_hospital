import { Box } from "@chakra-ui/react";
import React from "react";
import AdminCard from "../adminCard";

const StaffDetails = () => {
  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap={"20px"}>
      <AdminCard />
      <AdminCard />
      <AdminCard />
      <AdminCard />
      <AdminCard />
      <AdminCard />
    </Box>
  );
};

export default StaffDetails;
