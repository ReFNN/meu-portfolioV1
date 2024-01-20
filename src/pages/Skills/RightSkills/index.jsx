import React, { useState } from 'react';
import './styles.scss';

import SectionFront from '../../../components/SectionFront';
import SectionBack from '../../../components/SectionBack';
import SkillPercentage from '../../../components/SkillPercentage';

export default function RightSkills() {
    const [activeSkill, setActiveSkill] = useState('front');

    return (
        <div className='containerRight'>
            <section>
                <div className='headerSkills'>
                    <div>
                        <h1>Minhas Habilidades</h1>
                        <span>
                            As tecnologias que eu trabalho, estudo e minhas
                            soft-skills
                        </span>
                    </div>
                    <div className='bttHeader'>
                        <button
                            className={
                                activeSkill === 'front'
                                    ? 'btt-active'
                                    : 'btt-inactive'
                            }
                            onClick={() => setActiveSkill('front')}
                        >
                            Front-End
                        </button>
                        <button
                            className={
                                activeSkill === 'back'
                                    ? 'btt-active'
                                    : 'btt-inactive'
                            }
                            onClick={() => setActiveSkill('back')}
                        >
                            Back-End
                        </button>
                    </div>
                </div>
                <div className='mainSkills'>
                    {activeSkill === 'front' ? (
                        <SectionFront />
                    ) : (
                        <SectionBack />
                    )}
                </div>
                <div className='footerSkills'>
                    <div>
                        <span>Soft-Skills</span>
                    </div>
                    <div className='skillContainer'>
                        <SkillPercentage
                            nome='Resolução de Problemas'
                            porcentagem='72'
                        />
                        <SkillPercentage nome='Comunicação' porcentagem='80' />
                        <SkillPercentage
                            nome='Trabalho em Equipe'
                            porcentagem='89'
                        />
                        <SkillPercentage
                            nome='Adaptabilidade'
                            porcentagem='92'
                        />
                        <SkillPercentage
                            nome='Gerenciamento de Tempo'
                            porcentagem='67'
                        />
                        <SkillPercentage
                            nome='Aprendizado Contínuo'
                            porcentagem='100'
                        />
                        <SkillPercentage
                            nome='Atenção aos Detalhes'
                            porcentagem='94'
                        />
                        <SkillPercentage nome='Criatividade' porcentagem='95' />
                    </div>
                </div>
            </section>
        </div>
    );
}
