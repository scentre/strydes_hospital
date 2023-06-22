import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import { Box, Button, Flex, Grid, GridItem, Text, Checkbox, center, Container } from "@chakra-ui/react";
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
			<Toaster />
			<Container maxWidth={'100%'} height={'100vh'} className='p-8' bgColor={'#E7FFF5'}>
				<Flex height={'90%'} width={'90%'} justify={'space-between'} className='m-10' bgColor={'#EEF8FF'}>
					<Container position={'relative'} boxShadow={"0px 8px 40px -8px #0C5F55"} maxWidth={'80%'} className='flex flex-row  m-8' borderRadius={'2rem'}>

						
						<Box position={'absolute'} top={''} className='h-20 w-20' bgColor={'#D9993F'} borderRadius={'50%'}></Box>
						
						<Container width={'100%'}>
							<Box
								bg={`url(${Cicles})`}
								bgRepeat="no-repeat"
								bgSize={"cover"}
								borderRadius={'5rem'}
								height={'100%'}
							>
								<Box className='flex flex-col' height={'auto'}>
									
									
									
									<Text
										className='mt-20 pl-3'
										width={'70%'}
										color={"#F1B749"}
										fontSize={"40px"}
										fontWeight={"700"}
									>
										Your One Stop
									</Text>
									<Text
										className='pl-3'
										color={"white"}
										fontSize={"100px"}
										fontWeight={"900"}
									>
										EMR
									</Text>
									<Box >
										<img
											height={'100%'}
											className='w-full'
											src={docs}
											overflow={'hidden'}
											alt="docs"
										/>
									</Box>
									
								</Box>
							</Box>
						</Container>
						<Container>

							<Box className='m-9 py-5'>
								<Box>
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
										STRYDES <span className="text-[#0C5F55]">HOSPITAL</span>
									</Text>

									<Text
										justifyContent={"center"}
										alignItems={"center"}
										fontSize={"15px"}
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
										padding={"20px"}
										gap={"20px"}
										display={"flex"}
										flexDirection={"column"}
										justifyContent={'space-between'}
									>
										<Box>
											<InputBox label="Email Address" ml-5/>
										</Box>
										<Box>
											<InputBox label="Password" />
										</Box>
									</Box>
									<Box className='p-2' textAlign={'start'}>
											<Checkbox isRequired iconColor='#585252' className='ml-5 '>Remember this password</Checkbox>
									</Box>
									<Box className='mt-4' textAlign={'center'}>
										<Button
											width={"50%"}
											alignSelf={"center"}
											padding={"30px 20px"}
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
						</Container>
					</Container>
				</Flex>
			</Container>
    	</section>
	);
};
