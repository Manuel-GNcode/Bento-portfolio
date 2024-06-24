export const textLanguage = (isEn)=>{
    const textEn = [
        "Hi! Im Manuel, a passionate front-end developer. My journey into the world of programming began with the practicality and immediacy with which acquired knowledge can be applied, and since then, I haven't stopped exploring and growing in this field.",
        "I enjoy the challenge of solving problems and the satisfaction of seeing ideas come to life through code. Every day is an opportunity to learn something new, and this constant curiosity drives me to keep improving and staying up-to-date in a rapidly evolving field."];
    const textEs = [
        "¡Hola! Soy Manuel, un apasionado desarrollador front-end. Mi viaje en el mundo de la programación comenzó con la practicidad y la inmediatez con las que se puede aplicar el conocimiento adquirido, y desde entonces, no he dejado de explorar y crecer en este campo.",
        "Disfruto del desafío de resolver problemas y de la satisfacción de ver cómo las ideas cobran vida a través del código. Cada día es una oportunidad para aprender algo nuevo, y esta constante curiosidad me impulsa a seguir mejorando y manteniéndome actualizado en un campo que evoluciona rápidamente."];

    if (isEn) return textEn;
    return textEs;
}