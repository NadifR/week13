import React from "react";
import { Layout } from "../components";
import { FormControl, FormLabel, Input, Toast, VStack } from "@chakra-ui/react";

function NewBookPage(){
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        await createBook(formData);
        Toast({
          title: "Creste",
          description:"Successfully create",
          status: "Success",
          duration: 5000,
          isClosable: true,
        });
    }
    return <Layout>
        <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" required defaultValue={bookData?.title} />
        </FormControl>
        <FormControl>
          <FormLabel>Author</FormLabel>
          <Input name="author" required defaultValue={bookData?.author} />
        </FormControl>
        <FormControl>
          <FormLabel>Publisher</FormLabel>
          <Input name="publisher" required defaultValue={bookData?.publisher} />
        </FormControl>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <Input
            name="year"
            type="number"
            required
            defaultValue={bookData?.year}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Pages</FormLabel>
          <Input
            name="pages"
            type="number"
            required
            defaultValue={bookData?.pages}
          />
        </FormControl>
        {selectedImage && (
          <Image w={64} src={selectedImage} alt="Selected Image" />
        )}
        {!bookData?.image && (
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setSelectedImage(URL.createObjectURL(file));
              }}
            />
          </FormControl>
        )}

        <Button type="submit">Create Book</Button>
      </VStack>
    </form>
    </Layout>
}

export default NewBookPage;