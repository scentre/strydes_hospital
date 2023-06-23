import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../searchBar";
import message from "../../assets/message.svg";
import lock from "../../assets/lock.svg";
import bell from "../../assets/bell.svg";
const AdminHeader = () => {
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"20px"}
    >
      <Text>
        <span className="text-amber-300 text-[20px] font-black leading-tight">
          STRYDES
        </span>
        <span className="text-black text-[20px] font-black leading-tight">
          {" "}
          <br />
        </span>
        <span className="text-teal-800 text-[20px] font-bold leading-tight">
          HOSPITAL
        </span>
      </Text>

      <Box display="flex" gap="50px" alignItems={"center"}>
        <Box alignSelf={"flex-end"} marginTop={"10px"}>
          <SearchBar />
        </Box>
        <Box display="flex" gap="30px" alignItems={"center"}>
          <Image src={message} />
          <Image src={bell} />
          <Image src={lock} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHeader;
