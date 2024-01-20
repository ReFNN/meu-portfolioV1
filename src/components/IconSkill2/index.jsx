import React from 'react';
import './styles.scss';


export default function IconSkill2({icon, alt, width}) {
    return (
        <div className="iconProj">
            <img src={icon} alt={alt} style={{ width: width + 'rem' }}/>
        </div>
    );
}
