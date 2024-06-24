import { useState } from "react"
import PropTypes from 'prop-types'

export const CertificationsSection = ({children='Text here', imgClass, description})=>{
    const [showModal, setShowModal] = useState(false);

    const handleModal = ()=>{
        setShowModal(!showModal);
    }

    return (
        <section className='sectionsCtr-section'>
            <span onClick={handleModal}  className={`sectionsCtr-section-img ${imgClass}`}></span>
            <h2>{children}</h2>
            {showModal && 
            <div onClick={handleModal} className="sections-modal">
                <div>
                    <span className={`${imgClass} img-modal`}></span>
                    <p className="sectionDescription">{description}</p>
                </div>
            </div>
            }
        </section>
    )
}

CertificationsSection.propTypes = {
    imgClass: PropTypes.string.isRequired,
    children: PropTypes.string,
    description: PropTypes.string
}