import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightHome from './RightHome';
import HeaderMobile from '../../components/HeaderMobile';

export default function Home() {
    return (
        <>
            <HeaderMobile actRoute={'/'}/>
            <main className='padding-calc'>
                <div className='centerContainer'>
                    <LeftMenu actRoute={'/'} />
                    <RightHome />
                </div>
            </main>
        </>
    );
}
