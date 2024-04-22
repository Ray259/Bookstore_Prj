"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Books", [
            {
                isbn: "0900997125",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/contemporary-novelists-by-walter-allen-bookworm-hanoi.jpg?v=1704871297833",
                name: "Contemporary Novelists",
                author: "Walter Allen",
                publisher: "St James Press London",
                release: "1973",
                category: "Biographies",
                price: "580000",
                format: "Hardcover",
                condition: "Good",
                overview: "",
                createdAt: "2024-02-03 17:19:31",
                updatedAt: "2024-02-03 17:19:31",
                amounts: "1",
            },
            {
                isbn: "9780007270613",
                image: "https://bizweb.dktcdn.net/100/326/228/products/the-hobbit-by-j-r-r-tolkien-bookworm-hanoi-bada364b-9708-4ee4-86c7-c88de49e109d.jpg?v=1701420659800",
                name: "The Hobbit",
                author: "J.R.R. Tolkien",
                publisher: "Harper Collins",
                release: "2008",
                category: "Fiction General",
                price: "380000",
                format: "Paperback",
                condition: "New",
                overview:
                    "The great modern classic and prelude to The Lord of the Rings, illustrated by Alan Lee\n\nSmaug certainly looked fast asleep, when Bilbo peeped once more from the entrance. He was just about to step out on to the floor when he caught a sudden thin ray of red from under the drooping lid of Smaug's left eye. He was only pretending to be asleep! He was watching the tunnel entrance ...\n\nWhisked away from his comfortable, unambitious life in his hobbit-hole in Bag End by Gandalf the wizard and a company of dwarves, Bilbo Baggins finds himself caught up in a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon. Although quite reluctant to take part in this quest, Bilbo surprises even himself by his resourcefulness and his skill as a burglar!",
                createdAt: "2024-02-04 05:30:50",
                updatedAt: "2024-02-04 05:30:50",
                amounts: "1",
            },
            {
                isbn: "9780099286387",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/geisha-by-liza-dalby-bookworm-hanoi.jpg?v=1709613637650",
                name: "Geisha",
                author: "Liza Dalby",
                publisher: "Vintage",
                release: "2000",
                category: "Fiction General",
                price: "150000",
                format: "Paperback",
                condition: "Acceptable",
                overview:
                    "Published with a new preface, this bestseller offers an intimate glimpse into a unique female community. Liz Dalby, the only non-Japanese woman ever to have trained as a geisha, reveals the realities of geisha life.",
                createdAt: "2024-03-07 15:32:34",
                updatedAt: "2024-03-07 15:32:34",
                amounts: "1",
            },
            {
                isbn: "9780521466899",
                image: "https://bizweb.dktcdn.net/100/326/228/products/the-wife-of-bath-s-prologue-and-tale-by-geoffrey-chaucer-bookworm-hanoi.jpg?v=1709612464007",
                name: "The Wife Of Bath's Prologue And Tale",
                author: "Geoffrey Chaucer",
                publisher: "Cambridge",
                release: "1999",
                category: "Poetry",
                price: "90000",
                format: "Paperback",
                condition: "Good",
                overview:
                    "This well-established series is now being updated with new scholarly introductions and attractive new covers. Texts are in the original Middle English throughout, and each has an introduction, detailed notes and a glossary.",
                createdAt: "2024-03-07 15:27:59",
                updatedAt: "2024-03-07 15:27:59",
                amounts: "1",
            },
            {
                isbn: "9781398525030",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/heart-bones-by-colleen-hoover-bookworm-hanoi.jpg?v=1680410134283",
                name: "Heart Bones",
                author: "Colleen Hoover",
                publisher: "Simon Schuster UK",
                release: "2023",
                category: "Fiction General",
                price: "580000",
                format: "Hardcover",
                condition: "New",
                overview:
                    "Moving, passionate, and unforgettable, this novel from #1 New York Times bestselling author Colleen Hoover follows two young adults from completely different backgrounds embarking on a tentative romance, unaware of what the future holds.\n\nAfter a childhood",
                createdAt: "2024-02-04 05:33:42",
                updatedAt: "2024-02-04 05:33:42",
                amounts: "1",
            },
            {
                isbn: "9781451690316",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/fahrenheit451raybradbury.jpg?v=1546509914477",
                name: "Fahrenheit 451",
                author: "Ray Bradbury",
                publisher: "Simon Schuster Paperback",
                release: "2012",
                category: "Fiction General",
                price: "220000",
                format: "Mass Market Paperback\n",
                condition: "New",
                overview:
                    "Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 is a masterwork of twentieth-century literature set in a bleak, dystopian future.\n\nGuy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, ",
                createdAt: "2024-02-04 05:33:42",
                updatedAt: "2024-02-04 05:33:42",
                amounts: "1",
            },
            {
                isbn: "9781601631398",
                image: "https://bizweb.dktcdn.net/100/326/228/products/secrets-of-power-negotiating-by-roger-dawson-bookworm-hanoi.jpg?v=1704883723877",
                name: "Secrets Of Power Negotiating",
                author: "Roger Dawson",
                publisher: "Career",
                release: "2011",
                category: "Business & Economics",
                price: "280000",
                format: "Paperback",
                condition: "Very Good",
                overview:
                    "Roger Dawson's Secrets of Power Negotiating has changed the way American business thinks about negotiating. Thinking 'win-win'--looking for that magical third solution in which everyone wins but nobody loses--can be a naive and ultimately unsuccessful app",
                createdAt: "2024-02-03 17:21:43",
                updatedAt: "2024-02-03 17:21:43",
                amounts: "1",
            },
            {
                isbn: "9781728276229",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/if-only-i-had-told-her-by-laura-nowlin-bookworm-hanoi.jpg?v=1709349447177",
                name: "If Only I Had Told Her",
                author: "Laura Nowlin",
                publisher: "Source",
                release: "2024",
                category: "Fiction General",
                price: "350000",
                format: "Paperback",
                condition: "New",
                overview:
                    "Finn has always loved Autumn. She’s not just the girl next door or his mother’s best friend’s daughter, she is his everything. But she’s not his girlfriend. That’s Sylvie, and Finn would never hurt her, so there’s no way Autumn could know how he truly feels.\n\nJack, Finn’s best friend, isn’t so sure. He’s seen Finn and Autumn together. How could she not know? And how is he supposed to support and protect Finn when heartache seems inevitable?\n\nAutumn surrounds herself with books and wants to write her own destiny—but one doesn’t always get a new chapter and fate can be cruel to those in love.\n\nTold through three different perspectives, If Only I Had Told Her is a love story brimming with truth, tragedy, and unexpected bonds that heal us.",
                createdAt: "2024-03-07 15:32:34",
                updatedAt: "2024-03-07 15:32:34",
                amounts: "1",
            },
            {
                isbn: "9781783783861",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/cove-by-cynan-jones-bookworm-hanoi.jpg?v=1709284839027",
                name: "Cove",
                author: "Cynan Jones",
                publisher: "Granta",
                release: "2017",
                category: "Fiction General",
                price: "120000",
                format: "Paperback",
                condition: "Good",
                overview:
                    "Out at sea, in a sudden storm, a man is struck by lightning. When he wakes, injured and adrift on a kayak, his memory of who he is and how he came to be there is all but shattered. Now he must pit himself against the pain and rely on his instincts to get back to shore, and to the woman he dimly senses waiting for his return.",
                createdAt: "2024-03-07 15:44:06",
                updatedAt: "2024-03-07 15:44:06",
                amounts: "1",
            },
            {
                isbn: "9781840220759",
                image: "https://bizweb.dktcdn.net/thumb/grande/100/326/228/products/the-collected-novels-of-the-bronte-sisters-by-charlotte-bronte-bookworm-hanoi.jpg?v=1709614405310",
                name: "The Collected Novels Of The Bronte Sisters",
                author: "Charlotte Bronte",
                publisher: "wordsworth",
                release: "2008",
                category: "Fiction General",
                price: "380000",
                format: "Hardcover",
                condition: "Acceptable",
                overview:
                    "Jane Eyre ranks as one of the greatest and most popular works of English fiction. Although Charlotte Bronte's heroine is outwardly plain, she possesses an indomitable spirit, and great courage. Forced to battle against the exigencies of a cruel guardian, a harsh employer and a rigid social order which circumscribes her life when she becomes governess to the daughter of the mysterious, sardonic Mr Rochester.\n\nVillette is based on Charlotte Bronte's personal experience as a teacher in Brussels. It is a moving tale of repressed feelings and cruel circumstances borne with heroic fortitude. Rising above the confinement of a rigid social order, it is also a story of a woman's right to love and be loved.\n\nWuthering Heights is Emily Bronte's wild, passionate tale of the intense and almost demonic love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine's father. After Mr Earnshaw's death, Heathcliff is bullied and humiliated by Catherine's brother Hindley and, wrongly believing that his love for Catherine is not reciprocated, he leaves Wuthering heights. When he returns years later as a wealthy man, he proceeds to exact a terrible revenge for his former miseries.\n\nAgnes Grey, Ann Bronte's deeply personal novel, is a trenchant expose of the frequently isolated, intellectually stagnant and emotionally starved conditions under which many governesses worked in the mid-nineteenth century.\n\nThe Tenant of Wildfell Hall shows Ann Bronte's bold, naturalistic and passionate style. It is a powerful and sometimes violent novel of expectation, love, oppression, sin and betrayal. It portrays the disintegration of the marriage of Helen Huntingdon, the mysterious 'tenant' of the title, and her dissolute, alcoholic husband.\n\nAlso includes The Professor by Charlotte Brontë.",
                createdAt: "2024-03-07 15:44:06",
                updatedAt: "2024-03-07 15:44:06",
                amounts: "1",
            },
            {
                isbn: "9781847941831",
                image: "https://bizweb.dktcdn.net/100/326/228/products/atomic-habits-by-james-clear-bookworm-hanoi.jpg?v=1552461718830",
                name: "Atomic Habits",
                author: "James Clear",
                publisher: "Random House Business Book",
                release: "2018",
                category: "Self Help",
                price: "490000",
                format: "Paperback",
                condition: "New",
                overview:
                    "This year create habits that actually stick. Read Atomic Habits now.\n________________________________\n\n*The instant New York Times bestseller*\n*Financial Times Book of the Month*\n________________________________\n\nA revolutionary system to get 1 per cent better every day\n\nPeople think when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions - doing two push-ups a day, waking up five minutes early, or holding a single short phone call.\n\nHe calls them atomic habits.\n\nIn this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy. \n\nThese small changes will have a revolutionary effect on your career, your relationships, and your life.\n________________________________\n\n`A supremely practical and useful book.' Mark Manson, author of The Subtle Art of Not Giving A F*ck\n\n`James Clear has spent years honing the art and studying the science of habits. This engaging, hands-on book is the guide you need to break bad routines and make good ones.' Adam Grant, author of Originals\n\n`Atomic Habits is a step-by-step manual for changing routines.' Books of the Month, Financial Times\n\n`A special book that will change how you approach your day and live your life.' Ryan Holiday, author of The Obstacle is the Way",
                createdAt: "2024-02-03 16:19:00",
                updatedAt: "2024-02-03 16:19:00",
                amounts: "1",
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Books", null, {});
    },
};
