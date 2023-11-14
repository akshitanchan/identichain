const express = require('express');
const router = express.Router();
const blockchainService = require('./blockchainService');

router.post('/register', async (req, res) => {
    try {
        const { name, email } = req.body;
        await blockchainService.registerUser(name, email);
        return res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/user', async (req, res) => {
    try {
        const userInfo = await blockchainService.getUserInfo();
        return res.status(200).json(userInfo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;