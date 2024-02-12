import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightContact from './RightContact';
import HeaderMobile from '../../components/HeaderMobile';


export default function Contact() {
    return (
        <>
            <HeaderMobile actRoute={'/contato'} />
            <main className='padding-calc'>
                <div className='centerContainer'>
                    <LeftMenu actRoute={'/contato'} />
                    <RightContact />
                </div>
            </main>
        </>
    );
}
