import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Banner from "../pages/Home/Banner/Banner";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";
import { baseUrl } from "../URL/URL";


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
                path: 'add-product',
                element: <AddProduct />
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails />,
                loader: ({params}) => fetch(`${baseUrl}/specific-product/${params.id}`)
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