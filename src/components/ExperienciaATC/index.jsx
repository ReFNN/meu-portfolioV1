import React from 'react';
import './styles.scss';

export default function ExperienciaATC({
    empresa,
    funcao,
    periodo,
    descricao,
}) {
    return (
        <article>
            <div className='infoExperiencia'>
                <h3>{empresa}</h3>
                <h4>{funcao}</h4>
                <span>{periodo}</span>
            </div>
            <div className='descExperiencia'>
                <span>{descricao}</span>
            </div>
        </article>
    );
}
