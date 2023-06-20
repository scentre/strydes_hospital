import { Box, Button, Image, Spacer, Text } from "@chakra-ui/react";
import docs from "../../assets/docs.svg";
const EmailConfirmation = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#e7fff5]">
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"70vh"}
        bg={"white"}
        w={"55vw"}
        gap={"30px"}
      >
        <Box>
          <Text
            color={"#F1B749"}
            fontSize={"36px"}
            mt={"30px"}
            padding={"30px"}
            textAlign={"center"}
          >
            STRYDES <span className="text-[#0C5F55] block">HOSPITAL</span>
          </Text>
          <Spacer></Spacer>
          <Text fontSize={"32px"}>Email Confirmation Sent</Text>
        </Box>
        <Text width={"60%"}>
          Kindly check your mail for the confirmation email sent to verify this
          user. If you have verified your account you can continue using your
          account by logging in.
        </Text>
        <Button
          width={"300px"}
          bg=" linear-gradient(271.04deg, #278175 29.96%, #30BDAA 58.99%, #02A499 70.16%, #01A499 94.91%)"
          textColor={"white"}
        >
          Sign in
        </Button>
        <Image src={docs} width={"full"} height={"270px"} />
      </Box>
    </div>
  );
};

export default EmailConfirmation;
