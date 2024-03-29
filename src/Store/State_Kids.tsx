
// import { ProductItem } from "../global"

const INITIAL_STATE = [{
    "id": "c899e3d3-4e8f-4636-a247-966a1e6abcbf",
    "name": "Nike Sportswear Windrunner",
    "price": "$65",
    "category": "Big Kids' (Boys') Jacket",
    "description": "<p>The&nbsp;Nike Sportswear&nbsp;Windrunner&nbsp;Big Kids' (Boys') Jacket&nbsp;is made with lightweight ripstop fabric and a multi-panel hood for comfortable coverage that helps keep the elements at bay.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: White/University Red/Game Royal/White</li><li class=\"description-preview__style-color ncss-li\">Style: 850443-107</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/05e93ac4-649b-4738-8688-fd6bdce5d59c/sportswear-windrunner-big-kids-boys-jacket-4VTnX79v.jpg"]
}, {
    "id": "e5dc353b-c9da-40df-b672-9a210bb937d5",
    "name": "Nike Sportswear Tech Pack",
    "price": "$85",
    "category": "Big Kids' (Boys') Packable Jacket",
    "description": "<p>Keep covered—rain or shine—without the bulk in the Nike Sportswear Tech Pack Jacket. The lightweight design is also water-repellent. Plus, pack the jacket into the right pocket for easy carrying on the go.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: CK1335-010</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fdc731b5-27bf-4119-b211-292e8ac5ff0a/sportswear-tech-pack-big-kids-boys-packable-jacket-dZbQjt.jpg"]
}, {
    "id": "bc397dfd-c8b6-4581-ba0f-f1e30208a9f6",
    "name": "Nike Sportswear",
    "price": "$60",
    "category": "Toddler Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Jacket is made of lightweight windbreaker material with a breathable mesh on the sleeves to help keep little ones covered and dry while they play.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: White</li><li class=\"description-preview__style-color ncss-li\">Style: 76G398-001</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6b0cb0af-3ed1-4952-8aa8-74a4faff5982/sportswear-toddler-full-zip-jacket-lFkG7H.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-567c46d3-983f-4458-838d-d419361fa5b3/sportswear-toddler-full-zip-jacket-lFkG7H.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-9d6fec4c-7571-43d8-87e7-f0d88d16bfc0/sportswear-toddler-full-zip-jacket-lFkG7H.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-bc324293-aa01-4b9e-a86a-e1d29300ff32/sportswear-toddler-full-zip-jacket-lFkG7H.jpg"]
}, {
    "id": "4cc8f089-eece-4a68-8a8e-8659f7236221",
    "name": "Nike Sportswear",
    "price": "$60",
    "category": "Toddler Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Jacket is made of lightweight windbreaker material with a breathable mesh lining that helps keep little ones covered and dry while they play.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Pacific Blue</li><li class=\"description-preview__style-color ncss-li\">Style: 76G476-C3R</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-a8d97bf6-41c4-431c-b54a-235b9a591400/sportswear-toddler-full-zip-jacket-6rNrr9.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6adf0997-c99a-478b-88b3-aaa321674f55/sportswear-toddler-full-zip-jacket-6rNrr9.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-20324efa-c81f-4d7e-b7bf-cd169b21bd65/sportswear-toddler-full-zip-jacket-6rNrr9.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-319277e5-3551-4bb0-8bb8-7a0d4121e330/sportswear-toddler-full-zip-jacket-6rNrr9.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fd83b1fd-c236-468c-8712-e6f70b1d624a/sportswear-toddler-full-zip-jacket-6rNrr9.jpg"]
}, {
    "id": "b64a0ef8-2cc9-4025-a900-5b58fab034f2",
    "name": "Nike Sportswear Tech Fleece",
    "price": "$80",
    "category": "Big Kids' Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Tech Fleece Jacket updates a closet staple with the lightweight warmth of Nike Tech Fleece fabric. Designed for all-day warmth, it's a modern take on the classic hoodie.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Pacific Blue/Game Royal/Black</li><li class=\"description-preview__style-color ncss-li\">Style: AR4020-402</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1e5353ee-79e2-42e6-bc7b-d0aea26af5b5/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_2.14/fxrjv5g5ybswcoznlyys/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/44bde35e-a0d8-4f82-9593-e09aeaf95ad7/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1d34663b-f52d-4c1c-8646-9ed4ec6b33de/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/1a2c0c8b-9216-4c97-96c1-bb85b1dd80b3/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/77d19a3e-f81f-44e0-95ff-7bcd7bd79ebe/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/a83bd708-ae8f-49e8-bad2-690f4ff6086f/sportswear-tech-fleece-big-kids-full-zip-jacket-ngFsfL.jpg"]
}, {
    "id": "8c226372-41d9-49ac-a88e-5dcb1372f385",
    "name": "Nike",
    "price": "$48",
    "category": "Toddler Jacket and Pants Set",
    "description": "<p>The Nike Set includes a jacket and pants accented with bold panels for a coordinated look. The chevron on the chest draws inspiration from the classic Windrunner Jacket.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 76G796-023</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/04cf3ad8-76a8-4e4c-9721-6aeb60834a3f/toddler-jacket-and-pants-set-HmKPPR.jpg"]
}, {
    "id": "6adab44d-aef4-4c11-ad28-d8e1038f3c62",
    "name": "Nike Sportswear Windrunner",
    "price": "$65",
    "category": "Big Kids' (Boys') Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket throws it back with the same design lines of the iconic '78 track jacket. This full-zip is durable and an ideal layer for any action-packed day. Hot tip: It also packs into its own pocket to easily take with you.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Smoke Grey/Black/White/White</li><li class=\"description-preview__style-color ncss-li\">Style: CU9301-084</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-43b40f15-060b-454b-9f87-9897179640b2/sportswear-windrunner-big-kids-boys-jacket-Kkh4h8.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-0e573088-17f6-49d2-9c5a-64977b4fc2e7/sportswear-windrunner-big-kids-boys-jacket-Kkh4h8.jpg"]
}, {
    "id": "bb9083a2-9215-4f80-b03a-4aad247cafb1",
    "name": "Nike",
    "price": "$44",
    "category": "Baby (12-24M) Jacket and Pants Set",
    "description": "<p>The Nike Set includes a jacket and pants accented with color-blocked panels for a coordinated look. Chevron paneling at front draws inspiration from the iconic Nike Windrunner Jacket.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 66G796-023</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ab830d77-cc0f-44fa-a241-758c2e5c3b1f/baby-12-24m-jacket-and-pants-set-lf9vkb.jpg"]
}, {
    "id": "851c6cd0-2366-44ae-a874-a7fabb17c415",
    "name": "Nike Sportswear Windrunner",
    "price": "$50",
    "category": "Little Kids' Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket is made with ripstop fabric and has the classic 26° chevron design. Zippered side pockets let little ones keep their hands covered.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 86C663-023</li></ul>",
    "images": ["https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gqzlb2q1ubdf4vhdj6px/sportswear-windrunner-little-kids-full-zip-jacket-KVVBrX.jpg", "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/kfrqtiwjtv4cy7ozqimy/sportswear-windrunner-little-kids-full-zip-jacket-KVVBrX.jpg"]
}, {
    "id": "206242b0-8200-40ad-817f-14eea8b09e6c",
    "name": "Nike Sportswear",
    "price": "$50",
    "category": "Big Kids' (Boys') Woven Jacket",
    "description": "<p>Even the most active kids need a layer on chilly days, and the Nike Sportswear Jacket has you covered. This full-zip has a hood and front pockets—everything you need to play and roam outside.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: University Red/Black/Smoke Grey/White</li><li class=\"description-preview__style-color ncss-li\">Style: CU9207-657</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/11a8891d-a914-4379-beb0-8946c5664d23/sportswear-big-kids-boys-woven-jacket-rqZcmN.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/19e4cb4c-2ee4-45a4-9091-46cd25012841/sportswear-big-kids-boys-woven-jacket-rqZcmN.jpg"]
}, {
    "id": "bb9fa647-2909-467e-9f8d-d0e71f62e3ce",
    "name": "Nike",
    "price": "$48",
    "category": "Toddler Jacket and Pants Set",
    "description": "<p>The Nike Set includes a jacket and pants made with a classic tracksuit design. The chevron chest panel draws inspiration from the classic Windrunner Jacket.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Iron Grey</li><li class=\"description-preview__style-color ncss-li\">Style: 76G794-GAE</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b96fd13d-36cb-404b-b8b8-de2a8214a901/toddler-jacket-and-pants-set-N7dW2R.jpg"]
}, {
    "id": "db5b93fc-b3d6-4b85-bb8e-7b3a2470e26a",
    "name": "Nike Sportswear Windrunner",
    "price": "$50",
    "category": "Toddler Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket is made with smooth, durable fabric that has the classic 26° chevron design. Zippered side pockets give little ones a place to put their hands.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Gunsmoke</li><li class=\"description-preview__style-color ncss-li\">Style: 76C663-G4T</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/25ae5d32-e473-4ada-bc84-04e43be84518/sportswear-windrunner-toddler-full-zip-jacket-zDRZkV.jpg"]
}, {
    "id": "ee85f981-0233-4e9e-a451-615e62e299dd",
    "name": "Nike",
    "price": "$44",
    "category": "Baby (12-24M) Tracksuit",
    "description": "<p>The Nike Tracksuit includes a jacket and joggers that are made with soft, lightweight fabric to keep little ones warm and comfortable.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Medium Olive</li><li class=\"description-preview__style-color ncss-li\">Style: 66F279-E6F</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/j8w345yvuycquymxlskr/baby-12-24m-tracksuit-BQVfHl.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zfuta1zh2ozzsjaux73c/baby-12-24m-tracksuit-BQVfHl.jpg"]
}, {
    "id": "82b17c57-e06d-4a24-82eb-0730f536e760",
    "name": "Nike Sportswear",
    "price": "$60",
    "category": "Little Kids' Full-Zip Jacket",
    "description": "<p>The Nike Sportswear helps keep little ones covered and dry while they play. Breathable mesh allows for ventilation.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: White</li><li class=\"description-preview__style-color ncss-li\">Style: 86G398-001</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-124ba730-d9c9-4675-9cf7-cb1c329fad44/sportswear-little-kids-full-zip-jacket-MM1FNP.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6a6d4a94-2d1c-4605-9944-12862cf1befc/sportswear-little-kids-full-zip-jacket-MM1FNP.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-5a8564e6-e57f-4bf0-92d5-8bcdf9f06660/sportswear-little-kids-full-zip-jacket-MM1FNP.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-5fb7ae25-a0b9-41af-973a-ce973b1ef52d/sportswear-little-kids-full-zip-jacket-MM1FNP.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-4a6d3816-436e-44bf-98aa-375cf40863c2/sportswear-little-kids-full-zip-jacket-MM1FNP.jpg"]
}, {
    "id": "3c710172-a75c-4502-b363-ec20970fdc96",
    "name": "Nike Sportswear",
    "price": "$60",
    "category": "Little Kids' Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Jacket is made of smooth, lightweight fabric that repels water to keep little kids dry in light rain. A breathable mesh lining helps keep little ones comfortable while they play.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Pacific Blue</li><li class=\"description-preview__style-color ncss-li\">Style: 86G476-C3R</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/3a49f4e8-4b9f-489f-825e-2cfa293f3443/sportswear-little-kids-full-zip-jacket-vDfXQx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/16e07baf-8c59-4585-8bfa-07ba4098bc40/sportswear-little-kids-full-zip-jacket-vDfXQx.jpg"]
}, {
    "id": "26176dc7-7e58-42f0-917c-4134d88fa469",
    "name": "Nike Sportswear",
    "price": "$120",
    "category": "Big Kids' Synthetic Fill Jacket",
    "description": "<p>The Nike Sportswear Synthetic Fill Jacket provides an outer layer of lightweight insulation to help you stay warm when the temperature drops. Snap-front pockets and a hood give you extra coverage.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black/Black/Black/White</li><li class=\"description-preview__style-color ncss-li\">Style: 939554-013</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/kuqxvpfhgs5bzmmzvnjf/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0.75/t5uflkngkaulzpzwpfsb/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/xszr3gelxsckomptjd06/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fkzqjv5dp2wdpkuvaha4/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uqggyk9z1dxtutt7lxc1/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/o3e05idjqcrw1potdikp/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ozlr3bjj3a4imxq7yhnv/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e1r1nmfhhzyhv63f29yu/sportswear-big-kids-synthetic-fill-jacket-872Hwx.jpg"]
}, {
    "id": "798cde66-b6d0-4e0f-a551-250789332a43",
    "name": "Nike Sportswear Windrunner",
    "price": "$75",
    "category": "Big Kids' (Boys') Sherpa Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket helps keep the chill out with soft, fuzzy fabric on the inside for extra warmth. Zip it up and pull on the hood to keep cozy in the legendary 26-degree chevron design that's defined Windrunner style for decades.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black/White</li><li class=\"description-preview__style-color ncss-li\">Style: CQ4292-010</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/znkphzxfwiyyobtoame5/sportswear-windrunner-big-kids-boys-sherpa-jacket-zGSlrB.jpg"]
}, {
    "id": "015a3738-2cd7-47ba-9d45-dddfbccb3548",
    "name": "Nike Therma",
    "price": "$70",
    "category": "Little Kids' Full-Zip Puffer Hoodie",
    "description": "<p>Get the layered look without the bulk. The Nike Therma Hoodie has a lightweight, water-resistant shell packed with cozy, warm synthetic insulation at the body and hood to help keep little ones warm without slowing them down.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 86F300-023</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fbatadssespwaiklzkq3/therma-little-kids-full-zip-puffer-hoodie-CQ1Jnk.jpg"]
}, {
    "id": "262384f6-89b2-426b-a6d2-9c293c941599",
    "name": "Nike Sportswear Windrunner",
    "price": "$65",
    "category": "Big Kids' Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket is made with lightweight nylon fabric and has the classic 26° chevron design. Zippered side pockets store your essentials.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Gunsmoke/Summit White/Black/Summit White</li><li class=\"description-preview__style-color ncss-li\">Style: CJ6722-056</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/g1gdtocqk8kccecxofqi/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ebcdj2huptpdwwzyfwi6/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/m193jj9xyht54fplgawq/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/z7jfdakktwgbm8n27hze/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/qwrfavlo7fjz5ztertyy/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/o4mxthlh3inyrwts5lvh/sportswear-windrunner-big-kids-jacket-WxDt3Q.jpg"]
}, {
    "id": "bb94657f-c05f-45b8-b105-2a8fadc5359f",
    "name": "Nike",
    "price": "$85",
    "category": "Little Kids' Bomber Jacket",
    "description": "<p>The Nike Bomber Jacket has a durable outer shell with a water-resistant coating and lightweight, insulated padding for a cozy, warm layer in cold weather.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 86F253-K25</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ydxyijnbr2kxnftzpl4m/little-kids-bomber-jacket-0DBD2l.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/lxxyjgtxovfvd9kkkiys/little-kids-bomber-jacket-0DBD2l.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/drkfsct8x0ncnpr4p5vw/little-kids-bomber-jacket-0DBD2l.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dfkfyvrxdw0uxzrlubcv/little-kids-bomber-jacket-0DBD2l.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ds7goapf5bauaoixaeo1/little-kids-bomber-jacket-0DBD2l.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/nvuof8efnjstlhgmscob/little-kids-bomber-jacket-0DBD2l.jpg"]
}, {
    "id": "020ae91d-6769-4109-832e-f416d957ab90",
    "name": "Nike Sportswear Windrunner",
    "price": "$60",
    "category": "Little Kids' Full-Zip Jacket",
    "description": "<p>The Nike Sportswear Windrunner Jacket is made of durable ripstop fabric with breathable mesh lining to help littles stay cool while they play. The classic 26° chevron on the chest brings back retro vibes from the original 1978 design.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Mountain Blue</li><li class=\"description-preview__style-color ncss-li\">Style: 86E884-C53</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/gx5pwayhgttnb9upt5w8/sportswear-windrunner-little-kids-full-zip-jacket-23n9xj.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/burkkcwnm68ofdpnmy33/sportswear-windrunner-little-kids-full-zip-jacket-23n9xj.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/tmx9r9x0hepb7lw8fcod/sportswear-windrunner-little-kids-full-zip-jacket-23n9xj.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/k4jxz7xm4xnf1t1sxesc/sportswear-windrunner-little-kids-full-zip-jacket-23n9xj.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/niepssaxuiiut4afdfqu/sportswear-windrunner-little-kids-full-zip-jacket-23n9xj.jpg"]
}, {
    "id": "08e49613-0f37-4a70-b38a-e2dfe92d57fc",
    "name": "Nike Elite",
    "price": "$75",
    "category": "Big Kids (Boys') Full-Zip Basketball Jacket",
    "description": "<p>Hoops style meets cozy warmth in the Nike Elite Jacket. Varsity-inspired stripes and color-blocking give this jacket a timeless look.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black/Thunder Grey/White/White</li><li class=\"description-preview__style-color ncss-li\">Style: BV3419-010</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zrbahhq0kz2ey0apjyhy/elite-big-kids-boys-full-zip-basketball-jacket-Sv3Zl2.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/nwpailishrslqpnsuy8k/elite-big-kids-boys-full-zip-basketball-jacket-Sv3Zl2.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/icacpfefnvtmsczabk6h/elite-big-kids-boys-full-zip-basketball-jacket-Sv3Zl2.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/wgn2iyjfiihlsxjghdb7/elite-big-kids-boys-full-zip-basketball-jacket-Sv3Zl2.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/hfxuuzncy7sndrje01zu/elite-big-kids-boys-full-zip-basketball-jacket-Sv3Zl2.jpg"]
}, {
    "id": "cafacf53-bef6-4796-951f-669b420fda4f",
    "name": "Jordan",
    "price": "$60",
    "category": "Big Kids' (Boys') Full-Zip Jacket",
    "description": "<p>The Jordan Full-Zip Jacket is made with smooth and breathable fabric with a track-inspired look that's finished with a hint of shine.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 95A104-023</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/66794be1-9834-41df-ad59-b267776e7d33/jordan-big-kids-boys-full-zip-jacket-mf6SGV.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/0590eb3a-2fc3-4587-9f6d-4fbe9c1c2095/jordan-big-kids-boys-full-zip-jacket-mf6SGV.jpg"]
}, {
    "id": "90662a3e-6922-4184-8bcc-6810e6fad35f",
    "name": "Jordan",
    "price": "$44",
    "category": "Baby (12-24M) Tracksuit",
    "description": "<p>Rep everything Air in the Jordan Tracksuit. This classic combo features a full-zip jacket with pants that you can mix or match.</p><ul class=\"description-preview__features pt8-sm pb6-sm ncss-list-ul\"><li class=\"description-preview__color-description ncss-li\">Shown: Black</li><li class=\"description-preview__style-color ncss-li\">Style: 658509-023</li></ul>",
    "images": ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/89120e29-b6a9-43e4-bce2-1144a65d0694/jordan-baby-12-24m-tracksuit-x81tdr.jpg"]
}]

export { INITIAL_STATE }