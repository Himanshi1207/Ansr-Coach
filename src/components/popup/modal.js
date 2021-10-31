// import React from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './modal.css'
const Modal = () => {
    const [loading, setLoading] = useState(false);
    const [orderAmount, setOrderAmount] = useState(0);
    const [orders, setOrders] = useState([]);

    async function fetchOrders() {
        const { data } = await axios.get('/list-orders');
        setOrders(data);
    }

    useEffect(() => {
        fetchOrders();
    }, []);


    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
            try {
                setLoading(true);
                const result = await axios.post('/create-order', {
                    amount: orderAmount + '00',
                });
                const { amount, id: order_id, currency } = result.data;
                const {
                    data: { key: razorpayKey },
                } = await axios.get('/get-razorpay-key');

                const options = {
                    key: razorpayKey,
                    amount: amount.toString(),
                    currency: currency,
                    name: 'example name',
                    description: 'example transaction',
                    order_id: order_id,
                    handler: async function (response) {
                        const result = await axios.post('/pay-order', {
                            amount: amount,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpaySignature: response.razorpay_signature,
                        });
                        alert(result.data.msg);
                        fetchOrders();
                    },
                    prefill: {
                        name: 'example name',
                        email: 'email@example.com',
                        contact: '111111',
                    },
                    notes: {
                        address: 'example address',
                    },
                    theme: {
                        color: '#80c0f0',
                    },
                };

                setLoading(false);
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (err) {
                alert(err);
                setLoading(false);
            }
        };
        document.body.appendChild(script);
    }



    return (
        <div id='modal'>
            <div className="wrapper">
                <h2>Payment Form</h2>
                <form method="POST">
                    <h4>Account</h4>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="text" placeholder="firstname" required class="name"
                            ></input>
                            <i class="fa fa-user icon"></i>
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="lastname" required class="name"
                            ></input>
                            <i class="fa fa-user icon"></i>
                        </div>

                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <input type="email" placeholder="Email" required class="name"
                            ></input>
                            <i class="fa fa-envelope icon"></i>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            <h4>Date Of Birth</h4>
                            <input type="text" placeholder="DD" class="dob"
                            ></input>
                            <input type="text" placeholder="MM" class="dob"
                            ></input>
                            <input type="text" placeholder="YYYY" class="dob"
                            ></input>
                        </div>
                        <div class="input-box">
                            <h4>Gender</h4>
                            <input type="radio" id="b1" name="gender" checked class="radio"
                            ></input>
                            <label for="b1">Male</label>
                            <input type="radio" id="b2" name="gender" class="radio"
                            ></input>
                            <label for="b2">Female</label>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">
                            {/* <button type="submit">Paynow</button> */}
                            <button className="btn" disabled={loading} onClick={loadRazorpay}>
                                Razorpay
                            </button>
                            {loading && <div>Loading...</div>}
                        </div>
                    </div>
                    <label>
                        Amount:{' '}
                        <input
                            placeholder="INR"
                            type="number"
                            value={orderAmount}
                            onChange={(e) => setOrderAmount(e.target.value)}
                        ></input>
                    </label>

                </form>
            </div>
        </div>
    )
}

export default Modal;
