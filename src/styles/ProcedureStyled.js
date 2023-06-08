import styled from "styled-components";

export const ProcedureStyled = styled.div `    
    .procedure-wrapper {
        margin: 35px auto;
        display: flex;
        flex-direction: column;
    }

    .procedure-contents {
        display: flex;
        align-items: center;
        gap: 60px;
        place-content: center;
        padding: 25px 0;
    }

    .procedure-img img{
        width: 275px;
        height: 275px;
        object-fit: cover;
        object-position: top;
    }

    .procedure-txt{
        font-size : 18px;
        width: 410px;

        .procedure-txt-sub {
            padding-top: 15px;
        }

        .procedure-txt-subtxt{
            padding: 5px 0;
        }

        .procedure-txt-step {
            font-weight: bold;
        }

        span {
            font-size : 20px;
        }

        button {
            font-size: 16px;
            background: rgb(255, 135, 0);
            color: white;
            padding: 12px;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.23) 2px 2px 2px 2px;
            margin-top: 20px;
        }
    }

    .procedure-whether {
        display: flex;
        gap: 120px;
        width: max-content;

        .pw-items.approval {
            background: palegreen;
            padding: 10px;
            align-self: center;
        }

        .pw-items.disapproval {
            background: palegreen;
            padding: 10px;
            align-self: center;
        }

        .pw-items-title {
            text-align: center;
        }
    }
`