import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center mt-5">
            <form className='md:w-4/12 md:px-0 w-full px-5'>
                <h2 className="text-2xl font-semibold">Login to your account</h2>
                <div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Email</p>
                        <input type="email" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5 mb-5 relative">
                        <p className='text-[#606060]'>Password</p>
                        <input type="password" className="border rounded w-full py-2 px-2 outline-none" />
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