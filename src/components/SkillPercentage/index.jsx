import React from 'react';
import './styles.scss';

export default function SkillPercentage({ nome, porcentagem }) {
    return (
        <div className='skill'>
            <div>
                <div className='skillName'>
                    <span>{nome}</span>
                    <span>{porcentagem}%</span>
                </div>
                <div className='lineSkill'>
                    <div
                        className='line'
                        style={{ width: porcentagem + '%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
