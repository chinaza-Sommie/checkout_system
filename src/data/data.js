export const itemsData = [
        { product: "A", name: "item A", price: 0.50, special:{quantity: 3, price: 1.30}},
        { product: "B", name: "item B", price: 0.30, special:{quantity: 2, price: 0.45}},
        { product: "C", name: "item C", price: 0.20},
        { product: "D", name: "item D", price: 0.15}
    ];


export const itemsDataSet = Object.fromEntries(itemsData.map((item) => [item.product, item]));