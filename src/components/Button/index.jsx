import  React from 'react'
import {Container}  from './styles'


const Button = ({children, ...rest}) => (
    <Container type='button' {...rest}>{children} <i class="fa-sharp fa-solid fa-arrow-right"></i></Container>
);

export default Button;