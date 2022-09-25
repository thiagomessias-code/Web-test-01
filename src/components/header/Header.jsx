import React, {useEffect} from 'react'
import {Container} from './styles'
import IMG from '../../assets/img/tv.png'
import Button from '../../components/Button'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Header() {
    useEffect(() => {
        Aos.init();
      },[])
    return (
        <Container>

            <div className='bg' >
                <div>
                    <Link to="/">
                        <FiLogIn className='login pull-right'/></Link>
                </div>
                    

                <div className="row container text-center">

                    <div className="col-md-6 text " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
                        <h2>INTERNET FIBRA + TV +VOZ</h2>
                        <span>
                            Adira já e escolha  sua vantagem
                        </span>
                        <a href="https://api.whatsapp.com/send?phone=351965752380" target="_blanc" rel="noopener"><Button>Quero falar com um <br /> gestor comercial</Button></a>
                    </div>
                    <div className="col-md-6" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src={IMG} alt=""/>
                    </div>
                </div>
            </div>

        </Container>
    )
}
