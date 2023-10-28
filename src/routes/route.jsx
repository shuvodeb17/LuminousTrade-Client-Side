import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Banner from "../pages/Home/Banner/Banner";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },
]);


export default router;