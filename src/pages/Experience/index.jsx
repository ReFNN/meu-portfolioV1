import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightExperience from './RightExperience';

export default function Experience() {
    return (
        <main className='padding-calc'>
            <div className='centerContainer'>
                <LeftMenu actRoute={'/experiencias'} />
                <RightExperience actExp={'prof'}/>
            </div>
        </main>
    );
}
