/*Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.*/
let inventarioBeta = [
    [ 'Lâmina Solar', 'Mercúrio', 6700 ],
[ 'Cometa Engarrafado', 'Netuno', 7600 ],
[ 'Relíquia de Zordon', 'Elysium', 25000 ],
[ 'Nevoeiro Encapsulado', 'Júpiter', 3800 ],
[ 'Chip de Matéria', 'Ceres', 4100 ],
[ 'Chave de Portais', 'Júpiter', 5900 ],
[ 'Globo de Plasma', 'Terra', 7200 ],
[ 'Mapa Estelar', 'Vênus', 2100 ],
[ 'Pedra Temporal', 'Lua', 7800 ],
[ 'Lanterna Estelar', 'Sol', 3200 ],
[ 'Fragmento de Eclipse', 'Eclipse E-9', 8300 ],
[ 'Ponte de Gelo', 'Hoth', 3900 ],
[ 'Fluido de Saturno', 'Saturno', 4400 ],
[ 'Fenda de Tempo', 'Marte', 8700 ],
[ 'Condutor Fotônico', 'Sol', 3600 ],
[ 'Memória Galáctica', 'Terra', 5500 ],
[ 'Livro de Nebulosa', 'Andrômeda', 9200 ],
[ 'Túnel Quântico', 'Netuno', 4100 ],
[ 'Canhão de Luz', 'Vênus', 6800 ],
[ 'Orbe Incandescente', 'Sol', 9300 ],
[ 'Matriz de Propulsão', 'Vênus', 4500 ],
[ 'Partícula Livre', 'Urano', 5400 ],
[ 'Capa de Invisibilidade', 'Terra', 3900 ],
[ 'Mapa neurotico', 'Kepler', 3600 ],
[ 'Glopo estelar', 'Kepler', 2000 ]
];
let inventarioBetaInspeçao =  inventarioBeta.slice(0,5).join(", ")
console.log("Nova lista para inspeção com os 5 primeiros itens do inventario:",inventarioBetaInspeçao);