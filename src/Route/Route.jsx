import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Checkout from "../Components/Checkout/Checkout";
import Mycart from "../Components/Mycart/Mycart";
import Ptivate from "../Components/Ptivate";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/checkout/:id",
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<Checkout></Checkout>
            },
            {
                path:"/mycart",
                element:<Ptivate><Mycart></Mycart></Ptivate>
            }
        ]

    }
])

export default route;