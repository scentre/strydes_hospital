import { Box } from "@chakra-ui/react";

const CardSummary = () => {
  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
      <Box className="w-[335px] h-[118px] bg-white rounded-[25px] shadow flex flex-col items-center justify-center">
        <div className="w-[111px] h-[23px] text-neutral-700 text-[16px] font-normal leading-tight">
          Total Revenue
        </div>
        <div className="text-neutral-700 text-[40px] font-medium leading-tight">
          N500,000
        </div>
      </Box>
      <Box className="w-[335px] h-[118px] bg-white rounded-[25px] shadow flex flex-col items-center justify-center">
        <div className="w-[111px] h-[23px] text-neutral-700 text-[16px] font-normal leading-tight">
          Total Revenue
        </div>
        <div className="text-neutral-700 text-[40px] font-medium leading-tight">
          N500,000
        </div>
      </Box>
      <Box className="w-[335px] h-[118px] bg-white rounded-[25px] shadow flex flex-col items-center justify-center">
        <div className="w-[111px] h-[23px] text-neutral-700 text-[16px] font-normal leading-tight">
          Total Revenue
        </div>
        <div className="text-neutral-700 text-[40px] font-medium leading-tight">
          N500,000
        </div>
      </Box>
      <Box className="w-[335px] h-[118px] bg-white rounded-[25px] shadow flex flex-col items-center justify-center">
        <div className="w-[111px] h-[23px] text-neutral-700 text-[16px] font-normal leading-tight">
          Total Revenue
        </div>
        <div className="text-neutral-700 text-[40px] font-medium leading-tight">
          N500,000
        </div>
      </Box>
    </Box>
  );
};

export default CardSummary;
