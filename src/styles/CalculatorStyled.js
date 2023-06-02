import styled from "styled-components";

export const CalculatorStyled = styled.div `    
    .calc-wrapper {
        width: 70%;
        border: 1px solid #FF8700;
        border-radius: 83px;
        margin: auto;
        padding: 50px;
    }
    
    .calc-contents {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }

    .calc-items {
        display: flex;
        gap: 30px;
        font-size: 25px;
        align-items: center;

        .calc-items-name {
            width: 100px;
        }
        
        select {
            font-size: 20px;
            padding: 10px;
            width: 40%;
            border: none;
            background: #f8f8f8;
            box-shadow: 0px 4px 10px #00000036;
            border-radius: 80px;
        }
    }
`