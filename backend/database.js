const fs = require('fs/promises');
const DATABASE_FILE = './userDatabase.json';

async function saveUserInfo(address, userInfo) {
    try {
        const database = await loadDatabase();
        database[address] = userInfo;
        await fs.writeFile(DATABASE_FILE, JSON.stringify(database, null, 2));
    } catch (error) {
        console.error('Error saving user information:', error);
        throw new Error('Internal Server Error. Please try again later.');
    }
}

async function getUserInfo(address) {
    try {
        const database = await loadDatabase();
        return database[address] || {};
    } catch (error) {
        console.error('Error getting user information:', error);
        throw new Error('Internal Server Error. Please try again later.');
    }
}

async function loadDatabase() {
    try {
        const data = await fs.readFile(DATABASE_FILE, 'utf8');
        return JSON.parse(data) || {};
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {};
        }
        console.error('Error loading database:', error);
        throw new Error('Internal Server Error. Please try again later.');
    }
}

module.exports = {
    saveUserInfo,
    getUserInfo,
};