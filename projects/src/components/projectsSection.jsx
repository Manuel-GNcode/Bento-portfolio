import { useState } from "react"
import PropTypes from 'prop-types'
import { svgLeftArrow, svgRightArrow } from "../constants/svgConst";
import { svgJs, svgGithub, svgReact } from "../../../home/constants/svgConsts"

export const ProjectsSection = ({children='Text here', gitHub, imgClass, description, prolanguage='js'})=>{
    const [showModal, setShowModal] = useState(false);

    const handleModal = ()=>{
        setShowModal(!showModal);
    }

    const programingLan = ()=>{
        if (prolanguage == 'react') return svgReact;
        else return svgJs;
    }

    return (
        <section className='sectionsCtr-section'>
            <i className='projectsCtr-section-lan'>{programingLan()}</i>
            {gitHub && <a target="_blank" href={gitHub} className="projectsCtr-section-github" aria-label="GitHub link"><i>{svgGithub}</i></a>}

            <span onClick={handleModal}  className={`sectionsCtr-section-img ${imgClass}`}></span>
            <h2>{children}</h2>
            
            {showModal && 
            <div className="sections-modal">
                <span onClick={handleModal} className="esc-btn">x</span>
                <div>
                    <div className="modal-slide">
                        <span id={imgClass} className={`${imgClass} img-modal`}>
                            <a className="btn-left" href={'#'+imgClass+'3'}>{svgLeftArrow}</a>
                            <a className="btn-right" href={'#'+imgClass+'2'}>{svgRightArrow}</a>
                        </span>
                        <span id={imgClass+'2'} className={`${imgClass+'2'} img-modal`}>
                            <a className="btn-left" href={'#'+imgClass}>{svgLeftArrow}</a>
                            <a className="btn-right" href={'#'+imgClass+'3'}>{svgRightArrow}</a>
                        </span>
                        <span id={imgClass+'3'} className={`${imgClass+'3'} img-modal`}>
                            <a className="btn-left" href={'#'+imgClass+'2'}>{svgLeftArrow}</a>
                            <a className="btn-right" href={'#'+imgClass}>{svgRightArrow}</a>
                        </span>
                    </div>
                    <p className="sectionDescription">{description}</p>
                </div>
            </div>
            }
        </section>
    )
}

ProjectsSection.propTypes = {
    imgClass: PropTypes.string.isRequired,
    children: PropTypes.string,
    description: PropTypes.string,
    prolanguage: PropTypes.string,
    gitHub: PropTypes.string
}