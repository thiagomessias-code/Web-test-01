import React from 'react'
import { Wrapper } from './styles'
import Icon1 from '../../assets/img/icons/computador.png'
import Icon2 from '../../assets/img/icons/monitor-de-tv.png'
import Icon4 from '../../assets/img/icons/central-de-atendimento.png'
import Button from '../Button'



export default function Box() {
  return (
    <Wrapper>
     <div className="container">
       <div class="row row-cols-1 row-cols-md-3 g-4 box-group">
         <div class="col-md-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
           <div class="card">
           <img   src={Icon1} alt="Internet" />
           <hr />
        <div class="card-body">
          <h5 class="card-title">Internet 100% fibra ótica</h5>
       
        </div>
           </div>
         </div>
         <div class="col-md-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
           <div class="card">
           <img src={Icon2} alt="Tv 4K" />
           <hr />
        <div class="card-body">
          <h5 class="card-title">Qualidade 4k de TV</h5>
       
        </div>
           </div>
         </div>
         <div class="col-md-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
           <div class="card">
           <img src={Icon1} alt="Garantia" />
           <hr />
        <div class="card-body">
          <h5 class="card-title">Melhor oferta garantida</h5>
       
        </div>
           </div>
         </div>
         <div class="col-md-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
           <div class="card">
           <img className='text-center' src={Icon4} alt="Atendimento" />
           <hr />
        <div class="card-body">
          <h5 class="card-title">Atendimento personalizado</h5>
       
        </div>
           </div>
         </div>
       </div>
       <div className="col-md-12 text-center sub">
<h1>FALE AGORA COM UM GESTOR</h1>
    <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blank"  rel="noreferrer" ><Button>+351 965 752 380</Button></a>
</div>
     </div>


    </Wrapper>
  )
}
