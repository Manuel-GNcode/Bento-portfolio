import './homeApp.css'
import { ButtonEffect } from './components/buttonEffect'
import { svgLinkedin, svgGithub, svgResume, svgBriefcase, svgHtml, svgCss, svgJs, svgReact, svgEmail, svgWhatsapp, svgStack, svgSun, svgMoon, svgAbout } from './constants/svgConsts'
import { Marquee } from './components/marquee'
import { useState, useEffect } from 'react'
import { AutoType, AutoTypePhrases } from './components/autoType'
import { changeDetailsColor, changeTheme } from './functions/functions'
import { textLanguage } from './constants/textConsts'
import { Form } from './components/form'
import { Particles } from './components/particles'
import { Link } from 'react-router-dom'

function HomeApp() {
    const lanEnState = JSON.parse(localStorage.getItem('english'));
    const darkState = JSON.parse(localStorage.getItem('isDark'));

    const [lanEn, setLanEn] = useState(lanEnState != null ? lanEnState.english : true);
    const handleLanguage = () => {
        setLanEn(!lanEn);
    };
    useEffect(() => {
        localStorage.setItem('english', JSON.stringify({ english: lanEn }));
    }, [lanEn]);

    const [darkTheme, setDarkTheme] = useState(darkState != null ? darkState.isDark : true);
    const handleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    useEffect(() => {
        changeTheme(darkTheme);
        changeDetailsColor(darkTheme, false);
        localStorage.setItem('isDark', JSON.stringify({ isDark: darkTheme }));
    }, [darkTheme]);

    const handleColorDetails = () => {
        changeDetailsColor(darkTheme, true);
    };

    return (
        <>
            <Particles className='particles' size={.6} staticity={150} quantity={150} color={darkTheme ? '#dddddd' : '#212529'} />

            <article id='bento-portfolio' className="bentoCtr">
                <section className="bentoSection bentoTags">
                    <button onClick={handleColorDetails} className='btn-a bentoTags-btn'>&lt; <b>GN</b>code /&gt;</button>
                    <button onClick={handleLanguage} className='btn-a bentoTags-btn'>{lanEn ? "ES" : "EN"}</button>
                    <button onClick={handleTheme} className='btn-a bentoTags-btn' aria-label="change-theme"><i>{darkTheme ? svgSun : svgMoon}</i></button>
                </section>

                <section className="bentoSection bentoPersonal">
                    <header>
                        <span className='bentoPersonal-photo'>
                            <img src="perfil-photo.png" alt="Perfil photo" />
                        </span>
                        <div>
                            <div className='bentoPersonal-available'><span></span>{lanEn ? "Available to work" : "Disponible"}</div>
                            <h1 id="perfil-name">Manuel Hoyos</h1>
                            <p className="bentoPersonal-profesion">{lanEn ? "I'm a" : 'Soy'} <AutoType lan={lanEn} /></p>
                        </div>
                        <a href='https://github.com/Manuel-GNcode' target='_blank' className='bentoPersonal-resume'>{lanEn ? "Resume" : "Curriculum"} <span className='svg-resume'>{svgResume}</span></a>
                    </header>

                    <main>
                        <span>Colombia</span><span>Spanish</span><span>Reading comprehension in English</span><span>Fronted dev.</span>
                    </main>

                    <footer>
                        <ButtonEffect link="#clientName" ariaLabel="Email me">
                            <span className='svg-email'>{svgEmail}</span>
                        </ButtonEffect>
                        <ButtonEffect link="https://www.linkedin.com/in/manuel-hoyos-mesa/" target={true} ariaLabel="Visit my Linkedin">
                            <span className='svg-linkeding'>{svgLinkedin}</span>
                        </ButtonEffect>
                        <ButtonEffect link="https://github.com/Manuel-GNcode" target={true} ariaLabel="Visit my Github repository">
                            <span className='svg-github'>{svgGithub}</span>
                        </ButtonEffect>
                        <ButtonEffect link="https://wa.link/9l471l" target={true} ariaLabel="Whatsapp me">
                            <span className='svg-whatsapp'>{svgWhatsapp}</span>
                        </ButtonEffect>
                    </footer>
                </section>

                <section className="bentoSection bentoProjects">
                    <div>
                        <span className='bentoProjects-subtitle'><i className='svg-briefcase'>{svgBriefcase}</i><p>{lanEn ? "Projects" : 'Proyectos'}</p></span>
                        <h2>{lanEn ? 'Works Gallery' : 'Galería de Trabajos'}</h2>
                    </div>
                    <Marquee />
                    <ButtonEffect link="/work" nameClass="projects-link">{lanEn ? 'View' : 'Ver más'}</ButtonEffect>
                </section>

                <section className="bentoSection bentoCertifications">
                    <p className='bentoCertifications-number'>3<b>+</b></p>
                    <ButtonEffect link="/certifications" nameClass="certifications-link">{lanEn ? 'Certifications' : 'Certificados'}</ButtonEffect>
                </section>

                <section className="bentoSection bentoPhrase">
                    <AutoTypePhrases lan={lanEn} />
                </section>

                <section className="bentoSection bentoDeck">
                    <div>
                        <span className='bentoDeck-subtitle'><i className='bentoDeck-svgStack'>{svgStack}</i><p>{lanEn ? 'My stacks' : 'Habilidades'}</p></span>
                        <h2>{lanEn ? 'Tech Arsenal' : 'Tecnologías'}</h2>
                    </div>
                    <div className='bentoDeck-stacks'>
                        <span>{svgHtml}</span>
                        <span>{svgCss}</span>
                        <span>{svgJs}</span>
                        <span>{svgReact}</span>
                    </div>
                </section>

                <section className="bentoSection bentoAbout">
                    <div>
                        <span className='bentoAbout-subtitle'><i className='bentoAbout-svgContact'>{svgAbout}</i><p>{lanEn ? 'About Me' : 'Sobre Mí'}</p></span>
                        <h2>{lanEn ? 'Enthusiastic Code Creator' : 'Programador entusiasta'}</h2>
                    </div>
                    <div className='bentoAbout-text'>
                        <p>{textLanguage(lanEn)[0]}</p>
                        <p>{textLanguage(lanEn)[1]}</p>
                    </div>
                </section>

                <section id='bento-contact' className="bentoSection bentoContact">
                    <div>
                        <span className='bentoContact-subtitle'><i className='bentoContact-svgContact'>{svgEmail}</i><p>{lanEn ? 'Say Hi!' : '¡Di Hola!'}</p></span>
                        <h2>{lanEn ? "I'd like to hear from you" : 'Me gustaría saber de ti'}</h2>
                    </div>

                    <Form isEn={lanEn} />
                </section>
            </article>

            <footer className='bentoFooter'>
                <nav className='bentoFooter-nav'>
                    <Link to='/'>{lanEn ? 'Home' : 'Inicio'}</Link>
                    <Link to='/work'>{lanEn ? 'Works' : 'Trabajos'}</Link>
                    <Link to='/certifications'>{lanEn ? 'Certifications' : 'Certificados'}</Link>
                </nav>
                <address className='bentoFooter-author'>
                    <p>Template by &lt; <b>GN</b>code /&gt;</p>
                </address>
            </footer>
        </>
    )
}

export default HomeApp
