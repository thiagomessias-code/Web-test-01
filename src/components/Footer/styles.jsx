import styled from "styled-components";
import Bg from '../../assets/img/bg.jpg'
export const Container = styled.div`

background-image: url(${Bg});
margin-top: 100px;
padding: 50px;
img {
    @media (max-width: 860px) {
         width: 90%;
         
   }
  
}
`;