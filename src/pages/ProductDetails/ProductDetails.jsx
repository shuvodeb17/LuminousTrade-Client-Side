import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";
import toast, { Toaster } from 'react-hot-toast';


const ProductDetails = () => {

    const { user } = useContext(AuthContext)
    const product = useLoaderData();
    const { _id, image, name, email, productName, title, details, price } = product?.product;

    const addToCartHandler = (product) => {
        const allProductInfo = product.product
        const userInfo = user;

        fetch(`${baseUrl}/add-cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ allProductInfo, userInfo })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result?.newCart?._id){
                    toast.success('Cart add product')
                }
            })
    }

    return (
        <div className="container mx-auto md:px-36 mt-5">
            <div className="grid grid-cols-2 gap-5">
                <img className="" src={`${baseUrl}/images/${image}`} alt="" />
                <div className="">
                    <h2 className="text-2xl font-extrabold mb-5">Product Name:  {productName}</h2>
                    <h2 className="text-[18px]">{title}</h2>
                    <p className="mt-3 mb-8">
                        {details}
                    </p>

                    <hr className="mb-8" />

                    <label className="bg-[#EFF3FF] text-[#6794FE] px-5 py-2 rounded font-bold text-[17px]">Price: <span className="">${price}</span></label>

                    <div className="mt-5">
                        <p className="text-[18px]">Owner Information</p>
                        <p className="">Name: {name}</p>
                        <p className="">Email: {email}</p>
                    </div>

                    <button onClick={() => addToCartHandler(product)} className="mt-5 bg-[#3577F0] text-[#fff] px-5 py-2 w-full rounded">Add To Cart</button>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;