import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import  axios  from 'axios';
import { baseUrl } from "../../URL/URL";


const RegisterForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signUp } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const phoneNumber = data.phoneNumber;
        const password = data.password;
        const signUpInfo = { name, email, phoneNumber, password }
        signUp(data.email, data.password)
            .then(newUser => {
                const user = newUser.user;
                console.log(user)
                axios.post(`${baseUrl}/sign-up`, signUpInfo, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className="flex items-center justify-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className='md:w-4/12 md:px-0 w-full px-5'>
                <h2 className="text-2xl font-semibold">Don't have an account ? Register now.</h2>
                <div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Name</p>
                        <input {...register("name", { required: true })} type="text" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Email</p>
                        <input {...register("email", { required: true })} type="email" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Phone Number</p>
                        <input {...register("phoneNumber", { required: true })} type="number" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5 mb-5 relative">
                        <p className='text-[#606060]'>Password</p>
                        <input {...register("password", { required: true })} type="password" className="border rounded w-full py-2 px-2 outline-none" />
                        <AiOutlineEye className='cursor-pointer absolute right-2 top-9' size={20} />
                    </div>

                    <div className="flex items-center justify-between mb-5">
                        <button className="bg-[#8364E2] text-[#fff] font-bold px-5 py-1 text-sm rounded">Register</button>
                        <p className='text-sm'>
                            Already have an account ?
                            <Link to='/login' className='text-[#8364E2]'> Login</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;