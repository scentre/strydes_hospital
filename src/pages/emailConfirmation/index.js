import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import { Box, Button, Flex, Text, Checkbox, center, Container } from "@chakra-ui/react";
import Cicles from "../../assets/circles.svg";

import docs from "../../assets/docs.svg";

const EmailConfirmation = () => {
  return (
    <section >
			<Toaster />
      <Container maxWidth={'100%'} height={'100vh'} className='p-8' bgColor={'#E7FFF5'}>
        <Flex height={'90%'} width={'90%'} justify={'space-between'} className='m-10' bgColor={'#E7FFF5'}>
          <Container boxShadow={"0px 8px 40px -8px #0C5F55"} bgColor={'#FFF'} maxWidth={'60%'} className='flex flex-row  m-8' borderRadius={'2rem'}>
            <Box className='pt-10' width={'100%'} overflow={'hidden'} >
              <Box position={'absolute'} top={'9'} className='h-15 w-15' bgColor={'#D9993F'} borderRadius={'50%'}></Box>
              <Text
                color={"#F1B749"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"36px"}
                fontWeight={"700"}
                mb={"20px"}
              >
                STRYDES <span className="text-[#0C5F55] ">HOSPITAL</span>
              </Text>

              <Text
                className='p-1'
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"20px"}
                fontWeight={"700"}
                display={"flex"}
                color={'#585252'}
                lineHeight={'20px'}
              >
                Email Confirmation sent
              </Text>
              <Text
                className='m-auto p-5'
                width={'40%'}
                textAlign={"center"}
                fontSize={"10px"}
                fontWeight={"700"}
                color={'#585252'}
                lineHeight={'20px'}
              >
                 Kindly check your mail for the confirmation email sent to verify this user. If you have verified your account you can continue using your account by logging in.
              </Text>
             
              <Box className='mt-8' textAlign={'center'}>
                <Button
                  width={"35%"}
                  alignSelf={"center"}
                  padding={"15px 10px"}
                  color={"white"}
                  bg="linear-gradient(271.04deg, #278175 29.96%, #30BDAA 58.99%, #02A499 70.16%, #01A499 94.91%);"
                  fontSize={"20px"}
                  fontFamily={"Inter"}
                  boxShadow={"0px 8px 40px -8px #0C5F55"}
                  borderRadius={"15px"}
                >
                  Sign In
                </Button>
              </Box>
              <Box >
                <img
                  height={'100%'}
                  className='w-full '
                  src={docs}
                  overflow={'hidden'}
                  alt="docs"
                />
							</Box>
            </Box>
          </Container>
        </Flex>
      </Container>
    </section>
  );
};

export default EmailConfirmation;
