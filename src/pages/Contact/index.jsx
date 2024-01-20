import React from 'react';
import './styles.scss';

import LeftMenu from '../../components/LeftMenu';
import RightContact from './RightContact';

export default function Contact() {
    return (
        <main className='padding-calc'>
            <div className='centerContainer'>
                <LeftMenu actRoute={'/contato'} />
                <RightContact />
            </div>
        </main>
    );
}
