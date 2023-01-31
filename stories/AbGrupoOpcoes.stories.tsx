import React from 'react';
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbGrupoOpcoes',
    Component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Tamplate: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Primario = Tamplate.bind({})

Primario.args = {
    opcoes: [
        {
            id:1,
            titulo: 'Teste',
            corpo: 'R$100',
            rodape: '.pdf'
        },
        {
            id:2,
            titulo: 'Teste 2',
            corpo: 'R$100',
            rodape: '.pdf'
        },
        {
            id:3,
            titulo: 'Teste 3',
            corpo: 'R$100',
            rodape: '.pdf'
        }
    ]
} as AbGrupoOpcoesProps
