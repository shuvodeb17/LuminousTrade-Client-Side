import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import Banner from "../pages/Home/Banner/Banner";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Register/Register";
import { baseUrl } from "../URL/URL";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${baseUrl}/specific-product/${params.id}`)
            },
            {
                path: 'cart',
                element: <PrivateRoute> <Cart /></PrivateRoute>
            },
            {
                path: 'payment-history',
                element: <PrivateRoute><PaymentHistory /></PrivateRoute>
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