import styled from "styled-components";

export const HeaderStyled = styled.div `
    width: 80%;
    margin: 15px auto 10px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 65px;
    align-items: center;

    .header-left img {
        border-radius: 60%;
        height: 65px;
    }

    .header-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
    }

    .header-right-items {
        display: flex;
        gap: 40px;
        font-size: 18px;
    }
`