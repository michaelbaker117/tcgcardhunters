const express = require('express');
const router = express.Router();
const paypal = require('@paypal/checkout-server-sdk');

// PayPal API environment configuration
const environment = new paypal.core.SandboxEnvironment('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET'); // Replace with your Client ID and Secret
const client = new paypal.core.PayPalHttpClient(environment);

// Create order endpoint
router.post('/create-order', async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [
            {
                amount: {
                    currency_code: 'USD',
                    value: '100.00', // Adjust the amount as needed
                },
            },
        ],
    });

    try {
        const order = await client.execute(request);
        res.status(200).json(order.result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Capture order endpoint
router.post('/capture-order/:orderId', async (req, res) => {
    const request = new paypal.orders.OrdersCaptureRequest(req.params.orderId);
    request.requestBody({});

    try {
        const capture = await client.execute(request);
        res.status(200).json(capture.result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;