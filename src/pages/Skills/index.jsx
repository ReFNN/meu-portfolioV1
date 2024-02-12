import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightSkills from './RightSkills';
import HeaderMobile from '../../components/HeaderMobile';

export default function Skills() {
    return (
        <>
            <HeaderMobile actRoute={'/habilidades'} />
            <main className='padding-calc'>
                <div className='centerContainer'>
                    <LeftMenu actRoute={'/habilidades'} />
                    <RightSkills />
                </div>
            </main>
        </>
    );
}
