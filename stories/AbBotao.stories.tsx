import React from 'react';
import { AbBotao, AbBotaoProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbBotao',
    Component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Tamplate: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Tamplate.bind({})

Primario.args = {
    texto: 'Ab botão Primario',
    tipo: 'primario'
} as AbBotaoProps

export const Secudario = Tamplate.bind({})

Secudario.args = {
    texto: 'Ab botão Secundario',
    tipo: 'secudario'
}  as AbBotaoProps