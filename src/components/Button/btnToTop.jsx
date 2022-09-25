import { useEffect, useState } from 'react'
import { Container } from './topStyles'

import React from 'react'

export default function BackToTop() {
   const [backToTop, setBackToTop] = useState(false)

   useEffect(() => {
window.addEventListener("scroll", () => {
   if(window.scrollY > 200) {
       setBackToTop(true)
   }else {
       setBackToTop(false)
   }
})
   },[])

   const scrollUp = () => {
       window.scrollTo({
           top: 0,
           behavior: "smooth"
       })
   }
  return (
    <Container>
        <div className='btn'>
           {backToTop && (
               <button className='btn'  onClick={scrollUp}><i class="fa-sharp fa-solid fa-arrow-up"></i></button>
           )}
        </div>
    </Container>
  )
}


