import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function LeftMenu({ actRoute }) {
    const activeItem = actRoute;

    return (
        <aside className='containerMenu leftMenu'>
            <div>
                <Link to='/' className='profilePic'>
                    <img
                        src='https://cdn.discordapp.com/attachments/1197327123522789498/1197706329729544202/Design_sem_nome.png?ex=65bc3df1&is=65a9c8f1&hm=a993c38909a493bb378e27c32d4e7bc392f668cc8030e7eee802c56586922a4c&'
                        alt='Logo ReFNN'
                    />
                    <div className="iconOnline"></div>
                </Link>
                <div className='profileInfos'>
                    <div className='name-user'>
                        <span>Rodrigo Nascimento</span>
                        <a href='https://github.com/ReFNN'>@ReFNN</a>
                    </div>
                    <span>Desenvolvedor Full Stack</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li
                        className={
                            activeItem === '/' ? 'is-active' : 'is-inactive'
                        }
                    >
                        <Link to='/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='16'
                                width='18'
                                viewBox='0 0 576 512'
                                fill='rgba(255, 255, 255, 0.7)'
                            >
                                <path d='M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z' />
                            </svg>
                            Início
                        </Link>
                    </li>
                    <li
                        className={
                            activeItem === '/experiencias'
                                ? 'is-active'
                                : 'is-inactive'
                        }
                    >
                        <Link to='/experiencias'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='16'
                                width='18'
                                viewBox='0 0 384 512'
                                fill='rgba(255, 255, 255, 0.7)'
                            >
                                <path d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM96 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm-6.3 71.8c3.7-14 16.4-23.8 30.9-23.8h14.8c14.5 0 27.2 9.7 30.9 23.8l23.5 88.2c1.4 5.4 2.1 10.9 2.1 16.4c0 35.2-28.8 63.7-64 63.7s-64-28.5-64-63.7c0-5.5 .7-11.1 2.1-16.4l23.5-88.2zM112 336c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z' />
                            </svg>
                            Experiências
                        </Link>
                    </li>
                    <li
                        className={
                            activeItem === '/habilidades'
                                ? 'is-active'
                                : 'is-inactive'
                        }
                    >
                        <Link to='/habilidades'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='16'
                                width='18'
                                viewBox='0 0 576 512'
                                fill='rgba(255, 255, 255, 0.7)'
                            >
                                <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                            </svg>
                            Habilidades
                        </Link>
                    </li>
                    <li
                        className={
                            activeItem === '/projetos'
                                ? 'is-active'
                                : 'is-inactive'
                        }
                    >
                        <Link to='/projetos'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='16'
                                width='18'
                                viewBox='0 0 512 512'
                                fill='rgba(255, 255, 255, 0.7)'
                            >
                                <path d='M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z' />
                            </svg>
                            Projetos
                        </Link>
                    </li>
                    <li
                        className={
                            activeItem === '/contato'
                                ? 'is-active'
                                : 'is-inactive'
                        }
                    >
                        <Link to='/contato'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='16'
                                width='18'
                                viewBox='0 0 512 512'
                                fill='rgba(255, 255, 255, 0.7)'
                            >
                                <path d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z' />
                            </svg>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
            <span>© 2024 - Rodrigo Erick Freitas do Nascimento</span>
        </aside>
    );
}
