import { baseUrl } from "../../URL/URL";

const CartTable = ({ product }) => {
    // console.log(product)
    const { image, name, productName, price } = product;
    return (
        <tr class="text-gray-700">
            <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src={`${baseUrl}/images/${image}`} alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                        <p class="font-semibold text-black">{name}</p>
                        {/* <p class="text-xs text-gray-600">Developer</p> */}
                    </div>
                </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">{productName}</td>
            <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {price} </span>
            </td>
            <td class="px-4 py-3 text-sm border">Delete</td>
        </tr>
    );
};

export default CartTable;