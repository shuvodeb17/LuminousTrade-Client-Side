import { Link } from "react-router-dom";
import { baseUrl } from "../../../URL/URL";

const ProductsCards = ({ product }) => {
    const { _id, name, productName, ownerImage, image, title, price } = product;

    const detailsHandler = (product) => {
        console.log(product)
    }

    return (
        <div className="border rounded-lg relative">
            <img className="h-[180px] w-full" src={`${baseUrl}/images/${image}`} alt="" />
            <div className="px-3">
                <div className="mt-3 flex items-center gap-5 mb-3">
                    <img className="w-[40px] border rounded-full absolute top-40" src={ownerImage} alt="" />
                    <p className="text-sm font-semibold text-[#333333] mt-5">Owner Name: {name}</p>
                </div>

                <div className="">
                    <h1 className="text-[18px] font-bold text-[#333333] mb-4">
                        {productName}
                    </h1>
                    <hr />
                    <div className="py-3 flex items-center justify-between">
                        <div className="bg-[#EFF3FF] rounded-full px-3 py-1">
                            <h1 className="text-[#6787FE] text-sm">
                                Price: <span className="font-bold">${price}</span>
                            </h1>
                        </div>
                        <Link to={`product-details/${product._id}`} onClick={() => detailsHandler(product)} className="bg-[#8364E2] text-[#fff] px-3 py-1 rounded text-sm">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCards;