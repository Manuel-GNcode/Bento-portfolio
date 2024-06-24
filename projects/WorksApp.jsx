import './WorksApp.css'
import { renderProjects } from './src/functs/functions';
import { Particles } from '../home/components/particles';
import { Link } from 'react-router-dom';
import { changeTheme } from '../home/functions/functions';

const lanState = JSON.parse(localStorage.getItem('english'));
const isEn = lanState == null ? true : lanState.english;

const themeState = JSON.parse(localStorage.getItem('isDark'));
const isDark = themeState == null ? true : themeState.isDark;

changeTheme(isDark);

function WorkApp() {
    return (
        <>
        <Particles className='particles' quantity={200} staticity={100} color='#17b525'/>

        <header className='sectionsHeader'>
            <p className='sectionsHeader-logo'>&lt; <b>GN</b>code /&gt;</p>
            <nav className='sectionsHeader-nav'>
                <Link to='/'>{isEn ? 'Home' : 'Inicio'}</Link>
                <Link to='/certifications'>{isEn ? 'Certifications' : 'Certificados'}</Link>
                <Link to='/contact'>{isEn ? 'Contact': 'Contáctame'}</Link>
            </nav>
        </header>

        <main className='sectionsMain'>
            <h1 className='sectionsMain-title'>{isEn ? 'Projects': 'Proyectos'}</h1>

            <article className='sectionsCtr'>
                {
                    renderProjects(isEn)
                }
            </article>
        </main>

        <footer className='sectionsFooter'>
            <address><p>Template by &lt; <b>GN</b>code /&gt;</p></address>
        </footer>
        </>
    )
}

export default WorkApp;