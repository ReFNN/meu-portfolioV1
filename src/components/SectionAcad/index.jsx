import React from 'react';
import './styles.scss';

import ExperienciaATC from '../ExperienciaATC';

export default function SectionAcad() {
    return (
        <>
            <ExperienciaATC
                empresa={'Faculdade Faci Wyden'}
                funcao={'Análise e Desenvolvimento de Sistemas'}
                periodo={'Mar 2022 - Cursando'}
                descricao={
                    'Fundamentos de Programação, Estruturas de Dados e Algoritmos, Desenvolvimento de Software, Banco de Dados, Desenvolvimento Web e Mobile, Segurança da Informação, Experiência Prática e Adaptabilidade e Aprendizado Contínuo.'
                }
            />
            <ExperienciaATC
                empresa={'OneBitCode'}
                funcao={'Desenvolvimento Fullstack Javascript'}
                periodo={'Jul 2023 - Cursando'}
                descricao={
                    'Abrange em desenvolvimento full stack, incluindo front-end com ReactJS e Next.js, back-end com Node.js e Express, além de bancos de dados SQL e NoSQL. Também aborda JavaScript avançado, desenvolvimento mobile com React Native, complementado por práticas de controle de versão com Git e GitHub.'
                }
            />
            <ExperienciaATC
                empresa={'EF Standard'}
                funcao={'English Test'}
                periodo={'Emitido em: Set 2023'}
                descricao={
                    'O nível de inglês alcançado é 65/100 na escala de pontuação EF SET e C1 Advanced de acordo com o Quadro Europeu Comum de Referência (QECR). A pontuação EF SET é calculada como uma média das pontuações de leitura e audição.'
                }
            />
        </>
    );
}
