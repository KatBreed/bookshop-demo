const { sequelize, Book } = require('../models'); // Ensure you're importing the Book model

const booksData = [
    {
        name: "Sunrise on the Reaping",
        authors: ["Suzanne Collins"],
        description: "The eagerly awaited fifth Hunger Games book - and second prequel - places fan-favourite Haymitch Abernathy centre stage in an unputdownable tale of danger, action and intrigue set during the fiftieth deadly contest",
        price: 19.99,
        image: "sunrise-reaping.jpg",
        publisher: "Scholastic",
        publish_date: "2025-03-19",
        ISBN: "9781761641176",
        format: "Paperback",
        pages: 416,
        weight: "660g",
        dimensions: "240 x 160 x 37 mm",
        synopsis: "When you've been set up to lose everything you love, what is there left to fight for?..."
    },
    {
        name: "Nobody's Fool",
        authors: ["Harlan Coben"],
        description: "From the mega-selling author of Tell No One and Think Twice comes the electrifying sequel to Fool Me Once...",
        price: 29.99,
        image: "nobodys-fool.jpg",
        publisher: "Cornerstone",
        publish_date: "2025-03-25",
        ISBN: "9781529906134",
        format: "Paperback",
        pages: 352,
        weight: "750g",
        dimensions: "234 x 153 x 40 mm",
        synopsis: "A year after the devastating events that took place in Fool Me Once, a secret from former Detective Sami Kierce's college days comes back to haunt him..."
    },
    {
        name: "25 Alive",
        authors: ["James Patterson", "Maxine Paetro"],
        description: "The Women's Murder Club return in the 25th riveting instalment in Patterson's bestselling series...",
        price: 39.99,
        image: "25-alive.jpg",
        publisher: "Cornerstone",
        publish_date: "2025-02-25",
        ISBN: "9781529923001",
        format: "Trade Paperback",
        pages: 400,
        weight: "573g",
        dimensions: "234 x 153 x 40 mm",
        synopsis: "Sergeant Lindsay Boxer's friend and former partner is brutally murdered in San Francisco's Golden Gate Park..."
    },
    {
        name: "Madly, Deeply: The Alan Rickman Diaries",
        authors: ["Alan Rickman"],
        description: "The beloved and much-missed actor offers his legion of fans a window into Hollywood glamour...",
        price: 75.00,
        image: "alan-rickman-diaries.jpg",
        publisher: "Canongate Books",
        publish_date: "2022-11-17",
        ISBN: "9781838854799",
        format: "Hardback",
        pages: 496,
        weight: "758g",
        dimensions: "240 x 162 x 43 mm",
        synopsis: "Alan Rickman remains one of the most beloved actors of all time across almost every genre..."
    },
    {
        name: "In Too Deep: (Jack Reacher 29)",
        authors: ["Lee Child", "Andrew Child"],
        description: "Reacher finds himself the captive of a gang who have some very disturbing plans in this rollercoaster ride of a thriller...",
        price: 38.00,
        image: "in-too-deep.jpg",
        publisher: "Transworld Publishers Ltd",
        publish_date: "2024-10-22",
        ISBN: "9780857505606",
        format: "Trade Paperback",
        pages: 384,
        weight: "418g",
        dimensions: "234 x 153 x 40 mm",
        synopsis: "Reacher had no idea where he was. No idea how he had got there. But someone must have brought him..."
    },
    {
        name: "Here One Moment",
        authors: ["Liane Moriarty"],
        description: "From the author of bestselling phenomenon Big Little Lies comes a compelling novel of family and fate, as a mysterious old woman sows confusion and paranoia in the lives of a disparate group of individuals.",
        price: 37.99,
        image: "here-one-moment.jpg",
        publisher: "Pan Macmillan",
        publish_date: "2024-12-09",
        ISBN: "9781760785031",
        pages: 528,
        weight: "358g",
        dimensions: "233 x 154 x 40 mm",
        synopsis: "On a plane bound for Sydney the unassuming woman from seat 4D walks down the aisle making unsettling predictions about the passengers.<br>And six strangers find their lives unexpectedly crossing.<br>Each tries to put the experience behind them. But, just weeks later, they can't any longer.<br>Because not believing a prediction is easy, Until it comes true . . ."
    },
    {
        name: "38 Londres Street",
        authors: ["Philippe Sands"],
        description: "Through this captivating blend of memoir, travelogue, detective story, and courtroom drama, the award-winning author of East West Street and The Last Colony chronicles the entwining stories of Chilean dictator Augusto Pinochet and senior SS officer Walther Rauff in a powerful examination of historical atrocities and the search for justice.",
        price: "73.00",
        image: "londres.jpg",
        publisher: "Orion Publishing Co",
        publish_date: "2025-03-04",
        ISBN: "9781474620741",
        format: "Hardback",
        pages: 780,
        weight: "700g",
        dimensions: "242 x 162 x 40 mm",
        synopsis: "In the heart of Santiago, the infamous 38 Londres Street becomes the haunting backdrop for a riveting tale that intertwines the arrest of Augusto Pinochet in London, the post-war life of senior SS officer Walther Rauff in Chilean Patagonia and the sinister connections between the two men.\n\nRauff, responsible for the wartime horrors of mobile gas vans, flees justice after the war and finds an unlikely refuge in Chile. Settling in Punta Arenas, he manages a king crab cannery, seemingly far removed from his dark past. But as rumours swirl about Rauff's involvement with Pinochet's secret intelligence services and the disappearances that plagued Chile, a chilling narrative unfolds.\n\nIn 1998, as Pinochet faces arrest in London, Philippe Sands is approached to advise the dictator but instead chooses to act as a barrister for Human Rights Watch. This decision leads to an eight-year exploration into Rauff's second life, his ties to Pinochet and his role in the atrocities at the heart of the London proceedings. Through a unique blend of memoir, detective story, courtroom drama and travelogue, drawing on interviews with key players and extensive research in archives worldwide, Sands unveils a hidden double story of mass murder and a disturbing link between the atrocities of the 1940s and those of our own times.\n\nAs the narrative unfolds, we are transported into a world where the echoes of historical crimes reverberate through the corridors of power, exposing the chilling truth behind the lives of two men and their intertwined destinies on 38 Londres Street."
      }
];

async function insertBooks() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully!');

        // Insert each book data into the database
        for (const bookData of booksData) {
            await Book.create(bookData);
        }

        console.log('✅ Books inserted successfully!');
    } catch (error) {
        console.error('❌ Error inserting books:', error);
    } finally {
        await sequelize.close();
    }
}

insertBooks();
