import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Stack,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser, registerUser } from "../fetcher";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";

function LoginRegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {  errors },
  } = useForm();
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();

  const isLoginPage = location.pathname === PATH.login


  const onSubmit =  async(data) => {
    console.log(data.confirmPassword);

    try {
        const res = isLoginPage ? await loginUser(data) : await registerUser(data);
        isLoginPage && Window.localStorage.setItem("token", res.token)
        toast({
            title: isLoginPage ? "Login" : "Registered",
            description: isLoginPage
             ? "You Have Successfully Log in"
              : "You have successfully registered. Now Please Log in",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate( isLoginPage ? PATH.home : PATH.login);
    } catch (e) {
        const error = new Error(e);
        Toast({
          title: "An error occurred.",
          description: error?.message || "An error occurred. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    }
    setError(error?.message || "An error occurred");
  };
  return (
    <Stack spacing={4} maxW="500px" textAlign="center">
      <Heading>Welcome To Book Store</Heading>
      <Link to={PATH.home}>
        <text>BAck To Home</text>
      </Link>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {! isLoginPage &&(
        <FormControl isInvalid={ errors?.name?.message}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "NAme is Required" })}
          />
          <FormErrorMessage>{ errors?.name?.message}</FormErrorMessage>
        </FormControl>
        )}
        <FormControl isInvalid={ errors?.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is Requierd" })}
          />
          <FormErrorMessage>{ errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={ errors?.password?.message}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is Required" })}
          />
          <FormErrorMessage>{ errors?.password?.message}</FormErrorMessage>
        </FormControl>
        {!isLoginPage &&(
        <FormControl isInvalid={ errors?.confirmPassword?.message}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your confirm password"
            {...register("confirmPassword", { required: " Confirm Password is Required" })}
          />
          <FormErrorMessage>{ errors?.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        )}
        <Link to={isLoginPage? PATH.register : PATH.login}>
            <Text>
                {isLoginPage
                ? "Dont Have an Account ? Click Here to Register"
                : "Already Have an Account ? Click Here to Login"}
            </Text>
        </Link>
        <button type="submit">Submit</button>
      </Form>
    </Stack>
  );
}

export default LoginRegisterPage;
