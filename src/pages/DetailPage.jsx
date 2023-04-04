import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PATH } from "../constans/path";
import React, { useEffect, useState } from "react";
import { deleteBookById, getBookDetailById } from "../fetcher";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../components";

function DetailPage() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const Navigate  = useNavigate();
  const Toast = useToast();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const onDelete = async() =>{
    try {
      await  deleteBookById(id);

      Toast({
        title: `Delete ${book.title}`,
        description:"Delete Successfully",
        status: "Success",
        duration: 5000,
        isClosable: true,
      });
      navigate(PATH.home)
    } catch (error) {
        
    }
  }

  return (
    <Layout>
      <Box>
        <Flex my="6">
          {isLoading ? (
            <Skeleton height="300px" my="6" />
          ) : (
            <>
              <Box w="300px">
                <Image
                  src={`http://localhost:8000/${book.image}`}
                  alt={book.title}
                />
              </Box>
              <Box ml="8">
                <Heading as="h1" size="lg">
                  {book.title}
                </Heading>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  {book.author}
                </Text>
                <Text fontSize="xl" fontWeight="semibold" color="gray.500">
                  {book.publisher}
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="semibold"
                  color="gray.500"
                  mb="4">
                  {book.year} | {book.pages} pages
                </Text>
                <button colotScheme={"red"} onClick={onDelete}>DELETE</button>
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </Layout>
  );
}

export default DetailPage;
