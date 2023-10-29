import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";


const ProductDetails = () => {

    const {user} = useContext(AuthContext)
    const product = useLoaderData();
    const { _id, image, name, email, title, details, price } = product?.product;

    const addToCartHandler = (product) => {
        console.log(product.product)
    }

    return (
        <div className="container mx-auto md:px-36 mt-5">
            <div className="grid grid-cols-2 gap-5">
                <img className="" src={`${baseUrl}/images/${image}`} alt="" />
                <div className="">
                    <h2 className="text-3xl font-extrabold">{title}</h2>
                    <p className="mt-3 mb-5">
                        {details}
                    </p>

                    <label className="bg-[#EFF3FF] text-[#6794FE] px-5 py-2 rounded font-bold text-2xl">Price: <span className="">${price}</span></label>

                    <div className="mt-5">
                        <p>Owner Information</p>
                        <p className="text-sm">Name: {name}</p>
                        <p className="text-sm">Email: {email}</p>
                    </div>

                    <button onClick={() => addToCartHandler(product)} className="mt-5 bg-[#3577F0] text-[#fff] px-5 py-2 w-full rounded">Add To Cart</button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;