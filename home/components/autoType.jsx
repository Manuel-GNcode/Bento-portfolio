import React from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

const englishType = ['Front-end', 'Developer'];
const espanishType = ['Desarrollador', 'Front-end'];
const randomPhrasesEs = [
    "El café es el mejor amigo del desarrollador.",
    "Siempre hay una forma más sencilla de hacer las cosas, el reto es encontrarla.",
    "Si funciona, no lo toques.",
    "El CSS es lo que le da estilo al caos.",
    "JavaScript es lo que sucede cuando unes café y matemáticas.",
    "El código perfecto es el que se mantiene sin errores.",
    "Cada vez que encuentres un error, habrás aprendido algo nuevo.",
    "El código no se escribe solo, hay que darle un poco de amor.",
    "El éxito en el desarrollo web es un 1% inspiración y un 99% transpiración.",
    "El front-end es donde la creatividad se encuentra con la lógica.",
    "El código es como el humor. Cuando tienes que explicarlo, es malo. - Cory House",
    "El mejor código es el que no tienes que escribir. - Steve McConnell",
    "La simplicidad es la máxima sofisticación. - Leonardo da Vinci",
    "El front-end es una mezcla entre diseño y lógica, donde la magia sucede.",
    "Un buen diseño puede hacer que una interfaz mediocre parezca genial.",
    "El código limpio es como un buen chiste: no necesita explicación. - Martin Fowler",
    "La programación es una forma de arte que lucha contra la entropía. - Ellen Ullman",
    "Nunca subestimes el poder de un buen diseño.",
    "Un buen front-end no solo se ve bien, sino que también se siente bien al usarlo.",
    "El código bien escrito es como una poesía en movimiento.",
    "Las mejores interfaces son las que desaparecen.",
    "El diseño no es solo lo que ves, sino cómo funciona. - Steve Jobs",
    "Los errores son las luces que iluminan el camino del aprendizaje."
];
const randomPhrasesEn = [
    "Coffee is the best friend of a developer.",
    "There is always a simpler way to do things, the challenge is to find it.",
    "If it works, don't touch it.",
    "CSS is what brings style to chaos.",
    "JavaScript is what happens when you mix coffee and mathematics.",
    "The perfect code is the one that stays error-free.",
    "Every time you find a bug, you learn something new.",
    "Code doesn't write itself, it needs a little love.",
    "Success in web development is 1% inspiration and 99% perspiration.",
    "Front-end is where creativity meets logic.",
    "Code is like humor. When you have to explain it, it's bad. - Cory House",
    "The best code is the one you don't have to write. - Steve McConnell",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Front-end is a mix between design and logic, where the magic happens.",
    "A good design can make a mediocre interface look great.",
    "Clean code is like a good joke: it needs no explanation. - Martin Fowler",
    "Programming is an art form that fights against entropy. - Ellen Ullman",
    "Never underestimate the power of good design.",
    "A good front-end not only looks good but also feels good to use.",
    "Well-written code is like poetry in motion.",
    "The best interfaces are the ones that disappear.",
    "Design is not just what you see, but how it works. - Steve Jobs",
    "Errors are the lights that illuminate the path of learning."
];

export function AutoType({lan}) {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: lan?englishType:espanishType,
            typeSpeed: 150,
            backSpeed: 100,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        return () => {
            typed.destroy();
        };
    }, [lan]);

    return (
        <>
            <span ref={el} />
        </>
    );
}

AutoType.propTypes = {
    lan: PropTypes.bool.isRequired
}

export function AutoTypePoints() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['...'],
            typeSpeed: 200,
            backSpeed: 0,
            loop: true,
            showCursor: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <span ref={el} />
        </>
    );
}

export function AutoTypePhrases({lan}) {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: lan? randomPhrasesEn: randomPhrasesEs,
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 5000,
            loop: true,
            showCursor: false
        });

        return () => {
            typed.destroy();
        };
    }, [lan]);

    return (
        <>
            <p ref={el} />
        </>
    );
}
AutoTypePhrases.propTypes = {
    lan: PropTypes.bool.isRequired
}