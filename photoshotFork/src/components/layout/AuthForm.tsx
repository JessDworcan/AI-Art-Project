import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useMutation } from "react-query";
import GoogleLogin from 'react-google-login';
import { GoogleLoginResponse } from 'react-google-login';
import { GoogleLoginResponseOffline } from 'react-google-login';

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  
  const { mutate: login, isLoading } = useMutation(
    "login",
    () =>
      signIn("email", { email, redirect: false, callbackUrl: "/dashboard" }),
    {
      onSuccess: () => {
        router.push("/login?verifyRequest=1");
      },
    }
  );

  const handleGoogleSuccess = (response: any) => {
    signIn('google', {
        access_token: response.accessToken,
        redirect: false,
        callbackUrl: '/dashboard'
    })
    .then(() => {
        router.push("/login?verifyRequest=1");
    })
    .catch(err => {
        console.log(err);
    });
  };

  return (
    <Stack spacing={4} width="100%" mx="auto" maxW="md" py={12} px={6}>
      <Stack textAlign="center" align="center" spacing={0}>
        <Text fontWeight="extrabold" as="h2" fontSize="4xl">
          Sign in to Photoshot.
        </Text>
        <Text fontSize="lg">Use your email address or Google to sign in</Text>
      </Stack>
      <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
        <Stack
          as="form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (email) {
              login();
            }
          }}
          spacing={4}
        >
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="sarah@gmail.com"
              type="email"
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              isLoading={isLoading}
              rightIcon={<FaPaperPlane />}
              type="submit"
              variant="brand"
            >
              Send magic link
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <GoogleLogin
            clientId="1064621197622-maqp8na8oji5nackreu8tksali0jq1up.apps.googleusercontent.com"
            onSuccess={handleGoogleSuccess}
            onFailure={(response: any) => {console.log(response)}}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button 
              mt={4}
              onClick={renderProps.onClick} variant="brand"
              >
                Sign in with Google
              </Button>
            )}
          />
        </Stack>
      </Box>
    </Stack>
  );
}