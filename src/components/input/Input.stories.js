import React from 'react'
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='small'></Input>
export const Medium = () => <Input size='medium' placeholder='medium'></Input>
export const Big = () => <Input size='big' placeholder='big'></Input>

Small.storyName = 'Small Input'