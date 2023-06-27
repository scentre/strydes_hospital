import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const DateFilter = () => {
  const days = ["Last Year", "Last Month", "Last Week", "Last 24 hours"];
  const [date, setDate] = useState("Last Year");
  return (
    <Box>
      <Box
        display={"flex"}
        gap={"20px"}
        padding={"10px 20px"}
        margin={"30px 10px"}
      >
        {days.map((day) => (
          <Button
            onClick={() => setDate(day)}
            className={
              date === day
                ? "bg-red-600 text-teal-600 text-[20px] font-bold leading-tight"
                : "text-neutral-700 text-[20px] font-bold leading-tight bg-green-500"
            }
          >
            {day}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default DateFilter;
