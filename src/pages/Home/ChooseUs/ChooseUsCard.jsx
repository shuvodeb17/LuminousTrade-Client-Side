
const ChooseUsCard = ({ service }) => {
    return (
        <div className="border p-10 text-center rounded-lg mx-auto">
            <img className='mx-auto text-center mb-5' src={service.image} alt="" />
            <h1 className="text-[16px] text-[#292930] font-bold">{service.title}</h1>
        </div>
    );
};

export default ChooseUsCard;