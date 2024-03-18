<template>
    <Header></Header>
    <BreadCrumb :name="'BOOKWORM HANOI - The Best Little Book Café In Southeast Asia'" />
    <Container class="text-left">
        <template #left><Categories :eventCategories="true" /></template>
        <div class="font-bold text-lg text-black">
            BOOKWORM HANOI - THE BEST LITTLE BOOK CAFÉ IN SOUTHEAST ASIA
        </div>
        <img
            class="my-4 border-t py-5"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/326/228/files/bookworm-b224addc-25a7-47c1-806f-2e03fd8f8e4f.jpg?v=1539950122467"
        />
        <div class="text-sm font-light text-black">
            <p class="mb-6">
                <span class="font-bold">BOOKWORM SHOP</span> is a treasure chest of great
                reading for both online and actual book lovers. For the latter it is down a
                pleasant little lane at 44 Chau Long Street that leads into a shady courtyard
                where you can enjoy drinks, snacks and lunchtime meals. Then it's into the
                bookshop that has enticing reading spread over two colorful levels. Customers
                are encouraged to browse at leisure for as long as they wish.
            </p>
            <p class="mb-6">
                One of Bookworm's features is a room dedicated to Vietnamese literature and
                lifestyle, photo books, cook books and interesting artifacts.
            </p>
            <p class="mb-6">
                <span class="font-bold">BOOKWORM</span> was established in 2001 as Hanoi's
                exclusively English language bookshop and remains so today because we are
                Hanoi's only English bookshop with both a physical and an online presence. We
                have more than 20 000 English books representing almost all genres in both new
                and second hand editions.
            </p>
            <p class="mb-6">
                <span class="font-bold">BOOKWORM</span> is a Vietnamese owned and operated
                business that conducts customer service in a western type mode. Local staff are
                trained to assist customers in a casually friendly manner. All staff are paid
                considerably higher than comparable, local salary levels, and paid time and a
                half and double time rates for weekends, gazetted holidays and for overtime
                worked. Staff are awarded two weeks annual paid holidays plus an extra paid
                week during Tet. Sick leave is also awarded.
            </p>
            <p class="mb-6">
                Customers are encouraged to contact management staff, who has excellent English
                abilities, with any service complaints so that they can be resolved
                immediately.
            </p>
            <p>
                <span class="font-bold">BOOKWORM</span> strives to be an ethical company. We
                financially assist several Vietnamese charities and endeavor to offer
                employment to underprivileged university students.
            </p>

            <p class="mt-10 font-bold">BOOKWORM HANOI</p>
            <div class="font-extralight italic">
                <p>Old Address: 44 Châu Long, Ba Đình, Hà Nội</p>
                <p>New Address: 44 Phạm Hồng Thái, Ba Đình, Hà Nội</p>
                <p>Hotline: 098xxxxxxx</p>
                <p>Email: bookworm@gmail.com</p>
            </div>
        </div>
    </Container>
</template>
