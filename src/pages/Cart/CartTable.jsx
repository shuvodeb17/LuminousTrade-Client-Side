import { baseUrl } from "../../URL/URL";
import { AiTwotoneDelete } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useMutation, useQueryClient } from 'react-query';
import toast, { Toaster } from 'react-hot-toast';



const CartTable = ({ product }) => {
    // console.log(product)
    const { user } = useContext(AuthContext)
    const { _id, image, name, productName, price } = product;


    // delete cart data start here
    const queryClient = useQueryClient();
    const deleteProduct = async (id) => {
        const response = await fetch(`${baseUrl}/cart-delete-product/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete product');
        }

        return response.json();
    };

    const { isLoading, mutate, refetch } = useMutation(deleteProduct, {
        onSettled: () => {
            queryClient.invalidateQueries(['user', user?.email]);
        },
    });

    const deleteHandler = (id) => {
        mutate(id);
        refetch
        toast.success('Product Delete Successful')
    };
    // delete cart data end here




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
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> ${price} </span>
            </td>
            <td class="px-4 py-3 text-sm border">
                <button onClick={() => deleteHandler(_id)} className="cursor-pointer bg-red-400 text-[#2b2a2a] rounded-full p-1">
                    <AiTwotoneDelete size={24} />
                </button>
            </td>
            <Toaster />
        </tr>
    );
};

export default CartTable;