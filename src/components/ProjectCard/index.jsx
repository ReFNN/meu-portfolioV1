import React from 'react';
import './styles.scss';

import IconSkill2 from '../IconSkill2';

export default function ProjectCard({
    img,
    url,
    alt,
    nome,
    tipo,
    descricao,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
}) {
    return (
        <a
            className='gridCard'
            href={url}
            target='_blank'
            rel='noreferrer'
        >
            <img src={img} alt={alt} />
            <div>
                <div className='titleGame'>
                    <h3>{nome}</h3>
                    <h4>{tipo}</h4>
                </div>
                <span>{descricao}</span>
            </div>
            <div className='iconsSkills'>
                {icon1 ? <IconSkill2 icon={icon1} alt={'Icone Tech'} /> : ''}
                {icon2 ? <IconSkill2 icon={icon2} alt={'Icone Tech'} /> : ''}
                {icon3 ? <IconSkill2 icon={icon3} alt={'Icone Tech'} /> : ''}
                {icon4 ? <IconSkill2 icon={icon4} alt={'Icone Tech'} /> : ''}
                {icon5 ? <IconSkill2 icon={icon5} alt={'Icone Tech'} /> : ''}
            </div>
        </a>
    );
}
