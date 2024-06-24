import './ContactApp.css'
import { Form } from '../home/components/form';
import { Particles } from '../home/components/particles';
import { ButtonEffect } from '../home/components/buttonEffect';
import { svgGithub, svgLinkedin, svgWhatsapp } from '../home/constants/svgConsts';
import { Link } from 'react-router-dom';
import { changeTheme } from '../home/functions/functions';

const lanState = JSON.parse(localStorage.getItem('english'));
const isEn = lanState == null ? true : lanState.english;

const themeState = JSON.parse(localStorage.getItem('isDark'));
const isDark = themeState == null ? true : themeState.isDark;

changeTheme(isDark);

function ContactApp () {
    return (
        <>
            <Particles className='particles' size={.6} staticity={150} quantity={150} color={isDark ? '#dddddd' : '#212529'} />

            <header className='sectionsHeader'>
                <p>&lt; <b>GN</b>code /&gt;</p>
                <nav className='sectionsHeader-nav'>
                    <Link to='/'>{isEn ? 'Home' : 'Inicio'}</Link>
                    <Link to='/work'>{isEn ? 'Works' : 'Trabajos'}</Link>
                    <Link to='/certifications'>{isEn ? 'Certifications' : 'Certificados'}</Link>
                </nav>
            </header>

            <main className='sectionsMain contactMain'>
                <h1 className='sectionsMain-title'>{isEn ? 'Contact': 'Contactáme'}</h1>

                <article className='sectionsCtr contactCtr'>
                    <Form isEn={isEn}/>
                </article>

                <article className='contact-social'>
                    <ButtonEffect link="https://www.linkedin.com/in/manuel-hoyos-mesa/" target={true} ariaLabel="Visit my Linkedin">
                        <span className='svg-linkeding'>{svgLinkedin}</span>
                    </ButtonEffect>
                    <ButtonEffect link="https://github.com/Manuel-GNcode" target={true} ariaLabel="Visit my Github repository">
                        <span className='svg-github'>{svgGithub}</span>
                    </ButtonEffect>
                    <ButtonEffect link="https://wa.link/9l471l" target={true} ariaLabel="Whatsapp me">
                        <span className='svg-whatsapp'>{svgWhatsapp}</span>
                    </ButtonEffect>
                </article>
            </main>

            <footer className='sectionsFooter'>
                <address><p>Template by &lt; <b>GN</b>code /&gt;</p></address>
            </footer>
        </>
    )
}

export default ContactApp;