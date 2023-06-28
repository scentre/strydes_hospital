import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import { Box, Button, Flex, Grid, Text, Checkbox, center, Container } from "@chakra-ui/react";
import Cicles from "../../assets/circles.svg";

import docs from "../../assets/docs.svg";
import InputBox from "../../components/inputBox";


export const Login = () => {

	const { user, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let email = useRef('');
	let password = useRef('');

	useEffect(() => {
		if (user) {
			navigate('/', { successLogin: true });
		}
	}, [navigate, user]);

	const signinUser = async (e) => {
		e.preventDefault();

		dispatch(loginUser({
			email: email.value,
			password: password.value
		}))
			.unwrap()
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	};

	return (
		<section >
			{}
			<Toaster />
			<Container maxWidth={'100%'} height={'100vh'} className='p-8' bgColor={'#E7FFF5'}>
				<Container maxWidth={'80%'} position={'relative'} textAlign={'center'} className='m-10 py-14' bgColor={'#EEF8FF'} rounded={'3rem'}>
					<Flex boxShadow={"0px 8px 40px -8px #0C5F55"} bgColor={'#FFF'} maxWidth={'80%'} className='flex flex-row justify-between  m-auto' rounded={'3rem'}>

						<Box boxShadow={"0px 8px 40px -8px #0C5F55"} position={'absolute'} top={'30px'} left={'350px'} textAlign={'center'} className='h-14 w-14' bgColor={'#D9993F'} borderRadius={'50%'}></Box>
						
						<Container
							bg={`url(${Cicles})`}
							bgRepeat="no-repeat"
							bgSize={"cover"}
							borderRadius={'3rem'}
							// roundedBottom={'full'}
							
						>
							<Box height={'100%'} width={'100%'}>
								<Text
									textAlign={'start'}
									className='mt-20 pl-3'
									color={"#F1B749"}
									fontSize={"40px"}
									fontWeight={"700"}
								>
									Your One Stop
								</Text>
								<Text
									pl={'3'}
									textAlign={'start'}
									color={"white"}
									fontSize={"50px"}
									fontWeight={"900"}
								>
									EMR
								</Text>
								<Box mt={'20'} >
									<img
										className='w-full'
										src={docs}
										alt="docs"
									/>
								</Box>
							</Box>
						</Container>
						<Container p={'2'} bgColor={'#FFF'} roundedBottomEnd={'3rem'} roundedTopEnd={'3rem'}>

							<Box className='m-10' >
								<Box>
									<Text
										color={"#F1B749"}
										display={"flex"}
										flexDirection={"column"}
										justifyContent={"center"}
										alignItems={"center"}
										fontSize={"30px"}
										fontWeight={"700"}
										mb={"20px"}
									>
										STRYDES <span className="text-[#0C5F55]">HOSPITAL</span>
									</Text>

									<Text
										justifyContent={"center"}
										alignItems={"center"}
										fontSize={"13px"}
										fontWeight={"700"}
										display={"flex"}
										color={'#585252'}
										lineHeight={'20px'}
									>
										Login to Begin The Whole Experience
									</Text>
								</Box>
								<form action="" onSubmit={signinUser}>
									<Box
										className='font-bold'
										fontSize={"12px"}
										color={'#585252'}
										padding={"20px"}
										gap={"10px"}
										display={"flex"}
										flexDirection={"column"}
									>
										<Box >
											<InputBox label="Email Address"/>
										</Box>
										<Box>
											<InputBox variant={'unstyled'} label="Password" />
										</Box>
									</Box>
									<Box textAlign={'start'}>
											<Checkbox isRequired iconColor='#585252' className='ml-5'>Remember this password</Checkbox>
									</Box>
									<Box className='mt-4' textAlign={'center'}>
										<Button
											className='hover:text-[#0C5F55]'
											width={"70%"}
											alignSelf={"center"}
											padding={"10px 5px"}
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
								</form>
							</Box>
							{/* <Box border={'1px solid red'}  textAlign={'end'}>
								<Box className='h-20 w-20 flex flex-row' textAlign={'center'} bgColor={'#D9993F'} borderRadius={'50%'} >
									<Box  className='h-12 w-12 m-auto' bgColor={'#FFF'} borderRadius={'50%'} ></Box>
								</Box>
							</Box> */}
						</Container>
					</Flex >
				</Container>
			</Container>
    	</section>
	);
};
