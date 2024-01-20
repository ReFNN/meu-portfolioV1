import React from 'react';
import './styles.scss';

import IconSkill from '../IconSkill';

export default function SectionFront() {
    return (
        <>
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197692961970991176/html.png?ex=65bc317e&is=65a9bc7e&hm=3f2e1ce27dd857c664577fc0d72e91ef5e0f4e2da8bb2142a3c947e10f7f421d&'
                }
                alt='Logo HTML'
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197692971995381910/logo-css-3-2048.png?ex=65bc3180&is=65a9bc80&hm=8f3098e57f4018f33d5c45553c87053937a00d03616445cdb506fe2b151a9c7e&'
                }
                alt={'Logo CSS'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197693289801981992/javascript.png?ex=65bc31cc&is=65a9bccc&hm=318d6f21959509fe65689c8a8587f10ca1dabeedb548bd0c68a895380710d8fb&'
                }
                alt={'Logo JavaScript'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197692998734065684/react.png?ex=65bc3186&is=65a9bc86&hm=6cb1ea52db47df9b781886dd5c6a7dc5117dc1855819c3617305a1d3a65d057b&'
                }
                alt={'Logo React JS'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197693005159743598/sass.png?ex=65bc3188&is=65a9bc88&hm=7ca429d978975aa9bbf9fd0d275fa74c43d7d608bc266b2368c096216ab5e1c4&'
                }
                alt={'Logo Sass'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197693008804585482/styled_components.png?ex=65bc3189&is=65a9bc89&hm=0472ad3147adb84603055d505639b24183812d83252eba3846da9a16f15d5a72&'
                }
                alt={'Logo Styled Components'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197693010863996948/Tailwind_CSS.png?ex=65bc3189&is=65a9bc89&hm=3189c7ef69675cdcc09c4a24028efb7bd9c32c5e05c734f8f2810ae1a620be9f&'
                }
                alt={'Logo Tailwind'}
            />
            <IconSkill
                icon={
                    'https://cdn.discordapp.com/attachments/1197327123522789498/1197692989896671473/python.png?ex=65bc3184&is=65a9bc84&hm=0ffcfcb58ac178c181177cc32b28f9bfd19ed3d20e379861b797b4e8705a5038&'
                }
                alt={'Logo Python'}
            />
        </>
    );
}
