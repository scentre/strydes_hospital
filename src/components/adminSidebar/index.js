import { Box, Image } from "@chakra-ui/react";
import React from "react";
import bank from "../../assets/bank.svg";
import bucket from "../../assets/bucket.svg";
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
import home from "../../assets/home.svg";
import lab from "../../assets/lab.svg";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import pot from "../../assets/pot.svg";
import settings from "../../assets/settings.svg";
import users from "../../assets/users.svg";
const AdminSideBar = () => {
  let logos = [
    bank,
    bucket,
    circle,
    home,
    lab,
    cross,
    menu,
    pot,
    settings,
    users,
  ];
  return (
    <Box
      bg="linear-gradient(180.62deg, #278175 0.21%, #01A499 99.82%)"
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"25px"}
      height={"90vh"}
      borderRadius={"30px"}
    >
      <Image src={logo} width={"80px"} cursor={"pointer"} />

      {logos.map((item) => (
        <Image src={item} width={"30px"} cursor={"pointer"} />
      ))}
    </Box>
  );
};

export default AdminSideBar;
