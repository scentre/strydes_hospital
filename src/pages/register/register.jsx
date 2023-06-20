import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { errorToast, successToast } from "../../utils";
import { registerUser } from "../../store/auth/authActions";
import { Box, Flex, Text } from "@chakra-ui/react";
import Cicles from "../../assets/circles.svg";

import docs from "../../assets/docs.svg";
export const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [validationError, setValidationError] = useState("");
  let fullName = useRef("");
  let email = useRef("");
  let password = useRef("");

  const signUpUser = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // validation for all fields
    if (
      !fullName.value.trim() ||
      !email.value.trim() ||
      !password.value.trim()
    ) {
      setValidationError("All fields are required");
    } else {
      dispatch(
        registerUser({
          fullName: fullName.value,
          email: email.value,
          password: password.value,
        })
      )
        .unwrap()
        .then(() => {
          e.target.reset();
          successToast("User Registered Successfully");
        })
        .catch((errorData) => {
          errorToast(errorData.error);
        });
    }
  };

  return (
    <section className="p-8">
      <Toaster />
      <form onSubmit={signUpUser}>
        <Flex flexDirection={"row"} width={"100%"}>
          <Box
            bg={`url(${Cicles})`}
            width={"100%"}
            height={"100%"}
            bgRepeat="no-repeat"
            bgSize={"cover"}
          >
            <Box display={"flex"} height={"100%"} width={"100%"}>
              <Box
                mt={"50px"}
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
              >
                <Text
                  color={"#F1B749"}
                  fontSize={"54px"}
                  fontWeight={"extrabold"}
                  padding={"60px 60px 0 60px"}
                >
                  {" "}
                  Your One Stop
                </Text>
                <Text
                  color={"white"}
                  fontSize={"144px"}
                  fontWeight={"extrabold"}
                  padding={"0 60px 0 60px"}
                >
                  EMR
                </Text>
                <Box alignSelf={"flex-end"} justifySelf={"end"}>
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
                fontSize={"30px"}
                fontWeight={"700"}
                display={"flex"}
              >
                Register Your Hospital
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* <div>
					<h1>Sign Up</h1>
					<p className="mt-4 mb-8">If you already have an account registered <br/>
						You can <Link to='/login' className="link">Login here !</Link>
					</p>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Full Name</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="fullName"
							placeholder="Enter your full name"
							id="fullName"
							onChange={() => setValidationError('')}
							ref={(e) => { fullName = e; } }
							type="text"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Email</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="email"
							placeholder="Enter your email"
							id="email"
							onChange={() => setValidationError('')}
							ref={(e) => { email = e; } }
							type="email"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Password</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="password"
							placeholder="Enter your password"
							id="password"
							onChange={() => setValidationError('')}
							ref={(e) => { password = e; } }
							type="password"
							required />
					</div>
				</div>
				{validationError && <p className="text-left text-red-500">{validationError}</p>}
				<button type="submit" className="primaryButton">
					{loading ? 'Loading...' : 'Register'}
				</button> */}
      </form>
    </section>
  );
};
