import service1 from '../../../assets/WhyChooseUs/service10.png'
import service2 from '../../../assets/WhyChooseUs/service6.png'
import service3 from '../../../assets/WhyChooseUs/service7.png'
import service4 from '../../../assets/WhyChooseUs/service8.png'
import service5 from '../../../assets/WhyChooseUs/service9.png'
import ChooseUsCard from './ChooseUsCard';

const ChooseUs = () => {
    const services = [
        {
            title: "Next Level Pro Quality",
            image: service1
        },
        {
            title: "Money Back Guarantee",
            image: service2
        },
        {
            title: "Next Level Pro Quality",
            image: service3
        },
        {
            title: "24 Hour Return Policy",
            image: service4
        },
        {
            title: "Pro Quality Support",
            image: service5
        },
    ]

    return (
        <div className="py-20">
            <div className="container md:px-10 px-5 mx-auto">
                <h1 className="text-3xl font-bold text-center">Why People Choose Us</h1>

                <div className="grid md:grid-cols-5 grid-cols-2 gap-5 mt-10">
                    {
                        services.map(service => <ChooseUsCard
                            key={service.title}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;