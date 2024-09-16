const express = require('express');
const router = express.Router();

// Example FAQ data - you should replace this with your database logic
const faqs = [
    { id: 1, question: 'How do I pay my dining bill using Zomato?', answer: 'You can pay using available payment options on the app.' },
    { id: 2, question: 'Do I need to purchase any membership to pay?', answer: 'No, you don’t need any membership to pay.' },
    { id: 3, question: 'Which modes of payment are available on Zomato?', answer: 'You can use cards, UPI, net banking, etc.' },
    { id: 4, question: 'Can I use Zomato Credits for payments?', answer: 'Yes, you can use your Zomato Credits for payments.' }
];

// GET /api/faqs
router.get('/faqs', (req, res) => {
    res.json({ success: true, data: faqs });
});

module.exports = router;
