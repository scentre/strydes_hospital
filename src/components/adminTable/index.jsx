import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import edit from "../../assets/edit.png";

const AdminTable = () => {
  return (
    <TableContainer
      bgColor={"white"}
      borderRadius={"45px"}
      boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.15)"}
      padding={"3 0px"}
    >
      <Box className="flex justify-between items-center">
        <Text className="text-black text-[14px] font-extrabold leading-tight">
          Today’s Appointments
        </Text>
        <Box className="text-right">
          <span className="text-[#139086] text-[14px] font-extrabold float-right flex gap-4 items-center">
            View All
            <Image src={edit} />
          </span>
        </Box>
      </Box>
      <Table variant="unstyled" bgColor={"white"}>
        <Thead>
          <Tr className="border-b text-[#139086]">
            <Th>Patient ID</Th>
            <Th>Patient Name</Th>
            <Th>Consulting Doctor</Th>
            <Th className="float-right">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>AB/SMH/01</Td>
            <Td>John Doe</Td>
            <Td>Dr Bolaji Ann</Td>
            <Td className="flex w-full gap-3 justify-end">
              <div className=" bg-amber-300 rounded-xl p-2 px-5">
                Medical History
              </div>
              <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                {" "}
                Diagnosis
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>AB/SMH/01</Td>
            <Td>John Doe</Td>
            <Td>Dr Bolaji Ann</Td>
            <Td className="flex w-full gap-3 justify-end">
              <div className=" bg-amber-300 rounded-xl p-2 px-5">
                Medical History
              </div>
              <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                {" "}
                Diagnosis
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>AB/SMH/01</Td>
            <Td>John Doe</Td>
            <Td>Dr Bolaji Ann</Td>
            <Td className="flex w-full gap-3 justify-end">
              <div className=" bg-amber-300 rounded-xl p-2 px-5">
                Medical History
              </div>
              <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                {" "}
                Diagnosis
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>AB/SMH/01</Td>
            <Td>John Doe</Td>
            <Td>Dr Bolaji Ann</Td>
            <Td className="flex w-full gap-3 justify-end">
              <div className=" bg-amber-300 rounded-xl p-2 px-5">
                Medical History
              </div>
              <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                {" "}
                Diagnosis
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>AB/SMH/01</Td>
            <Td>John Doe</Td>
            <Td>Dr Bolaji Ann</Td>
            <Td className="flex w-full gap-3 justify-end">
              <div className=" bg-amber-300 rounded-xl p-2 px-5">
                Medical History
              </div>
              <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                {" "}
                Diagnosis
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
