import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";
import CartTable from "./CartTable";
import CheckoutForm from "./CheckoutForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe('pk_test_51O6r3OEfgjC5M1QioI9otGroBj9k9dRf6AsmDEXW2vU63IuzknJTtYtkcZCQ6mBXrTAtunz13QP1UfxwzuMkMvtd00vUQPPW3N');
const Cart = () => {

    const { user } = useContext(AuthContext);

    const { isLoading, data } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/add-cart-products?email=${user?.email}`)
            return response.json()
        },
    })
    const products = data?.result;
    // return [isLoading, data]


    let totalAmount = 0;
    if (Array.isArray(products)) {
        totalAmount = products.reduce((total, currentValue) => {
            return total + currentValue.price;
        }, 0);
    } else {
        console.log("Products is not an array or is undefined.");
    }


    return (
        <div className="container mx-auto md:px-10">
            {
                products?.length === 0 ?
                    <h2 className="py-10 text-center text-2xl font-bold">No products available</h2>
                    :
                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg mt-10">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-sm font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        <th class="px-4 py-3">Image</th>
                                        <th class="px-4 py-3">Product Name</th>
                                        <th class="px-4 py-3">Price</th>
                                        <th class="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    {
                                        products?.map(product =>
                                            <CartTable
                                                key={product._id}
                                                product={product}
                                            />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }


            <Elements stripe={stripePromise}>
                <CheckoutForm price={totalAmount}/>
            </Elements>

            {/* <div className="text-center">
                <button className="bg-[#3577F0] text-[#fff] text-center w-6/12 py-2">Pay {totalAmount}</button>
            </div> */}
        </div>
    );
};

export default Cart;