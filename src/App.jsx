
import './App.css'

import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import Upload from './pages/Upload'

import { Box } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'upload',
    element: <Upload />,
  },
  {
    path: '*',
    element: <Error />
  },
])
function App() {


  return (
      <RouterProvider router={router} />

  )
}

export default App
