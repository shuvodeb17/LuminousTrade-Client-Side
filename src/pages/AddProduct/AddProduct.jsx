import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";


const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [showMessage, setShowMessage] = useState("");



    useEffect(() => {
        fetch(`${baseUrl}/specific-user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data?.result[0]))
    }, [user?.email])

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("file", data.image[0]);
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("price", data.price);
        formData.append("title", data.title);
        formData.append("details", data.details);

        fetch(`${baseUrl}/upload`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setShowMessage(data?.newProduct._id);
                setIsLoading(true);
                toast.success('Product added successfully');
            })
            .catch((error) => console.error(error));
    };


    return (
        <div className="container mx-auto md:px-72">
            <form onSubmit={handleSubmit(onSubmit)}>

                <h2 className="text-2xl text-center font-bold mt-5">Add <span className="text-[#8364E2]">Product</span></h2>



                <p htmlFor="name" className="mt-5">Upload Image</p>
                <div className="flex items-center justify-center h-[200px] rounded-lg" style={{ border: '2px dashed #ddd' }}>
                    <input
                        {...register("image", { required: true })}
                        type="file"
                    />
                </div>

                {/*  */}
                <div className="flex items-center justify-center gap-5 w-full mt-5">
                    <div className="w-full">
                        <p htmlFor="name">Name:</p>
                        <input className="border outline-none px-2 py-2 rounded w-full" {...register("name", { required: true })} defaultValue={userInfo?.name} type="text" />
                    </div>
                    <div className="w-full">
                        <p htmlFor="name">Email:</p>
                        <input className="border outline-none px-2 py-2 rounded w-full" {...register("email", { required: true })} defaultValue={user?.email} type="text" />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5 w-full mt-5">
                    <div className="w-full">
                        <p htmlFor="name">Price:</p>
                        <input className="border outline-none px-2 py-2 rounded w-full" {...register("price", { required: true })} type="text" />
                    </div>
                    <div className="w-full">
                        <p htmlFor="name">Title:</p>
                        <input className="border outline-none px-2 py-2 rounded w-full" {...register("title", { required: true })} type="text" />
                    </div>
                </div>

                {/* details */}
                <p htmlFor="name" className="mt-5">Details:</p>
                <textarea className="border outline-none px-2 py-2 rounded w-full" {...register("details", { required: true })} id="" cols="30" rows="5"></textarea>

                {/* <button  value="Add Product" /> */}
                <button className="bg-[#8364E2] text-[#fff] px-5 py-1 rounded text-sm mt-5 cursor-pointer">Add Product</button>
                <Toaster />
            </form>

        </div>
    );
};

export default AddProduct;