import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;

margin-top: 50px;
.card-group {
    margin-left: 120px;
    .sub {
    margin-bottom: 50px;
    @media (max-width: 860px) {
        margin-right: 20px;
   }
color: #000;
Button {
    width: 30%;
    @media(max-width: 860px) {
        width:60%;
    }
}
h1 {
    font-size: 2rem;
    margin-bottom: -15px;
    text-align: center;
}
}

img {
    margin: 30px;
    border-radius: 10px;
    box-shadow: 1px 2px 4px #00000028;
    width: 309px;
    height: 580px;
    box-shadow: 1px 2px 5px #0000004d;
}
}@media (max-width: 860px) {
        margin-left: -80px;
   }





`;