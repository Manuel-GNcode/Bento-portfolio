const proDescriptions = {
    cBalEn: 'Ensure your color combinations are accessible and easy to read. My tool evaluates the contrast between two colors and indicates whether they meet accessibility standards. Ideal for designers and web developers looking to improve readability and user experience.',
    cBalEs: 'Asegúrate de que tus combinaciones de colores sean accesibles y fáciles de leer. Mi herramienta evalúa el contraste entre dos colores e indica si cumplen con los estándares de accesibilidad. Ideal para diseñadores y desarrolladores web que buscan mejorar la legibilidad y la experiencia del usuario.',
    cuteEn: 'I am collaborating with graphic designer Sirius Chan on a custom illustration gallery project. In this project, I have developed various features including an infinite slider, zoom functionality within images, and a claw machine game. Additionally, I have implemented several animations that enhance the experience. I invite you to explore the gallery and see what it has to offer.',
    cuteEs: 'Trabajo en colaboración con la diseñadora gráfica Sirius Chan en un proyecto de una galería de ilustraciones personalizadas. En este proyecto, he desarrollado diversas funcionalidades como un slider infinito, la capacidad de hacer zoom en las imágenes, y un juego de garra mecánica. Además, he implementado varias animaciones que enriquecen la experiencia. Te invito a explorar la galería y descubrir todo lo que ofrece.',
    '2DEn': 'A JavaScript project where I worked with the Kaboom.js library, which is designed for game development. In my case, I created an imitation of my room and workspace. It was an interesting experience and quite different from what I was used to.',
    '2DEs': 'Proyecto de JavaScript donde trabajé con la librería Kaboom.js, la cual está diseñada para programar juegos. En mi caso, hice una imitación de mi cuarto y lugar de trabajo. Fue una experiencia interesante y diferente a lo que estaba acostumbrado.',
    arkEn: 'Replica of the game created by the YouTuber Midudev. I improved the collisions between the ball and the bricks so that the ball changes direction depending on the angle of collision. Additionally, I added a reset button and a game over screen.',
    arkEs: 'Replica del juego creado por el youtuber Midudev. Mejoré las colisiones de la bola con los ladrillos para que cambie de dirección dependiendo del angulo de colisión, además agregué un botón de reinicio y una pantalla de game over.',
    ticEn: "Who hasn't done this project? I was able to learn and practice the most well-known React hooks (useState, useEffect) in this classic game.",
    ticEs: '¿Quién no ha hecho este proyecto? Pude aprender y practicar los hooks más conocidos de React (useState, useEffect) en este juego clásico.',
}

export const projectsInformation = {
    colorBalance: {
        name: {
            en: 'Color Balance',
            es: 'Color Balance'
        },
        class: 'proColorBalance',
        gitHubLink: 'https://github.com/Manuel-GNcode/color-balance',
        description: {
            en: proDescriptions.cBalEn,
            es: proDescriptions.cBalEs
        },
        proLan: 'react',
        key: 'color-balance'
    },
    cutePortfolio: {
        name: {
            en: 'Lau Illustration',
            es: 'Lau Illustration'
        },
        class: 'proCutePortfolio',
        gitHubLink: 'https://github.com/Manuel-GNcode/cute-portfolio',
        description: {
            en: proDescriptions.cuteEn,
            es: proDescriptions.cuteEs
        },
        proLan: 'react',
        key: 'cute-portfolio'
    },
    enviroment: {
        name: {
            en: '2D Enviroment',
            es: 'Entorno 2D'
        },
        class: 'pro2Denviroment',
        gitHubLink: 'https://github.com/Manuel-GNcode/2d-enviroment',
        description: {
            en: proDescriptions['2DEn'],
            es: proDescriptions['2DEs']
        },
        key: '2d-enviroment'
    },
    arkanoid: {
        name: {
            en: 'Arkanoid Game',
            es: 'Juego del Arkanoid'
        },
        class: 'proArkanoid',
        gitHubLink: 'https://github.com/Manuel-GNcode/Arkanoid-Game',
        description: {
            en: proDescriptions.arkEn,
            es: proDescriptions.arkEs
        },
        key: 'arkanoid'
    },
    ticTacToe: {
        name: {
            en: 'Tic Tac Toe',
            es: 'Tres en Raya'
        },
        class: 'proTicTacToe',
        gitHubLink: 'https://github.com/Manuel-GNcode/Tic-Tac-Toe',
        description: {
            en: proDescriptions.ticEn,
            es: proDescriptions.ticEs
        },
        proLan: 'react',
        key: 'tic-tac-toe'
    },
};