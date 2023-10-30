import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../URL/URL";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [paymentInfo, setPaymentInfo] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/specific-user-payment-info?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setPaymentInfo(result)
            })
    }, [])
    return (
        <div className="container mx-auto mx:px-10">
            <h1 className="text-3xl text-center font-bold mt-5">
                Payments <span className="text-[#9264E2]">History</span>
            </h1>


            <div class="w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">

                    <div class="block w-full overflow-x-auto">
                        {
                            paymentInfo?.length === 0 ?
                                <h2 className="text-2xl text-center font-bold mt-5">No Payments History</h2>
                                :
                                <table class="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Email
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Total USD
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Transaction ID
                                            </th>
                                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            paymentInfo?.map(info =>
                                                <PaymentHistoryTable
                                                    key={info._id}
                                                    info={info}
                                                />)
                                        }
                                    </tbody>

                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;