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
import inPatients from "../../assets/In-Patients.svg";
import outPatients from "../../assets/Out-Patients.svg";
import { useNavigate, useLocation } from "react-router-dom";

import { Box, Flex, Text, Collapse, Icon, Image } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

const AdminSideBar = () => {
  const [openMenus, setOpenMenus] = useState([]);
  const location = useLocation();

  //logo
  let logos = [
    { icon: bank, name: "bank", id: 1, subMenus: [] },
    {
      icon: users,
      name: "user",
      id: 2,
      subMenus: [
        {
          id: 11,
          icon: inPatients,
          name: "inpatients",
        },
        {
          id: 12,
          name: "outpatients",
          icon: outPatients,
        },
      ],
    },
    { icon: circle, name: "circle", id: 3, subMenus: [] },
    { icon: lab, name: "lab", id: 4, subMenus: [] },
    { icon: cross, name: "cross", id: 5, subMenus: [] },
    { icon: bucket, name: "bucket", id: 6, subMenus: [] },
    { icon: home, name: "home", id: 7, subMenus: [] },
    { icon: menu, name: "menu", id: 8, subMenus: [] },
    { icon: pot, name: "pot", id: 9, subMenus: [] },
    { icon: settings, name: "settings", id: 10, subMenus: [] },
  ];

  const navigate = useNavigate();

  const handleMenuToggle = (menuId) => {
    if (openMenus.includes(menuId)) {
      setOpenMenus(openMenus.filter((id) => id !== menuId));
    } else {
      setOpenMenus([...openMenus, menuId]);
    }
  };

  return (
    <Box
      bg="linear-gradient(180.62deg, #278175 0.21%, #01A499 99.82%)"
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"25px"}
      height={"95vh"}
      borderRadius={"30px"}
      p={"2 4"}
    >
      {/* Your logo image */}

      {logos.map(({ icon, name, id, subMenus }) => {
        const isMenuOpen = openMenus.includes(id);

        const isActive = location.pathname === `/admin/${name}`;

        return (
          <Box
            key={id}
            py={"2"}
            bg={isActive ? "#003229" : "transparent"}
            borderRadius="md"
          >
            <Flex
              align="center"
              pl={"3"}
              ml={"3"}
              py="1"
              mt="1"
              onClick={() => handleMenuToggle(id)}
            >
              {name === "user" ? (
                <Image key={name} src={icon} width="30px" cursor="pointer" />
              ) : (
                <Image
                  key={name}
                  src={icon}
                  width="30px"
                  cursor="pointer"
                  onClick={() => navigate(`/admin/${name}`)}
                />
              )}

              <Icon
                as={ChevronDownIcon}
                boxSize={4}
                mr="2"
                opacity={subMenus.length > 0 ? 1 : 0}
                transition="transform 0.2s"
                transform={isMenuOpen ? "rotate(90deg)" : ""}
                cursor="pointer"
              />
            </Flex>

            <Collapse in={isMenuOpen} animateOpacity>
              <Box pl="4">
                {subMenus.map(
                  ({ id: submenuId, icon: innerIcon, name: innerName }) => {
                    const normalizedLocationPath = location.pathname.replace(
                      /^\/|\/$/g,
                      ""
                    );
                    const normalizedSubMenuPath =
                      `/admin/${name}/${innerName}`.replace(/^\/|\/$/g, "");
                    const isSubMenuActive =
                      normalizedLocationPath === normalizedSubMenuPath;

                    return (
                      <Image
                        key={submenuId}
                        py="1"
                        _hover={{ color: "teal.400", cursor: "pointer" }}
                        src={innerIcon}
                        width="40px"
                        cursor="pointer"
                        bg={isSubMenuActive ? "#003229" : "transparent"}
                        borderRadius="md"
                        p={"5px"}
                        onClick={() => navigate(`/admin/${name}/${innerName}`)}
                      />
                    );
                  }
                )}
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default AdminSideBar;
