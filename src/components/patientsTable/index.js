import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Tfoot,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import edit from "../../assets/edit.png";
import man from "../../assets/man.svg";
import square from "../../assets/plus-square.svg";

import { useState } from "react";
import SearchBar from "../searchBar";

const PatientsTable = ({ name }) => {
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 2, name: "Jane Smith", age: 30 },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const itemsPerPage = 5; // Number of items to display per page

  const maxPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <TableContainer
        bgColor={"white"}
        borderRadius={"45px"}
        boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.15)"}
        padding={"20px"}
      >
        <Box className="p-6 flex items-center  justify-between">
          <Text className="text-black text-[14px] font-extrabold leading-tight">
            {name}
          </Text>

          <Box className="text-right">
            {name === "Out-Patient Department" ? (
              <Box
                display={"flex"}
                alignContent={"center"}
                gap={"15px"}
                justifyContent={"center"}
              >
                <div className="">
                  <SearchBar />
                </div>
                <Button bg={"#139086"} px={"50px"} color={"white"}>
                  Add Patient
                </Button>
              </Box>
            ) : name === "In-Patient Department" ? (
              <Box
                display={"flex"}
                alignContent={"center"}
                gap={"15px"}
                justifyContent={"center"}
              >
                <div className="">
                  <SearchBar />
                </div>
                <Button bg={"#139086"} px={"50px"} color={"white"}>
                  Discharge
                </Button>
              </Box>
            ) : name === "Records" ? (
              <Button
                bg={"#139086"}
                px={"50px"}
                color={"white"}
                onClick={onOpen}
              >
                Add Record
              </Button>
            ) : (
              ""
            )}
            {/* <span className="text-[#139086] text-[14px] font-extrabold float-right flex gap-4 items-center">
            View All
            <Image src={edit} />
          </span> */}
          </Box>
        </Box>
        <Table variant="unstyled" bgColor={"white"}>
          <Thead>
            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Th>Patient ID</Th>
              <Th>Patient Name</Th>
              <Th>Consulting Doctor</Th>
              <Th>Gender</Th>
              <Th>Bed Number</Th>
              <Th className="float-right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Td>AB/SMH/01</Td>
              <Td>John Doe</Td>
              <Td>Dr Bolaji Ann</Td>
              <Td>Male</Td>
              <Td>F1 - W2 - B3</Td>
              <Td className="flex w-full gap-3 justify-end">
                <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                  {" "}
                  Show Profile
                </div>
              </Td>
            </Tr>

            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Td>AB/SMH/01</Td>
              <Td>John Doe</Td>
              <Td>Dr Bolaji Ann</Td>
              <Td>Male</Td>
              <Td>F1 - W2 - B3</Td>
              <Td className="flex w-full gap-3 justify-end">
                <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                  {" "}
                  Show Profile
                </div>
              </Td>
            </Tr>
            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Td>AB/SMH/01</Td>
              <Td>John Doe</Td>
              <Td>Dr Bolaji Ann</Td>
              <Td>Male</Td>
              <Td>F1 - W2 - B3</Td>
              <Td className="flex w-full gap-3 justify-end">
                <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                  {" "}
                  Show Profile
                </div>
              </Td>
            </Tr>
            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Td>AB/SMH/01</Td>
              <Td>John Doe</Td>
              <Td>Dr Bolaji Ann</Td>
              <Td>Male</Td>
              <Td>F1 - W2 - B3</Td>
              <Td className="flex w-full gap-3 justify-end">
                <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                  {" "}
                  Show Profile
                </div>
              </Td>
            </Tr>
            <Tr>
              {name === "Out-Patient Department" ? (
                <Td>
                  {" "}
                  <Image src={man} w={"43px"} />
                </Td>
              ) : (
                <Td>
                  <Image src={square} w={"30px"} />
                </Td>
              )}
              <Td>AB/SMH/01</Td>
              <Td>John Doe</Td>
              <Td>Dr Bolaji Ann</Td>
              <Td>Male</Td>
              <Td>F1 - W2 - B3</Td>
              <Td className="flex w-full gap-3 justify-end">
                <div className=" bg-teal-600 rounded-xl text-white p-2 px-5">
                  {" "}
                  Show Profile
                </div>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          px="50px"
          pt="30px"
          pb="10px"
        >
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </Button>
          {console.log(maxPages)}
          {Array.from({ length: maxPages }, (_, index) => (
            <Button
              key={index + 1}
              mx={1}
              variant={currentPage === index + 1 ? "solid" : "outline"}
              colorScheme={currentPage === index + 1 ? "teal" : "gray"}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button onClick={nextPage} disabled={currentPage === maxPages}>
            Next
          </Button>
        </Box>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PatientsTable;
