import { ChakraProvider } from '@chakra-ui/react';
import { PATH } from './constans/path';
import { LoginRegisterPage, DetailPage,HomePage, NewBookPage,EditBookPage } from '@pages';
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: PATH.login,
    element: <LoginRegisterPage />,
  },
  {
    path: PATH.register,
    element: <LoginRegisterPage />,
  },
  {
    path: PATH.detail,
    element: <DetailPage />,
  },
  {
    path: PATH.newbook,
    element: <NewBookPage />,
  },
  {
    path: PATH.home,
    element: <HomePage />,
  },
  {
    path: PATH.Edit,
    element: <EditBookPage/>,
  },
  {
    path: "/*",
    element: <Navigate to={PATH.home} />,
  },
]);

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
     
    </ChakraProvider>
  )
}

export default App;