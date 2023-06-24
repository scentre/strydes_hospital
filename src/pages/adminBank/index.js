import React, { useState } from "react";
import AdminContentLayout from "../../components/adminContentLayout";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import AdminCard from "../../components/adminCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AdminTable from "../../components/adminTable";
import DateFilter from "../../components/dateFilter";
import DateDisplay from "../../components/dateDisplay";

const AdminBank = () => {
  const [value, onChange] = useState(new Date());
  return (
    <AdminContentLayout>
      <Grid display={"grid"} gridTemplateColumns={"1fr 2fr"} gap={"20px"}>
        <Box>
          <AdminCard />
        </Box>
        <GridItem rowSpan={"2"}>
          <AdminTable />
        </GridItem>
        <Box>
          <Calendar onChange={onChange} value={value} />
        </Box>
      </Grid>
      <DateFilter />
      <DateDisplay />
    </AdminContentLayout>
  );
};

export default AdminBank;
