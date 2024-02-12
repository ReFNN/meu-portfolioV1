import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightProjects from './RightProjects';
import HeaderMobile from '../../components/HeaderMobile';

export default function Projects() {
    return (
        <>
            <HeaderMobile actRoute={'/projetos'} />
            <main className='padding-calc'>
                <div className='centerContainer'>
                    <LeftMenu actRoute={'/projetos'} />
                    <RightProjects />
                </div>
            </main>
        </>
    );
}
