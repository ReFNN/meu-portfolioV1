import React from 'react';
import './styles.scss';

import ProjectCard from '../../../components/ProjectCard';

export default function RightProjects() {
    return (
        <div className='containerRight'>
            <section>
                <div className='headerProjects'>
                    <div>
                        <h1>Meus Projetos</h1>
                        <span>
                            Alguns dos meus projetos pessoais e acadêmicos.
                        </span>
                    </div>
                </div>
                <div className='mainProjects'>
                    <div className='containerGrid'>
                        <ProjectCard
                            url={
                                'https://refnn.github.io/Royal-ShoesV3-finalversion/'
                            }
                            img={
                                'https://cdn.discordapp.com/attachments/1198073172877127781/1198102396841230466/Royal_Shoes.gif?ex=65bdaecf&is=65ab39cf&hm=43001183285cefcb5e46d178cd4bc8358e2727e0a744d677cdaebe05f1f71b15&'
                            }
                            alt={'Gif Royal Shoes'}
                            nome={'ROYAL SHOES'}
                            tipo={'E-commerce'}
                            descricao={
                                'Projeto acadêmico onde consistia em criar uma loja online. Decidi continuar trabalhando nele, adicionando carrinho de compras e login com banco de dados. Em produção a versão dele utilizando ReactJS.'
                            }
                            icon1={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692961970991176/html.png?ex=65bc317e&is=65a9bc7e&hm=3f2e1ce27dd857c664577fc0d72e91ef5e0f4e2da8bb2142a3c947e10f7f421d&'
                            }
                            icon2={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197693289801981992/javascript.png?ex=65bc31cc&is=65a9bccc&hm=318d6f21959509fe65689c8a8587f10ca1dabeedb548bd0c68a895380710d8fb&'
                            }
                            icon3={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692971995381910/logo-css-3-2048.png?ex=65bc3180&is=65a9bc80&hm=8f3098e57f4018f33d5c45553c87053937a00d03616445cdb506fe2b151a9c7e&https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                            icon4={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1198106093860167750/MySQL.png?ex=65bdb240&is=65ab3d40&hm=2684b9ca8bef55f07ecad3f6b2099de02dd4d0bbdb3d8716a8183f3f66f472a0&'
                            }
                            icon5={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                        />
                        <ProjectCard
                            url={
                                'https://github.com/ReFNN/ReFFight-2D-FIGHT-GAME'
                            }
                            img={
                                'https://cdn.discordapp.com/attachments/1198073172877127781/1198073195123703878/ReFFight.gif?ex=65bd939c&is=65ab1e9c&hm=d9dc5005267dff114d6735e2746ed8c29cd3d48ae38fe45426c06057930fb83b&'
                            }
                            alt={'Gif jogo ReFFight'}
                            nome={'REFFIGHT'}
                            tipo={'2D Fight Game'}
                            descricao={
                                'Tentativa de criação de um jogo de luta 2D em estilo pixel art sem usar uma game engine, js puro hehe. Os assets de personagem, animações e logo do jogo eu mesmo criei.'
                            }
                            icon1={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692961970991176/html.png?ex=65bc317e&is=65a9bc7e&hm=3f2e1ce27dd857c664577fc0d72e91ef5e0f4e2da8bb2142a3c947e10f7f421d&'
                            }
                            icon2={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197693289801981992/javascript.png?ex=65bc31cc&is=65a9bccc&hm=318d6f21959509fe65689c8a8587f10ca1dabeedb548bd0c68a895380710d8fb&'
                            }
                            icon3={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                        />
                        <ProjectCard
                            url={
                                'https://refnn.github.io/Your-Pomo-v1.0-Last-Version/'
                            }
                            img={
                                'https://cdn.discordapp.com/attachments/1198073172877127781/1198096990127521892/Your_Pomo.gif?ex=65bda9c6&is=65ab34c6&hm=979264550d214414494422b3b7be77d02b330ba47f82fa09fa594e44373755bc&'
                            }
                            alt={'Gif Your Pomo'}
                            nome={'YOUR POMO'}
                            tipo={'Pomodoro Timer'}
                            descricao={
                                'Temporizador baseado no método pomodoro que consiste em estudar e descansar em ciclos melhorando o rendimento. Além do timer, ele possui avisos sonoros e a função de adicionar tarefas a fazer.'
                            }
                            icon1={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692961970991176/html.png?ex=65bc317e&is=65a9bc7e&hm=3f2e1ce27dd857c664577fc0d72e91ef5e0f4e2da8bb2142a3c947e10f7f421d&'
                            }
                            icon2={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197693289801981992/javascript.png?ex=65bc31cc&is=65a9bccc&hm=318d6f21959509fe65689c8a8587f10ca1dabeedb548bd0c68a895380710d8fb&'
                            }
                            icon3={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692971995381910/logo-css-3-2048.png?ex=65bc3180&is=65a9bc80&hm=8f3098e57f4018f33d5c45553c87053937a00d03616445cdb506fe2b151a9c7e&https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                            icon4={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                        />
                        <ProjectCard
                            url={'https://github.com/ReFNN/AcquasportAPP'}
                            img={
                                'https://cdn.discordapp.com/attachments/1198073172877127781/1198110245139005470/Acqua_Sport.gif?ex=65bdb61e&is=65ab411e&hm=4fffce9c69615bd687f0665ebeaf9c7d60c3a635dbec61a35f02c09dac498547&'
                            }
                            alt={'Gif Acqua Sport App'}
                            nome={'ACQUA SPORT APP'}
                            tipo={'Gym App'}
                            descricao={
                                'Projeto acadêmico em parceria com uma academia onde foi desenvolvido um aplicativo para exibir o treino dos alunos. O sistema possuia outros recursos como painel de administrador. [Repositório limitado ao protótipo do projeto]'
                            }
                            icon1={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692998734065684/react.png?ex=65bc3186&is=65a9bc86&hm=6cb1ea52db47df9b781886dd5c6a7dc5117dc1855819c3617305a1d3a65d057b&'
                            }
                            icon2={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197693008804585482/styled_components.png?ex=65bc3189&is=65a9bc89&hm=0472ad3147adb84603055d505639b24183812d83252eba3846da9a16f15d5a72&'
                            }
                            icon3={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692989896671473/python.png?ex=65bc3184&is=65a9bc84&hm=0ffcfcb58ac178c181177cc32b28f9bfd19ed3d20e379861b797b4e8705a5038&'
                            }
                            icon4={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1198106093860167750/MySQL.png?ex=65bdb240&is=65ab3d40&hm=2684b9ca8bef55f07ecad3f6b2099de02dd4d0bbdb3d8716a8183f3f66f472a0&'
                            }
                            icon5={
                                'https://cdn.discordapp.com/attachments/1197327123522789498/1197692957801840691/git.png?ex=65bc317d&is=65a9bc7d&hm=9dfae26d265778e92af4c40c66dc5d1fd7424c5a8f1cabc7da1034695c407f1f&'
                            }
                        />
                    </div>
                </div>
                <div className='footerProjects'>
                    <div>
                        <h3>Quer ver mais do meu trabalho?</h3>
                        <span>
                            Há projetos são difíceis de apresentar visualmente,
                            alguns por serem focados em back-end...
                        </span>
                    </div>
                    <div>
                        <a
                            href='https://github.com/ReFNN?tab=repositories'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Ver mais projetos ➤
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
