import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button,
    // args can be also used from here
    // args: {
    //     children: 'Button'
    // }
}

// Most simple stories
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

// Stories with template base
const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant: 'primary',
    children: 'PrimaryArgs'
}

// Extend a story from another
export const LongPrimaryA = () => Template.bind({})

LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args'
}
