import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightSkills from './RightSkills';

export default function Skills() {
    return (
        <main className='padding-calc'>
            <div className='centerContainer'>
                <LeftMenu actRoute={'/habilidades'} />
                <RightSkills />
            </div>
        </main>
    );
}
