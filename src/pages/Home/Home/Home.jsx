import './Home.css';
import product1 from '../../../assets/Home/product1.png'

const Home = () => {
    return (
        <div className='bg-[rgb(247,247,247)] h-screen'>
            <div className="container px-10 mx-auto">
                <div className="grid grid-cols-2 gap-5 items-center justify-center h-screen">
                    <div className="">
                        <h1 className="text-6xl leading-tight font-bold">Roco Wireless Headphone</h1>
                    </div>
                    <div className="">
                        <img className='w-[500px]' src={product1} alt="" />
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Home;