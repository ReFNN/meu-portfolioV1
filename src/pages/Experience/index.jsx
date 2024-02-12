import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightExperience from './RightExperience';
import HeaderMobile from '../../components/HeaderMobile';

export default function Experience() {
    return (
        <>
            <HeaderMobile actRoute={'/experiencias'} />
            <main className='padding-calc'>
                <div className='centerContainer'>
                    <LeftMenu actRoute={'/experiencias'} />
                    <RightExperience actExp={'prof'} />
                </div>
            </main>
        </>
    );
}
