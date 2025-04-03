const { Book } = require('./models');

async function testBooksQuery() {
    try {
        const books = await Book.findAll();
        console.log("✅ Books in database:", books);
    } catch (error) {
        console.error("❌ Database query failed:", error);
    }
}

testBooksQuery();
