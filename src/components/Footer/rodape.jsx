import React from 'react'
import { Container } from './styleRodape'
import Button from '../Button/index'
import BtnToTop from '../Button/btnToTop'

export default function Rodape() {
  return (
    <Container>
      <div className="container text-center">
        <h1>QUERO ADERIR</h1>
        <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blanc" rel="noopener"><Button>+351 965 752 380</Button></a>
        <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blanc" rel="noopener"><Button>+351 965 752 380</Button></a>
        <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blanc" rel="noopener"><Button>+351 965 752 380</Button></a>
      </div>
      <div>
      <span>© 2022 Adesões de tv net voz</span>
      
      <BtnToTop/>
      </div>
    </Container>
  )
}
