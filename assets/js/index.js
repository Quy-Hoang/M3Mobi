const $ = document.querySelector.bind(document);
const listShop = [
    [   
        key = 1,
        nameShop =  'Cellphones',
        {
            nameSP: 'iPhone 12 Pro Max 256GB',
            coins: 35190000,
            status: 'còn hàng'
        }
    ],
    [   
        key = 2,
        nameShop =  'Thế Giới di động',
        {
            nameSP: 'iPhone 12 Pro Max 256GB',
            coins: 35190000,
            status: 'còn hàng'
        }
    ],
];

const listShopHN = $('.container')

const htmlcontents = listShop.map(function (listShop, key) {
    return `
        <h1>${listShop.nameShop}</h1>
        <div>
            <p>${listShop.nameSP}</p>
            <p>${listShop.coins}</p>
        </div>
    `
})

console.log(htmlcontents)
console.log(listShopHN)
console.log(listShop)

listShopHN.innerHTML = htmlcontents.join('')