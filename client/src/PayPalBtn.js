import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalBtn = () => {
    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '0.01', // Set your amount here
                        },
                    }],
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log('Order', order);
                // Further actions after approval, e.g., redirect or display success message
            }}
            onError={(err) => {
                console.error('PayPal Checkout onError', err);
                // Handle error here
            }}
        />
    );
};

export default PayPalBtn;
