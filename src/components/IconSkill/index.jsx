import React from 'react';
import './styles.scss';


export default function IconSkill({icon, alt, width}) {
    return (
        <div className="tecIcon">
            <img src={icon} alt={alt} style={{ width: width + 'rem' }}/>
        </div>
    );
}
