import React, { useEffect, useState } from "react";
import { InfoCard, Layout } from '@vitejs/plugin-react';
import { getAllBooks} from "../fetcher/index"


function HomePage(){
    const [books, setBooks] = useState(nul);

    useEffect(()=> {
      const fetcheBooks = async () =>{
        const books = await getAllBooks();
        setBooks(books);
      };
      fetcheBooks();
    }, []);
    return   
    <Layout>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {books?.map((books, index) =>(
            <InfoCard key={index} {...books}/>
        ))}
        </Grid>
        
    </Layout> 
}

export default HomePage;