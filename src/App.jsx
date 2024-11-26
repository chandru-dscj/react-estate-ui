import Homepage from "./routes/homepage/Homepage"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Listpage from "./routes/listpage/Listpage";
import Layout from "./routes/layout/layout";
import Singlepage from "./routes/singlepage/Singlepage";
import Profilepage from "./routes/profilepage/Profilepage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<Listpage/>
        },
        {
          path:"/:id",
          element:<Singlepage/>
        },
        {
          path:"/profile",
          element:<Profilepage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }
   
  ]);
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App