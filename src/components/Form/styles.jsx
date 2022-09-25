import styled from "styled-components";

export const Container = styled.div`

background: linear-gradient(to right,rgb(255, 255, 255) ,rgb(157, 148, 145) );
color: #000;
border-radius: 10px;
padding: 50px;
max-width: 700px;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
label {
    color: #787272;
}
Button {
  i {
    display: none;
  }
  width: 20%;
  @media (max-width: 860px) {
    width: 50%;
}
}
small {
    color: red;
}

`;