import React from 'react';
import './styles.scss';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';

export default function HeaderMobile({ actRoute }) {
    return (
        <header>
            <Link to='/' className='profilePic'>
                <img
                    src='https://cdn.discordapp.com/attachments/1197327123522789498/1197706329729544202/Design_sem_nome.png?ex=65bc3df1&is=65a9c8f1&hm=a993c38909a493bb378e27c32d4e7bc392f668cc8030e7eee802c56586922a4c&'
                    alt='Logo ReFNN'
                />
                <div className='iconOnline'></div>
            </Link>
            <BurgerMenu actRoute={actRoute} />
        </header>
    );
}
