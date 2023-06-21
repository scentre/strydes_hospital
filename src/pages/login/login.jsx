import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';
import { Box, Button, Flex, Grid, GridItem, Text, Checkbox, CheckboxGroup } from "@chakra-ui/react";
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
		<section className="p-8">
			<Toaster />
			<form onSubmit={signinUser}>
				<Flex flexDirection={"row"} width={"100%"}>
					<Box
						bg={`url(${Cicles})`}
						width={"100%"}
						height={"100%"}
						bgRepeat="no-repeat"
						bgSize={"cover"}
					>
						<Box display={"flex"} height={"100%"} width={"100%"} border={'1px solid black'}>
							<Box
								// mt={"50px"}
								display={"flex"}
								flexDirection={"column"}
								width={"100%"}
							>
								<Text
									color={"#F1B749"}
									fontSize={"54px"}
									fontWeight={"extrabold"}
									padding={"60px 60px 0 60px"}
									border={'1px solid red'}
								>
									Your One Stop
								</Text>
								<Text
									color={"white"}
									fontSize={"144px"}
									fontWeight={"extrabold"}
									paddingInline={"60px"}
									border={'1px solid red'}
								>
									EMR
								</Text>
								<Box alignSelf={"flex-end"} justifySelf={"end"} overflow={'hidden'}>
									<img
										src={docs}
										className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
										alt=""
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box className=" w-100" width={"100%"} padding={"50px"}>
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
						<Box
							padding={"20px"}
							gap={"30px"}
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
						<Box>
							<Checkbox isRequired iconColor='#585252' className='ml-10'>Remember this password</Checkbox>
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
					</Box>
				</Flex>
			</form>
    	</section>
	);
};
