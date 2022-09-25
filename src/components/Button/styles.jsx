import styled from "styled-components";


export const Container = styled.button`
 background: yellow;
    border-radius: 10px;
    border:0;
    padding: 0 ;
    width: 50%;
    height: 56px;
    color: #171717;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    

    &:hover {
       background: #f4f416;
        border: 1px solid #ffffff;
        color: #fff;
    }
    i{
        margin: 10px;
        
    }
`;