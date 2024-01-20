import React from 'react';
import './styles.scss';

import ExperienciaATC from '../ExperienciaATC';

export default function SectionProf() {
    return (
        <>
            <ExperienciaATC
                empresa={'Serigrafia Olhos de Águia'}
                funcao={'Designer Gráfico'}
                periodo={'Jan 2015 - Jun 2020'}
                descricao={
                    'Trabalhei criando designs gráficos e fazendo vetorização para serigrafia e sublimação. Era responsável por desenvolver logos e artes para serem utilizadas em estampa ou pinturas serigráficas.'
                }
            />
            <ExperienciaATC
                empresa={'Imperial Sports'}
                funcao={'Designer Gráfico'}
                periodo={'Jul 2020 - Fev 2022'}
                descricao={
                    'A Imperial Sports é uma empresa 100% focada em estampas de tecidos, principalmente jogos de camisas esportivas. Trabalhei como designer criando logos, vetorização de imagens mas principalmente na criação de artes para uniformes esportivos.'
                }
            />
            <ExperienciaATC
                empresa={'Colégio Unamea'}
                funcao={'Estagiário'}
                periodo={'Mar 2023 - Atual'}
                descricao={
                    'A Imperial Sports é uma empresa 100% focada em estampas de tecidos, principalmente jogos de camisas esportivas. Trabalhei como designer criando logos, vetorização de imagens mas principalmente na criação de artes para uniformes esportivos.'
                }
            />
        </>
    );
}
