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
          <Text
            onClick={() => setDate(day)}
            className={
              date === day
                ? "text-teal-600 text-[20px] font-bold leading-tight p-2 border-b-2 border-teal-700"
                : "text-neutral-700 text-[20px] font-bold leading-tight p-2"
            }
            cursor={"pointer"}
          >
            {day}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default DateFilter;
