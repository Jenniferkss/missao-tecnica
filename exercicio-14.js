/*Separe os 10 últimos itens do inventário Alpha para estudo temporal.*/
let inventarioAlpha =  [
[ 'Cristal Rubion', 'Plutão', 4500 ],
[ 'Cápsula de Éter', 'Júpiter', 7800 ],
[ 'Nanofibra Luminosa', 'Saturno', 12000 ],
[ 'Minério Dourado', 'Marte', 8500 ],
[ 'Flor de Andrômeda', 'Andrômeda', 13000 ],
[ 'Ampulheta Galáctica', 'Vênus', 2200 ],
[ 'Fóssil Estelar', 'Lua', 9000 ],
[ 'Orbe do Caos', 'Netuno', 9100 ],
[ 'Lente do Vazio', 'Buraco Negro X-1', 14300 ],
[ 'Chave de Fóton', 'Sol', 2300 ],
[ 'Esfera Sombria', 'Nêmesis', 13400 ],
[ 'Granada de Íons', 'Marte', 4100 ],
[ 'Engrenagem Sombria', 'Plutão', 6600 ],
[ 'Fragmento Prismático', 'Kepler-22b', 6400 ],
[ 'Núcleo de Plasma', 'Kepler-452b', 9100 ],
[ 'Anel de Chronos', 'Terra', 4900 ],
[ 'Bateria Quântica', 'Terra', 4000 ],
[ 'Areia do Tempo', 'Terra', 3100 ],
[ 'Escudo de Luz', 'Vênus', 4700 ],
[ 'Catalisador Estelar', 'Sirius', 12500 ],
[ 'Pó de Cometa', 'Netuno', 3000 ],
[ 'Relógio Quântico', 'Terra', 5000 ],
[ 'Vórtice Gravitacional', 'Saturno', 8800 ],
[ 'Cristal Ômega', 'Andrômeda', 13900 ],
[ 'Anel geleiro', 'Terra', 4600 ],
[ 'Cristal Plasma', 'Terra', 7800 ],
[ 'Pó Estrelar', 'Terra', 3500 ]
];
let inventarioAlphaEstudo =  inventarioAlpha.slice(17,27).join(", ")
console.log("Nova lista para estudo com os 10 ultimos itens do inventario:",inventarioAlphaEstudo);