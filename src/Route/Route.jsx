import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]

    }
])

export default route;