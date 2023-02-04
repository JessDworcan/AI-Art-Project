import AuthForm from "@/components/layout/AuthForm";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import GoogleLogin from 'react-google-login';
import { GoogleLoginResponse } from 'react-google-login';
import { GoogleLoginResponseOffline } from 'react-google-login';

const Login = () => {
  const router = useRouter();

  const handleGoogleSignInSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    // Use the response to make API calls or to authenticate the user
}

const handleGoogleSignInFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    // Handle the error
}



  return (
    <Flex flex="1" align="center" justify="center">
      {router.query.verifyRequest ? (
        <Box textAlign="center">
          <Heading>
            Check your email <Icon mb="-4px" as={MdCheckCircleOutline} />
          </Heading>
          <Text mt={3} fontSize="2xl">
            A <b>sign in link</b> has been sent to your email address.
          </Text>
        </Box>
      ) : (
        <AuthForm />
      )}
    </Flex>
  );
};

export default Login;
