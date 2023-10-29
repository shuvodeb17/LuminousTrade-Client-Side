import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";

const LoginForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(loggedUser => {
                const result = loggedUser.user
                const currentUser = {
                    email: result?.email
                }
                console.log(currentUser)

                fetch(`${baseUrl}/jwt-check`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log('jwt check', result)
                        localStorage.setItem('access-token', result.token);
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
                <h2 className="text-2xl font-semibold">Login to your account</h2>
                <div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Email</p>
                        <input {...register("email", { required: true })} type="email" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5 mb-5 relative">
                        <p className='text-[#606060]'>Password</p>
                        <input {...register("password", { required: true })} type="password" className="border rounded w-full py-2 px-2 outline-none" />
                        <AiOutlineEye className='cursor-pointer absolute right-2 top-9' size={20} />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-[#8364E2] text-[#fff] font-bold px-5 py-1 text-sm rounded">Login</button>
                        <p className='text-sm'>
                            Don't have an account ?
                            <Link to='/register' className='text-[#8364E2]'> Register</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;