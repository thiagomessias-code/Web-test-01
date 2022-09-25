import React from 'react'
import { Container } from './styles'
import cardImg from '../../assets/img/card.jpg';
import Button from '../Button';

export default function Card() {
  return (
    <Container>
        <div class="card-group">
  <div class="">
    <img src={cardImg} class="card" alt="..."/>
   
  </div>
  <div class="">
    <img src={cardImg} class="" alt="..."/>
  
  </div>
  <div class="">
    <img src={cardImg} class="" alt="..."/>
    
  </div>
  <div className="col-md-12 text-center sub">
<h1>FALE AGORA COM UM GESTOR</h1>
    <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blank"  rel="noreferrer" ><Button>+351 965 752 380</Button></a>
</div>
</div>

    </Container>
    
  )
}
