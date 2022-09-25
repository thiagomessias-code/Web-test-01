import React from 'react'
import Form from '../Form'
import Img from '../../assets/img/tv.png'
import { Container } from './styles'

export default function Footer() {
  return (
    <Container>
<div className='container'>
        <div className="row">
            <div className="col-md-6">
                <Form/>
            </div>
            <div className="col-md-6">
                <img src={Img} alt="" />
            </div>
        </div>

    </div>
   
    </Container>
    
  )
}
