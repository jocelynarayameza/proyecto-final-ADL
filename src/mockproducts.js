const products = [{
    id: 1,
    nombre: 'Polera FF VI',
    precio: '20000',
    foto: ' https://cdnx.jumpseller.com/disenos-de-la-rata-otaku/image/36562686/thumb/1438/1438?1698820206',
    categoria: "Ropa",
    descripcion: 'Polera negra de FFVI con personajes modo pixel',
    cantidad: '20',
    vendedor: 'FFVI fan-club'
},

{
    id: 2,
    nombre: 'Taza Tifa FFVII',
    precio: '40000',
    foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_931230-MLC81449895006_122024-T.webp',
    categoria: "Vajilla",
    descripcion: 'Taza de 300mL con imagen impresa de Tifa modo chibi',
    cantidad: '15',
    vendedor: 'Tifa lover'
},
{ id:3, 
    nombre: 'Juego Final Fantasy IX', 
    precio: '35000', 
    foto: 'https://upload.wikimedia.org/wikipedia/en/5/51/Ffixbox.jpg', 
    categoria: 'Juego fisico', 
    descripcion: 'Juego para Play Station 1, trae 4 discos. Idioma: Espanol', 
    cantidad: '3',
    vendedor: 'Retro gamer'},
    
    { id:4, 
    nombre: 'Pin Haurchefant', 
    precio: '14990', 
    foto: 'https://i.etsystatic.com/18833319/r/il/33060a/6237173934/il_794xN.6237173934_n489.jpg', 
    categoria: 'Accesorios', 
    descripcion: 'Pin de personaje de FFXIV Haurchefant.Origen: Indonesia ', 
    cantidad: '5',
    vendedor: 'LeorenArts'},
    
    { id: 5, 
    nombre: 'Vinilo de FFXIV HEAVENSWARD Vol.2', 
    precio: '30000', 
    foto: 'https://cdn11.bigcommerce.com/s-6rs11v9w2d/images/stencil/1280x1280/products/3128/16330/HEAVENSWARD_Vinyl_LP_Vol._2__72443.1698700221.jpg?c=1', 
    categoria: 'Musica', 
    descripcion: 'A tale of fates intertwined, dedicated to all Warriors of Light. Sound Director Masayoshi Soken carefully selected songs from the original soundtrack to be included in this collection. The vinyl cutting was done in Los Angeles by mastering virtuoso, Bernie Grundman! Bernie Grundman is an audio mastering engineer who started his career at Contemporary Records in 1966, then continued on to A&M Records as head of their mastering department in 1968, earning his reputation working on albums with artists including Carole King, Michael Jackson, Steely Dan, and more. He has also been nominated for various Grammy awards and has won many prestigious awards.Additionally, each LP jacket features a gorgeous illustration by Yoshioka. We hope you enjoy the music of FINAL FANTASY XIV being retold through a new perspective in the warm sounds of a vinyl record. Release Date: December 2023', 
    cantidad: '10',
    vendedor: 'SQUARE ENIX store'},
    
    { id:6, 
    nombre: 'Peluche de Moogle/Moguri', 
    precio: '12990', 
    foto: 'https://resize.cdn.otakumode.com/ex/1000.1000/u/ff3f251dcc66416fae21af4d3b30d6b1.jpg', 
    categoria: 'Peluche', 
    descripcion: 'Size: approx. W47-67 mm x D30-70 mm x H77-115 mm. Weight: approx. 18-24 g. Materials: polyester, cotton, polyamide, polyurethane, polystyrene. ', 
    cantidad: '6',
    vendedor: 'Tokyo Otaku Mode'},
    
    { id: 7, 
    nombre: 'Set pixel art FFIX vol.1', 
    precio: '40000', 
    foto: 'https://i.pinimg.com/736x/7d/68/5a/7d685a1a8a7cc35b45b386ad2239cbd8.jpg', 
    categoria: 'Pixel art', 
    descripcion: 'Set de 6 personajes de FFIX (Garnet, Steiner, Beatrix, Freija, Vivi, Kuja). Hechos con hama beads de 5mm', 
    cantidad: '2',
    vendedor: 'RoninsArt'}

];

export const getProducts = async () => {
    return products
}
