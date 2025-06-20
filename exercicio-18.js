/*Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.*/
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
   ]
    let inventarioAlpha = [
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
    ]

 let inventarioBetaVitrine =  inventarioBeta.slice(0,5);
 let inventarioAlphaVitrine =  inventarioAlpha.slice(0,5);
 let inventarioCombinado = inventarioBetaVitrine.concat(inventarioAlphaVitrine);
 console.table(inventarioCombinado)