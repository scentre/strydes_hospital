import { Box } from "@chakra-ui/react";

const ContentTab = ({ state, setState, tabs }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} mb={"50px"}>
      <Box
        className=" bg-white rounded-[25px] shadow flex justify-between"
        boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.15)"}
        width={"fit-content"}
        p={"30px"}
        px={"30px"}
        gap={"40px"}
      >
        {tabs.map((item) => (
          <Box
            className={
              state === item
                ? " bg-orange-300  border-orange-400   text-black  font-extrabold leading-tight rounded-2xl shadow  px-8 py-4"
                : "text-black  font-extrabold leading-tight rounded-2xl shadow  px-8 py-4"
            }
            onClick={() => setState(item)}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ContentTab;
