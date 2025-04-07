const fs = require('fs');
const path = require('path');
const { sequelize, Book } = require('../models');

function getTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}_${hour}${minute}`;
}

async function exportBooks() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to database!');

        const books = await Book.findAll({ raw: true });

        const timestamp = getTimestamp();
        const fileName = `books-${timestamp}.json`;
        const filePath = path.join(__dirname, fileName);

        fs.writeFileSync(filePath, JSON.stringify(books, null, 2), 'utf8');

        console.log(`✅ Exported ${books.length} books to ${fileName}`);
    } catch (error) {
        console.error('❌ Error exporting books:', error);
    } finally {
        await sequelize.close();
    }
}

exportBooks();
