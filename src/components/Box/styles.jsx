import styled from "styled-components";
import BgCard from '../../assets/img/bg-cards.jpg'
export const Wrapper = styled.div`

width: 100%;
color: black;



.container {
    background-image: url(${BgCard});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    border-radius: 10px;
    margin-top: -150px;
    margin-bottom: 50px;
   .sub {
    margin-top: -60px;
    @media (max-width: 860px) {
margin-top: 60px;
    }
    Button {
        margin-bottom: 30px;
    }
   
   }
  
}

.box-group {
margin-top: 750px;
margin-bottom: 50px;
.card {
    margin:100px 25px;
    width: 80%;
    box-shadow: 1px 5px 5px #00000026;
    align-items: center;
    display: flex;
    justify-content: center;
    hr {
        color: #ff1d1d;
        width: 140px;
        border: 3px solid;
        opacity: inherit;
        @media (max-width: 860px) {
         width: 100px;
         margin-left: 15px;
   }
    }
    @media (max-width: 860px) {
       margin: auto;

   }
}
img {
    width: 40%;
    margin-top: 20px;
    transition: all ease-in-out 0.2s;
    &:hover {
        transform: scale(1.3);
    }
    @media (max-width: 860px) {
         width: 35%;
         margin-top: 10px; 
   }
}
.card-body {
    text-align: center;

}
}



`;