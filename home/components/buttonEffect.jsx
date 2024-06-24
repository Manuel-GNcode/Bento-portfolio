import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ButtonEffect = ({children, link, nameClass = '', target, ariaLabel})=>{
    return (
        <>
            <Link aria-label={ariaLabel} target={target?'_blank':''} className={`btn-a ${nameClass}`} to={link}>{children}</Link>
        </>
    )
}

ButtonEffect.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
    ,
    link: PropTypes.string.isRequired,
    nameClass: PropTypes.string,
    target: PropTypes.bool,
    ariaLabel: PropTypes.string
}