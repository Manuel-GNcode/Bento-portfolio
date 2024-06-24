const proDescriptions = {
    '2DEn': 'A JavaScript project where I worked with the Kaboom.js library, which is designed for game development. In my case, I created an imitation of my room and workspace. It was an interesting experience and quite different from what I was used to.',
    '2DEs': 'Proyecto de JavaScript donde trabajé con la librería Kaboom.js, la cual está diseñada para programar juegos. En mi caso, hice una imitación de mi cuarto y lugar de trabajo. Fue una experiencia interesante y diferente a lo que estaba acostumbrado.',
    pokeEn: 'A project in which I practiced handling fetch requests in JavaScript to retrieve information from an API.',
    pokeEs: 'Proyecto en el cual puse en práctica el manejo de peticiones fetch en JavaScript para extraer información de una API.',
    ticEn: "Who hasn't done this project? I was able to learn and practice the most well-known React hooks (useState, useEffect) in this classic game.",
    ticEs: '¿Quién no ha hecho este proyecto? Pude aprender y practicar los hooks más conocidos de React (useState, useEffect) en este juego clásico.',
    pomoEn: 'Task or "Pomodoro" application. In this project, I practiced time management in JavaScript using setInterval() and setTimeout().',
    pomoEs: 'Aplicación de tareas o "Pomodoro". En este proyecto, puse en práctica el manejo del tiempo en JavaScript usando setInterval() y setTimeout().',
    cashEn: "Practicing operations in JS? There's nothing better than this project to learn operations and the handling of decimal numbers.",
    cashEs: '¿Practicando operaciones en JS? Nada mejor que este proyecto para aprender las operaciones y el manejo de números decimales.',
    paliEn: 'Practice in event handling and text string manipulation.',
    paliEs: 'Práctica de manejo de eventos y manipulación de cadenas de texto.',
    misEn: "Don't know how long until your birthday? In this project, I practiced using the internal JS 'Date' API, as well as localStorage to retain information when the page is refreshed.",
    misEs: "¿No sabes cuánto falta para tu cumpleaños? En este proyecto practiqué la API interna de JS 'Date', además del localStorage para no perder la información al actualizar la página.",
    phonEn: 'Practice with regular expressions for data validation. "If you have a problem and think you should use regular expressions to solve it, now you have two problems." - Jamie Zawinski',
    phonEs: 'Práctica de expresiones regulares para validar datos. "Si tienes un problema y piensas usar expresiones regulares para solucionarlo, ahora tienes dos problemas." - Jamie Zawinski',
    romaEn: 'I wish I had made this app when I was in high school. In this project, I was able to practice recursive functions.',
    romaEs: 'Desearía haber hecho esta aplicación cuando estaba en la secundaria. En este proyecto pude practicar las funciones recursivas.'
}

export const projectsInformation = {
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
    pokedex: {
        name: {
            en: 'PokéDex',
            es: 'PokéDex'
        },
        class: 'proPokeDex',
        gitHubLink: 'https://github.com/Manuel-GNcode/freeCodeCamp-projects/tree/master/pokemon',
        description: {
            en: proDescriptions.pokeEn,
            es: proDescriptions.pokeEs
        },
        key: 'pokedex'
    },
    ticTacToe: {
        name: {
            en: 'Tic Tac Toe',
            es: 'Tres en Raya'
        },
        class: 'proTicTacToe',
        gitHubLink: '',
        description: {
            en: proDescriptions.ticEn,
            es: proDescriptions.ticEs
        },
        proLan: 'react',
        key: 'tic-tac-toe'
    },
    pomodoro: {
        name: {
            en: 'Pomodoro',
            es: 'Pomodoro'
        },
        class: 'proPomodoro',
        gitHubLink: 'https://github.com/Manuel-GNcode/pomodoro',
        description: {
            en: proDescriptions.pomoEn,
            es: proDescriptions.pomoEs
        },
        key: 'pomodoro'
    },
    cashRegister: {
        name: {
            en: 'Cash Register',
            es: 'Caja Registradora'
        },
        class: 'proCashRegister',
        gitHubLink: 'https://github.com/Manuel-GNcode/freeCodeCamp-projects/tree/master/cashRegister',
        description: {
            en: proDescriptions.cashEn,
            es: proDescriptions.cashEs
        },
        key: 'cash-register'
    },
    palindrome: {
        name: {
            en: 'Palindrome Validator',
            es: 'Validador de Palindromos'
        },
        class: 'proIsPalindrome',
        gitHubLink: 'https://github.com/Manuel-GNcode/freeCodeCamp-projects/tree/master/palindrome',
        description: {
            en: proDescriptions.paliEn,
            es: proDescriptions.paliEs
        },
        key: 'palindrome'
    },
    missingDays: {
        name: {
            en: 'Missing Days',
            es: 'Días faltantes'
        },
        class: 'proMissingDays',
        gitHubLink: 'https://github.com/Manuel-GNcode/missing-days-app',
        description: {
            en: proDescriptions.misEn,
            es: proDescriptions.misEs
        },
        key: 'missing-days'
    },
    phoneValidator: {
        name: {
            en: 'Phone number validator',
            es: 'Validador de números'
        },
        class: 'proPhoneValidator',
        gitHubLink: 'https://github.com/Manuel-GNcode/freeCodeCamp-projects/tree/master/phoneValidator',
        description: {
            en: proDescriptions.phonEn,
            es: proDescriptions.phonEs
        },
        key: 'phone-validator'
    },
    toRomanNumber: {
        name: {
            en: 'Roman Number converter',
            es: 'Convertir a números romanos'
        },
        class: 'proToRomanNumber',
        gitHubLink: 'https://github.com/Manuel-GNcode/freeCodeCamp-projects/tree/master/numberToToman',
        description: {
            en: proDescriptions.romaEn,
            es: proDescriptions.romaEs
        },
        key: 'roman-number'
    },
};