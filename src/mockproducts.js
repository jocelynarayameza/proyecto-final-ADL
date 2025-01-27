const productos = [{
    id: '1',
    nombre: 'Polera FF VI',
    precio: '20000',
    foto: ' https://cdnx.jumpseller.com/disenos-de-la-rata-otaku/image/36562686/thumb/1438/1438?1698820206',
    categoria: "Ropa",
    descripcion: 'Polera negra de FFVI con personajes modo pixel',
    cantidad: '20'
},

{
    id: '2',
    nombre: 'Taza Tifa FFVII',
    precio: '40000',
    foto: 'https://http2.mlstatic.com/D_NQ_NP_2X_931230-MLC81449895006_122024-T.webp',
    categoria: "Vajilla",
    descripcion: 'Taza de 300mL con imagen impresa de Tifa modo chibi',
    cantidad: '15'
}];

export const obtenerProductos = async () => {
    return productos
}
