import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightHome from './RightHome';

export default function Home() {
    return (
        <main className='padding-calc'>
            <div className='centerContainer'>
                <LeftMenu actRoute={'/'} />
                <RightHome />
            </div>
        </main>
    );
}
