import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Layout({ Children }) {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, window.localStorage.getItem("token"));

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <link to={PATH.home}>
        <Box p="2">
          <Heading size="md">My Bookstore</Heading>
        </Box>
        </link>
        <Box p="2">
          <Heading size="md">My Bookstore</Heading>
        </Box>

        <Spacer />

        <ButtonGroup gap="2">
          <Button
            colorScheme="teal"
            onClick={() => {
              window.localStorage.removeItem("token");
              setisLogin(false);
            }}>
            Log out
          </Button>
          {!isLogin && (
            <Link to={PATH.login}>
              <Button colorScheme="teal">Log in</Button>
            </Link>
          )}
          {!isLogin && (
            <Link to="/newbook">
              <Button colorScheme="teal">Create New Book</Button>
            </Link>
          )}
        </ButtonGroup>
      </Flex>
      <Container maxW="container.xl" color="#181818" p={2} mt={4}>
      {Children }
      </Container>
    </>
  );
}

export default Layout;
