import { useState } from 'react';
import PropTypes from 'prop-types';
import { AutoTypePoints } from './autoType';

export function Form({isEn}) {
    const [buttonText, setButtonText] = useState({en:'Send', es:'Enviar'});
    const [loading, setLoading] = useState(false);
    const [successSubmit, setSuccessSubmit] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const formData = new FormData(form);

        formData.append('access_key', '143f12d9-6167-43c7-be4a-12c65b82899e')

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setLoading(true);
        setButtonText({en:`Loading`, es:`Cargando`});
        setIsSubmit(true);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                form.reset();
                setSuccessSubmit(true);
                setIsSubmit(true);
                setButtonText({en:`Thanks for writing`, es:`Gracias por el mensaje`});
            } else {
                setSuccessSubmit(false);
                setIsSubmit(false);
                setButtonText({en:'Send', es:'Enviar'});
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccessSubmit(false);
            setIsSubmit(false);
            setButtonText({en:'Send', es:'Enviar'});
        } finally {
            setLoading(false);
            setShowModal(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='bentoContact-form'>
                <input maxLength="40" placeholder={isEn ? 'Your name' : 'Nombre'} required type="text" name="clientName" id="clientName" />
                <input maxLength="40" placeholder={isEn ? 'Your email' : 'Email'} required type="email" name="clientEmail" id="clientEmail" />
                <label htmlFor="clientMessage">
                    <p>{isEn ? 'Starting a new project or just saying hi?' : '¿Comenzando un nuevo proyecto?'}</p>
                    <textarea required rows="4" name="clientMessage" id="clientMessage"></textarea>
                </label>
                <button id='btnSubmit' className='btn-a' type="submit" disabled={loading ? loading : isSubmit}>{isEn?buttonText.en:buttonText.es}{loading && <AutoTypePoints/>}</button>
            </form>

            {showModal && <div onClick={()=>{setShowModal(false)}} className='formModal'>
                <p>
                    {successSubmit?
                    isEn?'Message sent successfully':'Mensaje enviado correctamente':
                    isEn?'Message not sent':'Mensaje no enviado'}
                </p>
            </div>}
        </>
    )
}

Form.propTypes = {
    isEn: PropTypes.bool.isRequired
}