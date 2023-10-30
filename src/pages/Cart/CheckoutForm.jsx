import { CardElement, CartElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import baseUrl from '../../URL/URL';

const CheckoutForm = ({ price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    console.log(clientSecret)

    useEffect(() => {
        fetch(`http://localhost:3001/specific-user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data?.result[0]))
    }, [user?.email])

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`http://localhost:3001/create-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }


        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userInfo?.name,
                        email: user?.email,
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError)
        }

        console.log(paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-[#3577F0] text-[#fff] text-center w-6/12 py-2" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay {price}
                </button>
            </form>

            {
                cardError ? <p>{cardError}</p> : ''
            }
            {
                transactionId ? <p>transaction complete with transactionId: {transactionId}</p> : ''
            }
        </div>
    );
};

export default CheckoutForm;