import { Box, Image } from "@chakra-ui/react";
import man from "../../assets/man.svg";
import edit from "../../assets/edit.png";
const AdminCard = () => {
  return (
    <Box
      display={"flex"}
      gap={"24px"}
      bg={"white"}
      borderRadius={"45px"}
      shadow={"sm"}
      width={"100%"}
      padding={"25px"}
      boxShadow={"0px 24px 48px 0px rgba(16, 24, 40, 0.18)"}
    >
      <Image src={man} />
      <Box className="pt-5 w-full">
        <p className="text-black text-[18px] font-bold leading-tight">
          Dr. Adeola Martins
        </p>

        <p className=" text-teal-600 text-[14px] font-bold leading-tight">
          Super Admin
        </p>
      </Box>
      <div className="flex w-full justify-end">
        <div className="">
          <Image src={edit} />
        </div>
      </div>
    </Box>
  );
};

export default AdminCard;
