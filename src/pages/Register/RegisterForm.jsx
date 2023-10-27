import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';

const RegisterForm = () => {
    return (
        <div className="flex items-center justify-center mt-5">
            <form className='w-4/12'>
                <h2 className="text-2xl font-semibold">Don't have an account ? Register now.</h2>
                <div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Name</p>
                        <input type="text" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Email</p>
                        <input type="email" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5">
                        <p className='text-[#606060]'>Phone Number</p>
                        <input type="email" className="border rounded w-full py-2 px-2 outline-none" />
                    </div>
                    <div className="mt-5 mb-5 relative">
                        <p className='text-[#606060]'>Password</p>
                        <input type="password" className="border rounded w-full py-2 px-2 outline-none" />
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