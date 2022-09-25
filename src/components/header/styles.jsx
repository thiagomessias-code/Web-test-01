import styled from "styled-components";
import Img from '../../assets/img/bg.jpg'
export const Container = styled.div `
.container {
  margin-left: 90px;
  @media (max-width: 860px) {
          margin-left: 0px;
          margin-top: -100px;
   }
} 

.bg {
background-image: url(${Img});
position: absolute;
display: block;
top: 0;
left: 0;
width: 100%;
height: 600px;



.text {
    h2 {
        color: yellow;
        margin-top: 200px;
        
}   @media (max-width: 860px) {
          text-align: center;
   }
span {
    font-size: 4rem;
    
}
@media (max-width: 860px) {
    margin-top: -50px;
  }
}
img {
  margin-top: 100px;
    @media (max-width: 860px) {
    width: 65%;
    margin-left: 50px;
    margin-top:-20px;
    
  }
}

Button {
  
  font-size: 1rem;
 display: flex;
 justify-content: center;
 align-items: center;
  line-height: 1; 
  width: 50%;
  margin-left: 140px;
  
  
  @media (max-width: 860px) {
         width: 70%;
         line-height: 1;
         margin: auto;
         margin-top: 40px;
        
       

   }
}


.login{
  font-size:1.9rem;
position: absolute;
top: 0;
right: 0;
margin-top: 20px;
margin-right: 20px;


  &:hover {
color: yellow;
}
@media (max-width: 860px) {
    cursor: pointer;
    
  }
}


}


`;