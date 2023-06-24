import { Box } from "@chakra-ui/react";
import CardSummary from "../cardSummary";
import StaffDetails from "../StaffDetails";

const DateDisplay = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <CardSummary />

      <StaffDetails />
    </Box>
  );
};

export default DateDisplay;
