import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
  Text,
} from "@chakra-ui/react";
import { FormErrorMessage } from "@chakra-ui/react";

import React from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import { useColorModeValue } from "@chakra-ui/react";
import Navigationbar from "../Components/HomePage/Navigationbar";
import { Footer } from "./HomeComponents/Footer";
// import { CONFETTI_LIGHT, CONFETTI_DARK } from "../components/Confetti";
// import Navbar from "../components/HomePage/Navbar";
// import Footer from "../components/HomePage/Footer";

export default function SignInPage() {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = React.useState("");
  const [passError, setPassError] = React.useState("");
  const { email, password } = userData;

  // const { authState, Login } = useContext(AuthContext);

  const toast = useToast();

  const Navigate = useNavigate();

  React.useEffect(() => {
    if (!email && !password) {
      setEmailError("Email address is required.");
      setPassError("Please Fill the Password");
    }
  }, []);

  //const baseUrl = "https://healthcube.onrender.com";
  const handleSubmit = async () => {
    try {
      axios
        .post(
          `https://erin-dizzy-clam.cyclic.app/trendify/users/login`,
          userData
        )
        .then((res) => {
          const getToken = res.data.token;
          const Name = res.data.Name;

          console.log(res, "line55");
          localStorage.setItem("token", getToken);
          localStorage.setItem("UserName",JSON.stringify(Name) );

          toast({
            title: "Sucessfully Login.",
            description: "Please correct your detail.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });

          // use this to useNavigate here
          Navigate("/");
        })
        .catch((error) => {
          // fill the correct detail
          toast({
            title: "Wrong Credential.",
            description: "Please correct your detail.",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigationbar />
      <Stack
        bg={useColorModeValue("gray.100", "gray.900")}
        css={{
          // backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
          backgroundAttachment: "fixed",
        }}
        p={10}
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>

            <FormControl
              isRequired
              id="email"
              isInvalid={!!emailError}
              errorBorderColor="red"
            >
              <FormLabel>Email address</FormLabel>
              <Input
                borderColor="black"
                value={email}
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                  if (!e.target.value) {
                    setEmailError("Email address is required.");
                  } else {
                    setEmailError("");
                  }
                }}
                type="email"
                required
              />
              <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              id="password"
              isInvalid={!!passError}
              errorBorderColor="red"
            >
              <FormLabel>Password</FormLabel>
              <Input
                borderColor="black"
                value={password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                  if (!e.target.value) {
                    setPassError("Passsword address is required.");
                  } else {
                    setPassError("");
                  }
                }}
                type="password"
                isRequired
              />
              <FormErrorMessage>{passError}</FormErrorMessage>
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"orange.500"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={() => {
                  if (!emailError && !passError) {
                    handleSubmit();
                  } else {
                    toast({
                      title: "Fill all the Input.",
                      description: "Please correct your detail.",
                      status: "warning",
                      duration: 1000,
                      isClosable: true,
                    });
                  }
                }}
                bg={"orange.400"}
                colorScheme={"orange"}
                variant={"solid"}
              >
                Sign in
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User?{" "}
                  <Link to="/register" style={{ color: "#34c7c7" }}>
                    Register Here
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </>
  );
}
