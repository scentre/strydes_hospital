import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DateFilter = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        gap={"20px"}
        padding={"10px 20px"}
        margin={"30px 10px"}
      >
        <Text>Last Year</Text>
        <Text>Last Month</Text>
        <Text>Last Week</Text>
        <Text>Last 24 hours</Text>
      </Box>
    </Box>
  );
};

export default DateFilter;
