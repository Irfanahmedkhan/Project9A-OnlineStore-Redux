// import { ProductItem } from "../global"

const INITIAL_STATE= [
    {
        id: 1,
        name: "Nike React Infinity Run",
        brand: "NIKE",
        gender: "MEN",
        category: "RUNNING",
        price: 160,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0bf33c0a-4551-4ea3-a2c7-dec261cbdf56/air-zoom-pegasus-37-running-shoe-qVSCSr.png",
        slug: "nike-react-infinity-run-flyknit",
        details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 2,
        name: "Nike React Miler",
        brand: "NIKE",
        gender: "MEN",
        category: "RUNNING",
        price: 130,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03119662-2585-4658-bed3-1fa9a19196c2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-react-miler", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 3,
        name: "Nike Air Zoom Pegasus 37",
        brand: "NIKE",
        gender: "WOMEN",
        category: "RUNNING",
        price: 120,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c7849e1-d4a3-488c-8479-39583a23a832/air-zoom-pegasus-37-running-shoe-qVSCSr.jpg",
        slug: "nike-air-zoom-pegasus-37", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 4,
        name: "Nike Joyride Run Flyknit",
        brand: "NIKE",
        gender: "WOMEN",
        category: "RUNNING",
        price: 180,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28e22d03-0e7a-40cc-b439-a6467bac74b9/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-joyride-run-flyknit", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 5,
        name: "Nike Mercurial Vapor 13",
        brand: "NIKE",
        gender: "WOMEN",
        category: "FOOTBALL",
        price: 250,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1577d86c-c11c-4c70-b7b0-3fd45c9b9f0c/air-zoom-pegasus-37-older-running-shoe-59Tv83.jpg",
        slug: "nike-mercurial-vapor-13-elite-fg", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 6,
        name: "Nike Phantom Vision Elite",
        brand: "NIKE",
        gender: "WOMEN",
        category: "FOOTBALL",
        price: 150,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7bf18c90-ea09-4963-9ae4-cb4ae8f6fc1f/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-phantom-vision-elite-dynamic-fit-fg", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 7,
        name: "Nike Phantom Venom Academy FG",
        brand: "NIKE",
        gender: "WOMEN",
        category: "FOOTBALL",
        price: 80,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fd778bd-dd85-4c68-be03-49e51c71badf/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-phantom-venom-academy-fg",

        details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 8,
        name: "Nike Mercurial Vapor 13",
        brand: "NIKE",
        gender: "MEN",
        category: "FOOTBALL",
        price: 145,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98403112-6391-4f29-80b8-0eb82264d98c/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-mercurial-vapor-13-elite-tech-craft-fg", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 9,
        name: "Nike Mercurial Superfly",
        brand: "NIKE",
        gender: "MEN",
        category: "FOOTBALL",
        price: 137,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7bf18c90-ea09-4963-9ae4-cb4ae8f6fc1f/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-mercurial-superfly-7-pro-mds-fg", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 10,
        name: "Nike Air Force 1",
        brand: "NIKE",
        gender: "KIDS",
        category: "CASUAL",
        price: 90,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98403112-6391-4f29-80b8-0eb82264d98c/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "nike-air-force-1", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 11,
        name: "Nike Air Max 90",
        brand: "NIKE",
        gender: "KIDS",
        category: "CASUAL",
        price: 100,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
        slug: "nike-air-max-90", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 12,
        name: "Nike Air Max 90 LTR",
        brand: "NIKE",
        gender: "KIDS",
        category: "CASUAL",
        price: 110,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
        slug: "nike-air-max-90-ltr", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 13,
        name: "Nike Joyride Dual Run",
        brand: "NIKE",
        gender: "KIDS",
        category: "RUNNING",
        price: 110,
        is_in_inventory: false,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
        slug: "nike-joyride-dual-run", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 14,
        name: "Nike Renew Run",
        brand: "NIKE",
        gender: "KIDS",
        category: "RUNNING",
        price: 80,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
        slug: "nike-renew-run", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 16,
        name: "Bridgport Advice",
        brand: "HUSHPUPPIES",
        gender: "MEN",
        category: "FORMAL",
        price: 30,
        is_in_inventory: true,
        items_left: 4,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/049ee600-6862-459b-ba89-883a5c59b0f2/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "bridgport-advice", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 15,
        name: "Beck",
        brand: "HUSHPUPPIES",
        gender: "MEN",
        category: "FORMAL",
        price: 80,
        is_in_inventory: true,
        items_left: 5,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e13dabf-e6c6-4430-aa51-1443d9eda9f9/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
        slug: "beck", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 17,
        name: "Fester",
        brand: "HUSHPUPPIES",
        gender: "MEN",
        category: "FORMAL",
        price: 70,
        is_in_inventory: true,
        items_left: 6,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/edb94cfd-9472-45de-a932-80a73613f847/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-C8Z2Hj.jpg",
        slug: "fester", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 18,
        name: "Pixel",
        brand: "HUSHPUPPIES",
        gender: "MEN",
        category: "FORMAL",
        price: 75,
        is_in_inventory: true,
        items_left: 7,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74623394-5112-44fa-91f2-bc5c8820a138/air-zoom-superrep-hiit-class-shoe-x6Kv5r.jpg",
        slug: "pixel", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 19,
        name: "Austin",
        brand: "HUSHPUPPIES",
        gender: "MEN",
        category: "FORMAL",
        price: 75,
        is_in_inventory: true,
        items_left: 2,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9550d971-9d16-4cb3-b593-4484a74dda11/air-max-verona-shoe-PHJTlW.jpg",
        slug: "austin", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 20,
        name: "SS-HL-0135",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "FORMAL",
        price: 30,
        is_in_inventory: true,
        items_left: 6,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f3bd0d2-1521-4862-84b0-85b60fac278d/air-max-90-shoe-pnWM65.jpg",
        slug: "ss-hl-0135", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 21,
        name: "SS-HL-0136",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "FORMAL",
        price: 50,
        is_in_inventory: true,
        items_left: 4,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3549281-ff91-4a59-89bb-fb1fa6ab3ff3/revolution-5-running-shoe-sPNBBL.jpg",
        slug: "ss-hl-0136", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 22,
        name: "SS-HL-0128",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "FORMAL",
        price: 35,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/339aed7c-91d2-4cf7-b5b7-bbffebcaac93/air-max-90-shoe-V6MxhW.jpg",
        slug: "ss-hl-0128", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 23,
        name: "SS-MS-0075",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "CASUAL",
        price: 25,
        is_in_inventory: true,
        items_left: 7,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f460208-a89e-41e8-a93b-dd253b675911/react-miler-running-shoe-Rl20rZ.jpg",
        slug: "ss-ms-0075", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 24,
        name: "SS-MS-0075",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "CASUAL",
        price: 35,
        is_in_inventory: true,
        items_left: 4,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d3546b-014b-4293-8b57-12ad08266bff/blazer-mid-77-shoe-R2mQ88.jpg",
        slug: "ss-ms-0075", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 25,
        name: "SS-PM-0093",
        brand: "HUSHPUPPIES",
        gender: "WOMEN",
        category: "CASUAL",
        price: 30,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef0fab4a-d317-4106-ad40-ba6981fe9cd6/kyrie-6-basketball-shoe-Knb8rc.jpg",
        slug: "ss-pm-0093", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 26,
        name: "Nizza X Disney",
        brand: "ADIDAS",
        gender: "KIDS",
        category: "CASUAL",
        price: 55,
        is_in_inventory: true,
        items_left: 6,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c358caa2-ac12-42bb-8641-302e63b704f9/daybreak-shoe-djt0cf.jpg",
        slug: "nizza-x-disney", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 27,
        name: "X_PLR",
        brand: "ADIDAS",
        gender: "KIDS",
        category: "CASUAL",
        price: 65,
        is_in_inventory: true,
        items_left: 5,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16b76980-0baa-4c41-bacc-32edcf0893ea/air-max-2090-shoe-wWRFx2.jpg",
        slug: "x_plr", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 28,
        name: "Stan Smith",
        brand: "ADIDAS",
        gender: "KIDS",
        category: "CASUAL",
        price: 55,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/109aa5ec-8d2f-464f-ab61-8ee1bf317a27/air-max-2x-shoe-3hqsQl.jpg",
        slug: "stan-smith", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 29,
        name: "NMD_R1",
        brand: "ADIDAS",
        gender: "KIDS",
        category: "RUNNING",
        price: 120,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/032acd6c-c120-44b5-8452-b58860bf13d7/air-zoom-infinity-tour-golf-shoe-4RtwvS.jpg",
        slug: "nmd_r1", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 30,
        name: "NMD_R1 Flash Red",
        brand: "ADIDAS",
        gender: "WOMEN",
        category: "CASUAL",
        price: 140,
        is_in_inventory: true,
        items_left: 5,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/15a06157-70dc-439c-84a1-d52ee9436521/air-vapormax-360-shoe-3Cr647.jpg",
        slug: "nmd_r1-flash-red", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 31,
        name: "Superstar",
        brand: "ADIDAS",
        gender: "WOMEN",
        category: "CASUAL",
        price: 90,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/72fafd7e-8c73-4d31-9f28-acfbb1a63abd/renew-run-running-shoe-8p40Rb.jpg",
        slug: "superstar", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 32,
        name: "Club C Revenge Mens",
        brand: "Reebok",
        gender: "MEN",
        category: "CASUAL",
        price: 70,
        is_in_inventory: true,
        items_left: 3,
        imageURL:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb115fcc-b2f5-4bb7-9723-5d1b8e93a475/blazer-mid-vintage-77-shoe-xr8s4P.jpg",
        slug: "club-c-revenge-mens", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 33,
        name: "SK80-Low",
        brand: "Vans",
        gender: "MEN",
        category: "CASUAL",
        price: 60,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/452ba8fd-6244-4d1e-b946-eb4da108c8bf/react-vision-shoe-lPbm3g.jpg",
        slug: "sk80-low", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
    {
        id: 34,
        name: "Michael Feburary SK8-Hi",
        brand: "Vans",
        gender: "MEN",
        category: "CASUAL",
        price: 72,
        is_in_inventory: true,
        items_left: 3,
        imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c530538-6cea-40d4-9e8c-b117776e68f2/nikecourt-air-zoom-vapor-hard-court-tennis-shoe-bkTvGWJw.jpg",
        slug: "michael-feburary-sk8-hi", details: 'The weather-proofed iconic 247 sneaker for men with Gore-Tex material on the upper so you can keep wintry elements at bay while you keep up with your demanding life on the move. The lightweight, flexible design features bootie construction that offers a sock-like fit. The final product is a rugged, clean go-to shoe for everything from busy workday commutes to laid-back weekends.',
    },
];


export { INITIAL_STATE }