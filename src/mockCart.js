const productos = [{
    id_product: 1,
    product_name: 'Polera FF VI',
    product_price: 20000,
    product_photo: ' https://cdnx.jumpseller.com/disenos-de-la-rata-otaku/image/36562686/thumb/1438/1438?1698820206',
    category: "Ropa",
    product_description: 'Polera negra de FFVI con personajes modo pixel',
    product_quantity: 20,
    id_seller: 'FFVI fan-club'
},

{
    id_product: 2,
    product_name: 'Taza Tifa FFVII',
    product_price: 40000,
    product_photo: 'https://http2.mlstatic.com/D_NQ_NP_2X_931230-MLC81449895006_122024-T.webp',
    category: "Vajilla",
    product_description: 'Taza de 300mL con imagen impresa de Tifa modo chibi',
    product_quantity: 15,
    id_seller: 'Tifa lover'
},{
    id_product: 3,
    product_name: 'Juego Final Fantasy IX',
    product_price: 35000,
    product_photo: 'https://upload.wikimedia.org/wikipedia/en/5/51/Ffixbox.jpg',
    category: 'Juego fisico',
    product_description: 'Juego para Play Station 1, trae 4 discos. Idioma: Espanol',
    product_quantity: 3,
    id_seller:'Retro gamer'
}];

export const ProductsCart = async () => {
    return productos
}
